
import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";

function Products() {
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(8);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    const loadMoreProducts = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    return (
        <div>
            <div className="products-page">
                <h1>Our Products</h1>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setVisibleCount(8);
                    }}
                />

                <div className="product-container">
                    {visibleProducts.length > 0 ? (
                        visibleProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>

                {visibleCount < filteredProducts.length && (
                    <button
                        className="load-more-btn"
                        onClick={loadMoreProducts}
                    >
                        Load More Products
                    </button>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Products;