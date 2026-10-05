
import React from "react";

const products = [
    // Original 4 products
    {
        id: 1,
        name: "Apple iPhone 17",
        price: 69999,
        category: "Mobile",
        image: "https://m.media-amazon.com/images/I/617O+RkwdPL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Apple MacBook Air 15",
        price: 169999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/716M8uhjvSL._SL1500_.jpg"
    },
    {
        id: 3,
        name: "Noise Smart Watch",
        price: 4999,
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/61G6mGnBy2L._SL1500_.jpg"
    },
    {
        id: 4,
        name: "Razer Headphones",
        price: 7999,
        category: "Audio",
        image: "https://m.media-amazon.com/images/I/71lksrrLpJL._SL1500_.jpg"
    },

    // 40 additional products
    {
        id: 5,
        name: "Samsung Galaxy S25",
        price: 74999,
        category: "Mobile",
        image: "https://m.media-amazon.com/images/I/61NHqBDAwSL._SL1440_.jpg"
    },
    {
        id: 6,
        name: "OnePlus 15",
        price: 69999,
        category: "Mobile",
        image: "https://m.media-amazon.com/images/I/51lePOvNgZL._SL1500_.jpg"
    },
    {
        id: 7,
        name: "Google Pixel 10",
        price: 64999,
        category: "Mobile",
        image: "https://m.media-amazon.com/images/I/516HIUddM3L._SL1000_.jpg"
    },
    {
        id: 8,
        name: "Redmi Note 17 Pro",
        price: 24999,
        category: "Mobile",
        image: "https://m.media-amazon.com/images/I/61tBqux-UOL._SL1500_.jpg"
    },
    {
        id: 9,
        name: "Realme GT 7",
        price: 39999,
        category: "Mobile",
        image: "https://m.media-amazon.com/images/I/81ZnGCKRGHL._SL1500_.jpg"
    },
    {
        id: 10,
        name: "ASUS ROG Phone",
        price: 59999,
        category: "Mobile",
        image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-8-3.jpg"
    },
    {
        id: 11,
        name: "HP Pavilion Laptop",
        price: 62999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/71KR4mF8JLL._SL1500_.jpg"
    },
    {
        id: 12,
        name: "Dell Inspiron 15",
        price: 55999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/61BdsDQbMiL._SL1254_.jpg"
    },
    {
        id: 13,
        name: "Lenovo IdeaPad Slim",
        price: 48999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/71Q6JmLZE7L._SL1500_.jpg"
    },
    {
        id: 14,
        name: "ASUS TUF Gaming Laptop",
        price: 89999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/81sj8AT6zaL._SL1500_.jpg"
    },
    {
        id: 15,
        name: "Acer Nitro Gaming Laptop",
        price: 79999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/51WgXPBL4nL._SL1280_.jpg"
    },
    {
        id: 16,
        name: "Apple MacBook Pro",
        price: 189999,
        category: "Laptop",
        image: "https://m.media-amazon.com/images/I/615tKndaduL._SL1500_.jpg"
    },
    {
        id: 17,
        name: "Apple Watch Series",
        price: 41999,
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/61jsStDo4CL._SL1500_.jpg"
    },
    {
        id: 18,
        name: "Samsung Galaxy Watch",
        price: 22999,
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/619tP9hJ1sL._SL1500_.jpg"
    },
    {
        id: 19,
        name: "Fire-Boltt Smart Watch",
        price: 2499,
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/61rmkmqD5VL._SL1500_.jpg"
    },
    {
        id: 20,
        name: "boAt Smart Watch",
        price: 1999,
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/71UdDIKDlEL._SL1500_.jpg"
    },
    {
        id: 21,
        name: "Sony Wireless Headphones",
        price: 9999,
        category: "Audio",
        image: "https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg"
    },
    {
        id: 22,
        name: "boAt Rockerz Headphones",
        price: 1999,
        category: "Audio",
        image: "https://m.media-amazon.com/images/I/61cIHzCDl6L._SL1500_.jpg"
    },
    {
        id: 23,
        name: "JBL Bluetooth Speaker",
        price: 3999,
        category: "Audio",
        image: "https://m.media-amazon.com/images/I/51bfIuFGCAL._SL1080_.jpg"
    },
    {
        id: 24,
        name: "Apple AirPods",
        price: 14999,
        category: "Audio",
        image: "https://m.media-amazon.com/images/I/61oCISLE+PL._SL1500_.jpg"
    },
    {
        id: 25,
        name: "Samsung Galaxy Buds",
        price: 9999,
        category: "Audio",
        image: "https://m.media-amazon.com/images/I/61kwphoTFzL._SL1500_.jpg"
    },
    {
        id: 26,
        name: "Logitech Gaming Mouse",
        price: 2499,
        category: "Gaming",
        image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg"
    },
    {
        id: 27,
        name: "AntEsport Mechanical Gaming Keyboard",
        price: 3499,
        category: "Gaming",
        image: "https://m.media-amazon.com/images/I/71eWwwQOIQL._SL1500_.jpg"
    },
    {
        id: 28,
        name: "PlayStation 5 Controller",
        price: 5999,
        category: "Gaming",
        image: "https://m.media-amazon.com/images/I/61Q1Pa4X4-L._SL1500_.jpg"
    },
    {
        id: 29,
        name: "Xbox Wireless Controller",
        price: 5999,
        category: "Gaming",
        image: "https://m.media-amazon.com/images/I/51BADJOlbJL._SL1498_.jpg"
    },
    {
        id: 30,
        name: "Asus Rog Gaming Monitor 27-inch",
        price: 24999,
        category: "Gaming",
        image: "https://m.media-amazon.com/images/I/51C-Wsnjj6L.jpg"
    },
    {
        id: 31,
        name: "Men's Casual T-Shirt",
        price: 799,
        category: "Fashion",
        image: "https://m.media-amazon.com/images/I/51uzisX1fyL.jpg"
    },
    {
        id: 32,
        name: "Men's Denim Jeans",
        price: 1499,
        category: "Fashion",
        image: "https://m.media-amazon.com/images/I/61rVmtZdlYL._SY879_.jpg"
    },
    {
        id: 33,
        name: "Running Shoes",
        price: 2499,
        category: "Fashion",
        image: "https://m.media-amazon.com/images/I/71074fZToFL._SY695_.jpg"
    },
    {
        id: 34,
        name: "Classic Sneakers",
        price: 1999,
        category: "Fashion",
        image: "https://m.media-amazon.com/images/I/71ivYMOzncL._SY695_.jpg"
    },
    {
        id: 35,
        name: "Leather Wallet",
        price: 699,
        category: "Fashion",
        image: "https://m.media-amazon.com/images/I/71SYvtX2YmL._SX679_.jpg"
    },
    {
        id: 36,
        name: "Travel Backpack",
        price: 1299,
        category: "Fashion",
        image: "https://m.media-amazon.com/images/I/71GxZAYa6UL._SL1500_.jpg"
    },
    {
        id: 37,
        name: "Canon DSLR Camera",
        price: 45999,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SL1500_.jpg"
    },
    {
        id: 38,
        name: "Tcl Smart Led Google TV",
        price: 32999,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/71054xNB3iL._SL1500_.jpg"
    },
    {
        id: 39,
        name: "Portable Power Bank",
        price: 1499,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/61SRdzgwPTL._SL1500_.jpg"
    },
    {
        id: 40,
        name: "Ambrane Wireless Charging Pad",
        price: 999,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/719Gh+Rg9RL._SL1500_.jpg"
    },
    {
        id: 41,
        name: "Philips Air Fryer",
        price: 5999,
        category: "Home",
        image: "https://m.media-amazon.com/images/I/51CM1SXLDIL._SL1000_.jpg"
    },
    {
        id: 42,
        name: "Wonderchef Coffee Maker",
        price: 3499,
        category: "Home",
        image: "https://m.media-amazon.com/images/I/71bBUdEXlbL._SL1500_.jpg"
    },
    {
        id: 43,
        name: "Kian Table Lamp",
        price: 1299,
        category: "Home",
        image: "https://m.media-amazon.com/images/I/61fy5us405L._SL1500_.jpg"
    },
    {
        id: 44,
        name: "DA URBAN Ergonomic Office Chair",
        price: 8999,
        category: "Home",
        image: "https://m.media-amazon.com/images/I/61qEhDtYkRL._SL1100_.jpg"
    }
];

export default products;