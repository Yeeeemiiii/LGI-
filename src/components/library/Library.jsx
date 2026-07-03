import React from 'react'
import Back from '../common/back/Back'
import { libraryBooks } from '../../dummydata'
import './library.css'

const Library = () => {
  return (
    <>
      <Back title="LGI Library" cover="/images/lib.webp" />
      
      <section className="library-page">
        <div className="container">
          
          <div className='heading' style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ fontSize: '40px', color: 'rgba(70, 145, 71, 1)', marginBottom: '10px', fontWeight: '600' }}>
              Book Store
            </h1>
            <h3 style={{ fontSize: '18px', color: '#be3526', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Recommended resources to accelerate your learning.
            </h3>
          </div>

          <div className="grid3">
            {libraryBooks.map((book) => (
              <div className="items shadow" key={book.id}>
                <div className="img">
                  <img src={book.cover} alt={book.title} />
                </div>
                <div className="text">
                  <h2>{book.title}</h2>
                  <p>By {book.author}</p>
                  <div className="price">
                    <h3>{book.price}</h3>
                  </div>
                  {/* Later, you can link this to a checkout page or WhatsApp! */}
                  <button className="outline-btn">ADD TO CART <i className="fa fa-shopping-cart"></i></button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Library