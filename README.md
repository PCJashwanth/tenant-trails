# TenantTrails

An apartment review platform where tenants leave feedback, AI generates summaries, and future tenants make informed decisions before signing a lease.

## Lab 3 Scope

This builds on Labs 1 and 2 and adds:

- **Apartment Detail page** (`/apartment/:id`) — header card, AI summary, key issues, property info sidebar, rating breakdown, and review list
- **Submit Review dialog** — modal with interactive star rating, textarea, validation, and submit
- **User Profile page** (`/profile`) — logged-in user's reviews with View / Edit / Delete actions
- **Edit Review dialog** — reuses the review modal with pre-filled data
- **ReviewsContext** — shared state managing reviews across pages (add, update, delete)
- **Vitest tests** — 16 tests across validation logic and the ReviewCard component
- **Clickable cards** — dashboard cards link to the detail page
- **Profile link** — top-bar avatar navigates to the profile page

## Tech Stack

- React 19
- React Router (react-router-dom)
- Vite
- Vitest + React Testing Library
- Vanilla CSS with design tokens

## Project Structure

```
src/
├── pages/                       Full-screen views tied to routes
│   ├── Landing.jsx / .css
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Auth.css                 Shared auth-card styles
│   ├── Dashboard.jsx / .css
│   ├── ApartmentDetail.jsx / .css
│   └── Profile.jsx / .css
├── components/                  Reusable UI
│   ├── ProtectedRoute.jsx
│   ├── TopBar.jsx / .css        Shared nav for protected pages
│   ├── ApartmentCard.jsx / .css
│   ├── ReviewCard.jsx / .css
│   ├── StarRating.jsx / .css
│   ├── AISummary.jsx / .css
│   ├── Modal.jsx / .css         Reusable modal wrapper
│   └── ReviewDialog.jsx / .css  Submit / edit review modal
├── context/                     Shared state
│   ├── AuthContext.jsx
│   └── ReviewsContext.jsx
├── utils/
│   └── validation.js            Pure form validators (unit tested)
├── data/
│   └── mockData.js              Apartments, reviews, demo user
├── __tests__/                   Test files
│   ├── setup.js
│   ├── validation.test.js
│   └── ReviewCard.test.jsx
├── App.jsx                      Router + providers
├── main.jsx                     Entry point
└── index.css                    Global styles and design tokens
```

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Running Tests

```bash
npm run test       # watch mode
npm run test:run   # single run (CI)
```

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
(e.g. refreshing `/dashboard` or `/apartment/3`) resolve to `index.html`
instead of 404.
