import React, { useState } from 'react'
import Back from '../common/back/Back'

// 1. Import Database AND Storage tools
import { db, storage } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AdminBlog = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [type, setType] = useState('ADMIN')
  
  // New States for the Image Logic
  const [imageMode, setImageMode] = useState('link') // toggles between 'link' and 'upload'
  const [coverLink, setCoverLink] = useState('')
  const [imageFile, setImageFile] = useState(null)
  
  // Status States
  const [isPublishing, setIsPublishing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePublish = async (e) => {
    e.preventDefault()
    setIsPublishing(true) // Turn on loading state

    try {
      let finalImageUrl = coverLink;

      // STEP A: If they chose to upload a file, send it to Firebase Storage first!
      if (imageMode === 'upload' && imageFile) {
        // Create a unique name for the file so it doesn't overwrite anything
        const imageRef = ref(storage, `blog-images/${Date.now()}_${imageFile.name}`);
        
        // Upload the file
        const snapshot = await uploadBytes(imageRef, imageFile);
        
        // Get the brand new live URL for that uploaded file
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }

      // STEP B: Create the blog post object using the final image URL
      const dateObj = new Date()
      const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

      const newBlogPost = {
        title: title,
        desc: desc,
        cover: finalImageUrl, // This is either the pasted link OR the new Storage link
        type: type,
        date: formattedDate,
        com: "0 COMMENTS"
      }

      // STEP C: Send the text data to the Firestore Database
      await addDoc(collection(db, "lgi-blog-posts"), newBlogPost);

      setSuccess(true)
      setIsPublishing(false)

      // Wipe the form clean
      setTitle('')
      setDesc('')
      setCoverLink('')
      setImageFile(null)

      setTimeout(() => setSuccess(false), 3000)

    } catch (error) {
      console.error("Error publishing post: ", error)
      setIsPublishing(false)
    }
  }

  return (
    <>
      <Back title="Publish New Post" cover="/images/library.webp" />
      <section className="login-page padding">
        <div className="login-card shadow" style={{ maxWidth: '600px' }}>
          <h2>Admin Blog Portal</h2>
          <p className="subtitle">Fill out the details below to instantly publish to the live site.</p>

          {success && (
            <div style={{ background: 'rgba(70, 145, 71, 0.1)', color: '#1ba415', padding: '15px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
              <i className="fa fa-check-circle"></i> Blog Post Published Successfully!
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

            {/* --- NEW IMAGE TOGGLE SECTION --- */}
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

              {/* Conditional Input: Shows either a text box OR a file uploader */}
              {imageMode === 'link' ? (
                <input type="text" placeholder="Paste image link here" value={coverLink} onChange={(e) => setCoverLink(e.target.value)} required={imageMode === 'link'} />
              ) : (
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required={imageMode === 'upload'} style={{ padding: '10px 0', border: 'none' }} />
              )}
            </div>
            {/* --------------------------------- */}

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

            {/* Button changes text while uploading! */}
            <button type="submit" className="outline-btn" style={{ background: isPublishing ? '#777' : '#1ba415' }} disabled={isPublishing}>
              {isPublishing ? 'PUBLISHING...' : 'PUBLISH POST'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AdminBlog