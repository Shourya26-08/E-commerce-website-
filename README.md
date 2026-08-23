# ShopSphere — Level 3 Task 1: E-Commerce Website

A full-stack e-commerce application built for the Level 3 internship task using **React, Node.js/Express, MongoDB and Stripe Checkout**.

## Features
- User registration and JWT authentication
- Product catalogue with search, category, price and sorting filters
- Product details
- Persistent shopping cart in local storage
- Secure Stripe Checkout integration (test mode)
- Order creation and authenticated order history
- Responsive modern UI
- MongoDB seed script with sample products
- Environment variables and deployment-ready configuration

## Tech Stack
- Frontend: React + Vite + React Router
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcryptjs
- Payments: Stripe Checkout
- Deployment: Vercel/Netlify (frontend) + Render/Railway (backend) or any equivalent provider

## Project Structure
```text
client/                 React frontend
  src/
    components/         Reusable UI components
    context/            Auth and cart state
    pages/              Store pages
server/                 Express API
  src/
    middleware/         Authentication middleware
    models/             Mongoose models
    routes/             Auth, product, order and payment routes
  scripts/              Product seed script
```

## Local Setup

### 1. MongoDB
Use MongoDB Atlas or a local MongoDB instance.

### 2. Backend
```bash
cd server
npm install
cp .env.example .env
# Add your MongoDB URI, JWT secret and Stripe secret key
npm run seed
npm run dev
```
Backend runs on `http://localhost:5000`.

### 3. Frontend
```bash
cd client
npm install
cp .env.example .env
npm run dev
```
Frontend runs on the Vite URL, normally `http://localhost:5173`.

## Stripe Test Payments
Set `STRIPE_SECRET_KEY` in the server `.env`. The checkout endpoint creates a Stripe-hosted test checkout session. Use Stripe's official test card details while in test mode.

## Deployment
### Backend
Deploy `server` to Render/Railway. Set:
- `MONGODB_URI`
- `JWT_SECRET`
- `STRIPE_SECRET_KEY`
- `CLIENT_URL`

### Frontend
Deploy `client` to Vercel/Netlify. Set:
- `VITE_API_URL=https://YOUR-BACKEND-URL/api`

Then update the backend `CLIENT_URL` to the deployed frontend URL.

## Internship Task
**Level 3 — Task 1: E-Commerce Website**

The project implements browsing, filtering, cart management, authentication, checkout and payment integration as requested in the task brief.
