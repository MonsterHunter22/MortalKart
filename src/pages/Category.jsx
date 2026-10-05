import React from "react";
import { Link } from "react-router-dom";
import "../Css/Category.css";

const categories = [
  {
    id: 1,
    name: "Electronics",
    items: "120+ Items",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fashion",
    items: "200+ Items",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Home & Living",
    items: "150+ Items",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    items: "100+ Items",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Sports & Fitness",
    items: "80+ Items",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Books & Stationery",
    items: "60+ Items",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Groceries",
    items: "90+ Items",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=3174&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Toys & Games",
    items: "70+ Items",
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=2940&auto=format&fit=crop",
  },
];

function Category() {
  return (
    <section className="category-section">
      <h1>Shop by Category</h1>

      <p className="category-subtitle">
        Explore our wide range of products and find what you love
      </p>

      <div className="category-container">
        {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="category-card"
            key={category.id}
          >
            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-content">
              <div>
                <h2>{category.name}</h2>
                <p>{category.items}</p>
              </div>

              <span className="arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;