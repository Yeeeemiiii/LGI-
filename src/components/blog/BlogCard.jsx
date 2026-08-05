import React, { useState, useEffect } from "react"
// 1. Import Firebase tools
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
// 2. old static data and rename it to 'fallbackData' so it doesn't get confused
import { blog as fallbackData } from "../../dummydata"
import { Link } from "react-router-dom"

const BlogCard = () => {
  // Create a memory bank for the combined posts
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Step A: Fetch all the new posts from live Firebase database
        const querySnapshot = await getDocs(collection(db, "lgi-blog-posts"));
        const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Step B: Stitch them together
        setPosts([...fetchedData.reverse(), ...fallbackData]);
        setLoading(false);
        
      } catch (error) {
        console.error("Failed to load live posts", error);
        
        // Failsafe: If the database is ever offline, at least show the old static posts!
        setPosts(fallbackData);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: 'center', width: '100%', color: '#777', padding: '50px 0' }}>Loading LGI Stories...</h2>
  }

  return (
    <>
      {posts.map((val) => (
        <Link to={`/blog/${val.id}`} key={val.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='items shadow'>
            <div className='img'>
              <img src={val.cover} alt='' />
            </div>
            <div className='text'>
              <div className='admin flexSB'>
                <span>
                  <i className='fa fa-user'></i>
                  <label htmlFor=''>{val.type}</label>
                </span>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>{val.date}</label>
                </span>
                <span>
                  <i className='fa fa-comments'></i>
                  <label htmlFor=''>{val.com}</label>
                </span>
              </div>
              <h1>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default BlogCard