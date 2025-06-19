# 🛒 Product Listing Page – Frontend Developer Assignment

This project is a **responsive product listing web application** built with **Next.js**, **React.js**, and **Bootstrap 5**, created as part of a Frontend Intern assignment.

It fetches product data from a public API using **Server-Side Rendering (SSR)** and includes features like product filtering, detailed product view, and a loading spinner.

---

## 📌 Features

- ✅ Server-side rendering with `getServerSideProps`
- ✅ Fetch product data from [https://fakestoreapi.com/products](https://fakestoreapi.com/products)
- ✅ Responsive layout using **Bootstrap 5**
- ✅ Display product cards with:
  - Image
  - Title
  - Price
  - Category
  - Rating
- ✅ Client-side search filter
- ✅ Loading spinner during search
- ✅ Dynamic product details page using route `/product/[id]`

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/product-listing-app.git
cd product-listing-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
---

## 🗂️ Project Structure

```
product-listing-app/
├── components/
│   ├── ProductCard.js       # Renders product card with info and link
│   ├── SearchBar.js         # Search input for filtering
│   └── Spinner.js           # Bootstrap spinner
│
├── pages/
│   ├── index.js             # Home page: SSR + product listing
│   └── product/
│       └── [id].js          # Dynamic product details page
│
├── styles/
│   └── globals.css          # Global styles and Bootstrap overrides
├── pages/_app.js            # Loads Bootstrap globally
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---
