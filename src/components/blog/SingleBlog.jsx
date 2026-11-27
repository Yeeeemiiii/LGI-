import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, getDoc, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore'

import { blog as fallbackData } from '../../dummydata'
import Seo from '../common/seo/Seo'
import './blog.css'

const SingleBlog = () => {
  const { id } = useParams() 
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      const staticPost = fallbackData.find((p) => p.id.toString() === id);

      if (staticPost) {
        setPost(staticPost);
      } else {
        const docRef = doc(db, "lgi-blog-posts", id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setPost(docSnap.data())
        }
      }
    }
    fetchPost()

    const q = query(collection(db, `lgi-blog-posts/${id}/comments`), orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })

    return () => unsubscribe()
  }, [id])

  const submitComment = async (e) => {
    e.preventDefault()
    if (name.trim() && commentText.trim()) {
      await addDoc(collection(db, `lgi-blog-posts/${id}/comments`), {
        name: name,
        text: commentText,
        timestamp: new Date()
      })
      setName('')
      setCommentText('')
    }
  }

  if (!post) {
    return (
      <>
        <Seo title="Blog Article | LGI" path={`/blog/${id}`} />
        <h2 style={{ textAlign: 'center', padding: '100px' }}>Loading Article...</h2>
      </>
    )
  }

  const summary = (post.desc || '').replace(/\s+/g, ' ').trim().slice(0, 155).trim()

  return (
    <section className="single-blog padding" style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
      <Seo
        title={`${post.title} | LGI`}
        description={summary || undefined}
        path={`/blog/${id}`}
      />
      <div className="container shadow" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', maxWidth: '800px', margin: 'auto' }}>
        
        <Link to="/blog" style={{ color: '#be3526', fontWeight: '600', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>
          <i className="fa fa-arrow-left"></i> Back to Blog
        </Link>

        <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '15px' }}>{post.title}</h1>
        <div className="admin flexSB" style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '30px' }}>
          <span><i className='fa fa-user'></i> <label>{post.type}</label></span>
          <span><i className='fa fa-calendar-alt'></i> <label>{post.date}</label></span>
        </div>
        
        <img src={post.cover} alt={post.title} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '30px', maxHeight: '450px', objectFit: 'cover' }} />
        
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '50px', whiteSpace: 'pre-line' }}>
          {post.desc}
        </p>

        {/* --- COMMENTS SECTION --- */}
        <div className="comments-section" style={{ borderTop: '2px solid #f0f0f0', paddingTop: '40px' }}>
          <h3>Join the Conversation ({comments.length})</h3>
          
          <form onSubmit={submitComment} style={{ marginTop: '20px', marginBottom: '40px' }}>
            <input 
              type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required
              style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }} 
            />
            <textarea 
              rows="4" placeholder="Share your thoughts..." value={commentText} onChange={(e) => setCommentText(e.target.value)} required
              style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd', resize: 'vertical' }} 
            />
            <button type="submit" style={{ backgroundColor: '#1ba415', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Post Comment
            </button>
          </form>

          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#be3526' }}>{comment.name}</h4>
                <p style={{ margin: '0', fontSize: '15px', color: '#555' }}>{comment.text}</p>
                <small style={{ color: '#999', fontSize: '12px' }}>
                  {comment.timestamp?.toDate ? comment.timestamp.toDate().toLocaleDateString() : 'Just now'}
                </small>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SingleBlog