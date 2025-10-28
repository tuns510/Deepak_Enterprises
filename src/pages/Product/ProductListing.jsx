import React from 'react'
import './ProductListing.css'
import { products } from '../../assets/assets'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const ProductListing = () => {

    const { category } = useParams(); 
    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div>
            <Header/>
            <section id="product-listing">
                <div className="listing-header">
                    <h2>Complete Construction & Services Solutions</h2>
                    <p>Your one-stop destination for all construction materials, services, and solutions</p>
                </div>

                <div className="listing-grid">
                    {filteredProducts.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <a href="tel:+919840929131"><button>Contact for Price</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ProductListing
