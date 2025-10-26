import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import assets from '../../assets/assets'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

  const categories = [
    {
      id: 1,
      image: assets.sand,
      title: "Sand",
      desc: "Premium quality river sand for construction and concrete work.",
    },
    {
      id: 2,
      image: assets.flooring,
      title: "Flooring Materials",
      desc: "High-grade construction sand perfect for building foundations.",
    },
    {
      id: 3,
      image: assets.interior,
      title: "Interior Design",
      desc: "Pure silica sand for specialized construction applications.",
    },
    {
      id: 4,
      image: assets.building,
      title: "Building Structure Materials",
      desc: "Specially graded sand for concrete mixing and masonry work.",
    },
    {
      id: 5,
      image: assets.realestate,
      title: "Real Estate",
      desc: "Premium quality river sand for construction and concrete work.",
    },
    {
      id: 6,
      image: assets.furniture,
      title: "Furniture",
      desc: "High-grade construction sand perfect for building foundations.",
    },
    {
      id: 7,
      image: assets.paints,
      title: "Decorative Paints",
      desc: "Pure silica sand for specialized construction applications.",
    },
    {
      id: 8,
      image: assets.solar,
      title: "Solar Electrical Roofing",
      desc: "Specially graded sand for concrete mixing and masonry work.",
    },
    {
      id: 9,
      image: assets.jelly,
      title: "Jelly",
      desc: "Specially graded sand for concrete mixing and masonry work.",
    },
    {
      id: 10,
      image: assets.filling,
      title: "Basement Filling Materials",
      desc: "Specially graded sand for concrete mixing and masonry work.",
    },
    {
      id: 11,
      image: assets.loans,
      title: "Loans",
      desc: "Specially graded sand for concrete mixing and masonry work.",
    },
    {
      id: 12,
      image: assets.alteration,
      title: "Building Alteration",
      desc: "Specially graded sand for concrete mixing and masonry work.",
    },
    {
      id:13,
      image: assets.construction,
      title: "Building Constructions",
      desc: "Our projects.",
    },
  ];

  const steps = [
    {
      id: 1,
      icon: assets.call,
      title: "Get In Touch",
      desc: "Contact us via phone or email to discuss your requirements. Our team will understand your specific needs and project timeline.",
    },
    {
      id: 2,
      icon: assets.quote,
      title: "Get Quote",
      desc: "We provide transparent pricing with detailed quotes. No hidden costs, competitive rates, and flexible payment options available.",
    },
    {
      id: 3,
      icon: assets.delivery,
      title: "Fast Delivery",
      desc: "Once approved, we ensure timely delivery to your site. Our logistics team coordinates to meet your project deadlines.",
    },
  ];

  return (
    <div>
      <Header />

      <section className="hero-section">
        <img src={assets.dehero} alt="Sand and Construction Materials" className="hero-bg" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Premium Quality Sand & <br /> Construction Materials
            </h1>
            <p className="hero-subtitle">
              Your trusted partner for all construction material needs.
              Quality guaranteed, delivery on time.
            </p>
            <div className="hero-buttons">
              <a href="https://wa.me/919840929131" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Get Quote Now</button></a>
              <HashLink smooth to='#product-category'><button className="btn btn-outline">View Products</button></HashLink>
            </div>
          </div>
        </div>
      </section>

      <section id="about-de">
        <div className="about-de-container">

          {/* Left Content */}
          <div className="about-de-content">
            <h2 className="about-de-title">About Us</h2>
            <p className="about-de-text">
              With over two decades of experience in the construction materials industry,
              Deepak Enterprise has established itself as a reliable supplier of premium
              quality sand and construction materials across the region.
            </p>
            <p className="about-de-text">
              We pride ourselves on delivering consistent quality, competitive pricing,
              and exceptional customer service. Our commitment to excellence has made us
              the preferred choice for contractors, builders, and construction companies.
            </p>

            <div className="about-de-stats">
              <div className="stat-item">
                <h3>20+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <span>Happy Clients</span>
              </div>
              <div className="stat-item">
                <h3>10K+</h3>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-de-image">
            <img src={assets.dehero} alt="Sand and Construction Materials" />
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            Our streamlined process ensures you get the right materials at the right time with minimal hassle.
          </p>

          <div className="how-it-works-steps">
            {steps.map((step) => (
              <div className="how-it-works-step" key={step.id}>
                <div className="step-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <h3 className="step-title">{step.id}. {step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product-category">
        <div className="product-category-container">
          <h2 className="product-category-title">Products under Deepak & Tanisha Enterprises</h2>
          <p className="product-category-subtitle">
            We offer a comprehensive range of high-quality sand and other materials for all your project needs.
          </p>

          <div className="product-grid">
            {categories.map((cat) => (
              <HashLink to={`/products/${encodeURIComponent(cat.title.toLowerCase())}#product-listing`} key={cat.id} className='product-link' ><div className="product-card">
                <img src={cat.image} alt={cat.title} className="product-img" />
                <h3 className="product-name">{cat.title}</h3>
                <p className="product-desc">{cat.desc}</p>
              </div>
              </HashLink>
            ))}
          </div>
        </div>
      </section>

      <section id="get-quote">
        <div className="get-quote-container">
          <h2 className="get-quote-title">Ready to Get Started?</h2>
          <p className="get-quote-subtitle">
            Contact us today for a free quote and let us help you with your construction material needs.
          </p>
          <div className="get-quote-buttons">
            <a href="https://wa.me/919840929131" target="_blank" rel="noopener noreferrer"><button className="quote-btn primary">Get Free Quote</button></a>
            <a href="tel:+919790976509"><button className="quote-btn secondary">Call Now: +91 97909 76509</button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
