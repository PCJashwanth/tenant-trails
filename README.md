# TenantTrails

An apartment review platform where tenants leave feedback, AI generates summaries, and future tenants make informed decisions before signing a lease.

## Lab 2 Scope

This builds on Lab 1 (Landing page) and adds:

- **React Router** — Landing, Login, Signup, and Dashboard routes
- **AuthContext** — shared user state across pages with `setUser` and `logout`
- **Sign In page** — email/password form with validation
- **Sign Up page** — name, email, password, confirm password with validation
- **Dashboard** — nav bar with username and sign out; apartment grid with search, neighbourhood filter, and sort
- **Protected route** — the dashboard redirects to `/login` when no user is signed in

## Tech Stack

- React 19
- React Router (react-router-dom)
- Vite
- Vanilla CSS with design tokens

## Project Structure

```
src/
├── pages/                  Full-screen views tied to routes
│   ├── Landing.jsx / .css
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Auth.css            Shared auth-card styles
│   ├── Dashboard.jsx / .css
├── components/             Reusable UI
│   ├── ProtectedRoute.jsx
│   ├── ApartmentCard.jsx / .css
│   └── StarRating.jsx / .css
├── context/                Shared state
│   └── AuthContext.jsx
├── data/                   Mock data
│   └── mockData.js
├── App.jsx                 Router + providers
├── main.jsx                Entry point
└── index.css               Global styles and design tokens
```

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Demo Login

```
Email:    alex@dal.ca
Password: password123
```

Any valid-format email with a 6+ character password also works (mock auth).

## Production Build

```bash
npm run build
```

Output is in `dist/`.

## Deployment

Deployed on Vercel. `vercel.json` includes a rewrite so client-side routes
(e.g. refreshing `/dashboard`) resolve to `index.html` instead of 404.
