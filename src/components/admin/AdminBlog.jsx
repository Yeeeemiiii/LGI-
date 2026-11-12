import React, { useState, useEffect } from 'react'
import Back from '../common/back/Back'

// 1. Import Database, Storage, AND Auth tools
import { db, storage, auth } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AdminBlog = () => {
  // --- AUTH STATES ---
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  // --- BLOG FORM STATES ---
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [type, setType] = useState('ADMIN')

  const [imageMode, setImageMode] = useState('link') // toggles between 'link' and 'upload'
  const [coverLink, setCoverLink] = useState('')
  const [imageFile, setImageFile] = useState(null)

  const [isPublishing, setIsPublishing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [publishError, setPublishError] = useState('')

  // Check if the blog poster is already logged in on this browser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setAuthLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Handle One-Time Admin Sign In
  const handleLogin = async (e) => {
    e.preventDefault()
    setAuthError('')
    setIsLoggingIn(true)
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error("Login error:", error)
      setAuthError('Invalid admin email or password. Please try again.')
    } finally {
      setIsLoggingIn(false)
    }
  }

  // Handle Sign Out
  const handleLogout = async () => {
    await signOut(auth)
  }

  // Handle Blog Post Publish
  const handlePublish = async (e) => {
    e.preventDefault()
    setIsPublishing(true)
    setPublishError('')

    try {
      let finalImageUrl = coverLink;
      if (imageMode === 'upload' && imageFile) {
        // Optional safety check for 5MB Storage rule limit
        if (imageFile.size > 5 * 1024 * 1024) {
          setPublishError('Image file must be under 5MB.')
          setIsPublishing(false)
          return
        }

        const imageRef = ref(storage, `blog-images/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }

      const dateObj = new Date()
      const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

      const newBlogPost = {
        title: title,
        desc: desc,
        cover: finalImageUrl,
        type: type,
        date: formattedDate,
        com: "0 COMMENTS"
      }

      await addDoc(collection(db, "lgi-blog-posts"), newBlogPost);

      setSuccess(true)
      setIsPublishing(false)
      setTitle('')
      setDesc('')
      setCoverLink('')
      setImageFile(null)

      setTimeout(() => setSuccess(false), 3000)

    } catch (error) {
      console.error("Error publishing post: ", error)
      setPublishError('Permission denied or upload failed. Make sure you are signed in with the whitelisted admin email.')
      setIsPublishing(false)
    }
  }

  return (
    <>
      <Back title="Publish New Post" cover="/images/library.webp" />
      <section className="login-page padding">
        <div className="login-card shadow" style={{ maxWidth: '600px' }}>

          {authLoading ? (
            <p style={{ textAlign: 'center', padding: '20px 0' }}>Checking admin session...</p>
          ) : !user ? (
            /* --- ONE-TIME ADMIN LOGIN SCREEN --- */
            <>
              <h2>Admin Blog Sign In</h2>
              <p className="subtitle">Sign in once on this device to unlock the blog publishing portal.</p>

              {authError && (
                <div style={{ background: 'rgba(220, 53, 69, 0.1)', color: '#dc3545', padding: '12px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
                  {authError}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Admin Email</label>
                  <input
                    type="email"
                    placeholder="admin@lgimpact.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="outline-btn" style={{ background: isLoggingIn ? '#777' : '#1ba415' }} disabled={isLoggingIn}>
                  {isLoggingIn ? 'SIGNING IN...' : 'UNLOCK PORTAL'}
                </button>
              </form>
            </>
          ) : (
            /* --- UNLOCKED ADMIN BLOG PORTAL --- */
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <h2 style={{ margin: 0 }}>Admin Blog Portal</h2>
                <button
                  type="button"
                  onClick={handleLogout}
                  style={{ background: 'transparent', border: '1px solid #ccc', padding: '5px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: '#555' }}
                >
                  Sign Out ({user.email})
                </button>
              </div>
              <p className="subtitle">Fill out the details below to instantly publish to the live site.</p>

              {success && (
                <div style={{ background: 'rgba(70, 145, 71, 0.1)', color: '#1ba415', padding: '15px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
                  <i className="fa fa-check-circle"></i> Blog Post Published Successfully!
                </div>
              )}

              {publishError && (
                <div style={{ background: 'rgba(220, 53, 69, 0.1)', color: '#dc3545', padding: '15px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
                  {publishError}
                </div>
              )}

              <form onSubmit={handlePublish}>
                <div className="form-group">
                  <label>Post Title</label>
                  <input type="text" placeholder="e.g., LGI Opens New Library" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label>Author / Tag</label>
                  <input type="text" placeholder="e.g., ADMIN or VOLUNTEER" value={type} onChange={(e) => setType(e.target.value)} required />
                </div>

                {/* --- IMAGE TOGGLE SECTION --- */}
                <div className="form-group" style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px', border: '1px solid #eee' }}>
                  <label style={{ marginBottom: '15px' }}>Cover Image Source</label>

                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input type="radio" name="imageMode" checked={imageMode === 'link'} onChange={() => setImageMode('link')} />
                      Paste a Link
                    </label>
                    <label style={{ fontWeight: 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input type="radio" name="imageMode" checked={imageMode === 'upload'} onChange={() => setImageMode('upload')} />
                      Upload a File
                    </label>
                  </div>

                  {imageMode === 'link' ? (
                    <input type="text" placeholder="Paste image link here" value={coverLink} onChange={(e) => setCoverLink(e.target.value)} required={imageMode === 'link'} />
                  ) : (
                    <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required={imageMode === 'upload'} style={{ padding: '10px 0', border: 'none' }} />
                  )}
                </div>

                <div className="form-group">
                  <label>Blog Content</label>
                  <textarea
                    rows="8"
                    placeholder="Write your article here..."
                    style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', outline: 'none', resize: 'vertical' }}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="outline-btn" style={{ background: isPublishing ? '#777' : '#1ba415' }} disabled={isPublishing}>
                  {isPublishing ? 'PUBLISHING...' : 'PUBLISH POST'}
                </button>
              </form>
            </>
          )}

        </div>
      </section>
    </>
  )
}

export default AdminBlog