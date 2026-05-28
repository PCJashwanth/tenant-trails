// Mock data for apartments, neighbourhoods, and the demo user.
// In later labs this gets replaced by real API calls.

export const DEMO_USER = {
  name: "Alex",
  email: "alex@dal.ca",
  password: "password123",
};

export const apartments = [
  {
    id: 1,
    name: "The Marlstone",
    address: "5540 Spring Garden Rd",
    neighbourhood: "Spring Garden",
    rating: 5.0,
    reviewCount: 1,
    tags: ["No AI summary yet"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Park Victoria",
    address: "1496 Carlton St",
    neighbourhood: "South End",
    rating: 4.5,
    reviewCount: 2,
    tags: ["Well maintained", "Quiet", "Expensive"],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Le Marchant Towers",
    address: "1585 Le Marchant St",
    neighbourhood: "West End",
    rating: 3.7,
    reviewCount: 3,
    tags: ["Good location", "Parking limited", "Aging building"],
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Fenwick Tower",
    address: "5599 Fenwick St",
    neighbourhood: "Downtown",
    rating: 3.3,
    reviewCount: 3,
    tags: ["Elevator issues", "Great views", "Security concerns"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Southpoint Apartments",
    address: "1050 South Park St",
    neighbourhood: "South End",
    rating: 2.5,
    reviewCount: 4,
    tags: ["No AI summary yet"],
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
  },
];

// Derived values for the stat pills on the dashboard.
export const neighbourhoods = [
  ...new Set(apartments.map((a) => a.neighbourhood)),
];

export const totalReviews = apartments.reduce(
  (sum, a) => sum + a.reviewCount,
  0
);
