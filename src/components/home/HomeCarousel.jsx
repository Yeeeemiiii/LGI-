import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../common/title/Title';
import './carousel.css';

const slides = [
  {
    title: "Language Immersion Programs",
    desc: "Master French, German, English, or Chinese with our expert-led immersion and flexible online courses tailored to your level.",
    btnText: "Explore Courses",
    link: "/courses",
    img: "/images/bg.webp" // Replace with a real classroom/learning image
  },
  {
    title: "LGI Talks Podcast",
    desc: "Conversations that teach. Learning that lasts. Join us as we explore the intersection of language, culture, and social impact.",
    btnText: "Listen Now",
    link: "/resources",
    img: "/images/back.webp" // Replace with a real podcast/microphone image
  },
  {
    title: "Community Literacy Outreach",
    desc: "Aligning with SDG 4, we design educational programs and street libraries to support multilingual and inclusive learning globally.",
    btnText: "Learn More",
    link: "/about",
    img: "/images/aboutwrapper.webp" // Replace with a real community image
  },
  {
    title: "Translation & Interpretation",
    desc: "Professional linguistic services bridging the gap across cultures for researchers, NGOs, and field-based projects.",
    btnText: "Contact Us",
    link: "/contact",
    img: "/images/about.webp" // Replace with a real professional/meeting image
  }
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const length = slides.length;

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="home-carousel-section">
      <div className="container">
        <Title subtitle="DISCOVER LGI" title="Empowering Through Language" />
        
        <div className="carousel-container shadow">
          {/* Left Arrow */}
          <button className="carousel-btn prev" onClick={prevSlide}>
            <i className="fa fa-chevron-left"></i>
          </button>

          {/* Slides */}
          {slides.map((slide, index) => (
            <div className={index === current ? "carousel-slide active" : "carousel-slide"} key={index}>
              {index === current && (
                <>
                  <img src={slide.img} alt={slide.title} className="carousel-image" />
                  <div className="carousel-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.desc}</p>
                    <button className="primary-btn" onClick={() => navigate(slide.link)} style={{ margin: 0 }}>
                      {slide.btnText} <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Right Arrow */}
          <button className="carousel-btn next" onClick={nextSlide}>
            <i className="fa fa-chevron-right"></i>
          </button>

          {/* Bottom Navigation Dots */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={index === current ? "dot active" : "dot"} 
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;