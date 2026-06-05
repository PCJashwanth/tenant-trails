// Mock data for apartments, reviews, comments, and the demo user.

export const DEMO_USER = {
  id: "u-alex",
  name: "Alex Mitchell",
  email: "alex@dal.ca",
  password: "password123",
};

// Extra mock authors for review attribution
export const mockAuthors = {
  "u-alex": { name: "Alex Mitchell", initials: "AM" },
  "u-james": { name: "James Chen", initials: "JC" },
  "u-priya": { name: "Priya Patel", initials: "PP" },
  "u-sam": { name: "Sam Wong", initials: "SW" },
  "u-dana": { name: "Dana Foster", initials: "DF" },
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
    description: "Modern boutique residence steps from Spring Garden Road.",
    landlord: "Marlstone Holdings",
    units: 32,
    yearBuilt: 2019,
    aiSummary: null,
    aiIssues: [],
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
    description: "Mid-rise building in a quiet residential pocket of the South End.",
    landlord: "Templeton Properties",
    units: 64,
    yearBuilt: 2008,
    aiSummary:
      "Tenants praise the cleanliness and quiet of the building. Rent is consistently called out as high for the area, but the upkeep and responsive management are seen as worth the premium for most reviewers.",
    aiIssues: ["Well maintained", "Quiet", "Expensive"],
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
    description: "High-rise tower in a quiet residential neighbourhood.",
    landlord: "Killam Properties",
    units: 88,
    yearBuilt: 1975,
    aiSummary:
      "Tenants consistently praise the location and proximity to Quinpool Road shops. Parking availability is a recurring complaint, with multiple reviewers mentioning waitlists exceeding six months. The building shows its age in hallway carpeting and elevator reliability, but unit interiors have been progressively updated.",
    aiIssues: ["Good location", "Parking limited", "Aging building", "Maintenance delays"],
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
    description: "Iconic downtown high-rise with harbour views.",
    landlord: "Templeton Properties",
    units: 268,
    yearBuilt: 1971,
    aiSummary:
      "Views and downtown location dominate the positive feedback. Elevator reliability is the most frequent complaint, with several reviewers describing extended outages. Some residents flag concerns about building access controls.",
    aiIssues: ["Elevator issues", "Great views", "Security concerns"],
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
    description: "Mid-rise apartment building near the public gardens.",
    landlord: "Southpoint Living",
    units: 45,
    yearBuilt: 1998,
    aiSummary: null,
    aiIssues: [],
  },
];

export const neighbourhoods = [
  ...new Set(apartments.map((a) => a.neighbourhood)),
];

// Initial seed reviews. The ReviewsContext owns the live list and lets
// users add / edit / delete; this is just the starting data.
export const seedReviews = [
  {
    id: "r-1",
    apartmentId: 3,
    userId: "u-james",
    rating: 4,
    body: "Good building overall. Management is professional and responsive within 48 hours for most issues. The parking situation is genuinely bad though. I waited five months for a spot.",
    date: "2026-04-01",
  },
  {
    id: "r-2",
    apartmentId: 3,
    userId: "u-alex",
    rating: 4,
    body: "Lived here for two years. Quiet neighbours, solid construction, and the Quinpool Road location is extremely convenient. Elevator breaks down about once a month but they fix it within the day.",
    date: "2026-03-19",
  },
  {
    id: "r-3",
    apartmentId: 3,
    userId: "u-priya",
    rating: 3,
    body: "Location is great but the carpets in the hallways are well past their replace-by date. Unit itself is fine.",
    date: "2026-02-08",
  },
  {
    id: "r-4",
    apartmentId: 1,
    userId: "u-sam",
    rating: 5,
    body: "Spotless building, responsive management, quiet halls. Worth every dollar.",
    date: "2026-04-12",
  },
  {
    id: "r-5",
    apartmentId: 2,
    userId: "u-dana",
    rating: 5,
    body: "Best-kept building I have lived in. Worth the price if you value quiet.",
    date: "2026-03-30",
  },
  {
    id: "r-6",
    apartmentId: 2,
    userId: "u-alex",
    rating: 4,
    body: "Clean and quiet, just pricey. Heating is excellent in winter though.",
    date: "2026-02-21",
  },
  {
    id: "r-7",
    apartmentId: 4,
    userId: "u-alex",
    rating: 4,
    body: "The view from the 28th floor is incredible. You can see the harbour, Dartmouth, and McNabs Island. Location is unbeatable.",
    date: "2026-03-15",
  },
  {
    id: "r-8",
    apartmentId: 4,
    userId: "u-alex",
    rating: 4,
    body: "Rent is very reasonable for downtown Halifax. The unit itself is fine, nothing fancy but functional. Laundry facilities could use updating.",
    date: "2026-02-02",
  },
  {
    id: "r-9",
    apartmentId: 4,
    userId: "u-james",
    rating: 2,
    body: "Elevators are a daily gamble. Three of four were down last week.",
    date: "2026-01-22",
  },
  {
    id: "r-10",
    apartmentId: 5,
    userId: "u-alex",
    rating: 3,
    body: "Decent location near the park but the building has issues. Heater in my unit broke during winter and it took four days to fix. Deposit was returned in full though, which I appreciated.",
    date: "2026-04-05",
  },
  {
    id: "r-11",
    apartmentId: 5,
    userId: "u-alex",
    rating: 2,
    body: "Average experience overall. The laundry room is always busy and half the machines are broken. Common areas are cleaned only occasionally.",
    date: "2026-03-02",
  },
];
