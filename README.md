# 🏔️ Monastery360 — Sikkim Virtual Monastery Explorer

> A feature-rich, single-page web application for discovering, exploring, and planning visits to Sikkim's monasteries through immersive 360° virtual tours, interactive maps, AI-powered itinerary planning, and a full booking & payments system.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Testing](#testing)
- [Module Reference](#module-reference)
- [Data Model](#data-model)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Monastery360 is a browser-based tourism platform focused on Sikkim's Buddhist monasteries. It combines an interactive Leaflet map, immersive panoramic (360°) tours, weather forecasts, cultural event bookings, community discussions, and an AI-powered itinerary planner — all within a single HTML/CSS/JS application that requires no backend server.

User data (authentication, bookings, itineraries, favourites) is persisted entirely in `localStorage`.

---

## Features

### 🗺️ Discovery & Exploration
- **15+ monastery listings** with real GPS coordinates, altitude, entry fees, hours, and best-season data
- **Interactive Leaflet map** with clickable markers and geolocation-based distance calculation
- **360° virtual tours** embedded via Google Street View panoramas and Pannellum viewer
- **Sort & filter** by rating, distance, altitude, or season
- **Favourites** — bookmark monasteries to a personal list

### 🤖 AI Itinerary Planner
- Multi-step wizard (monastery selection → transport → hotel → activities → cost summary)
- **TSP route optimisation** (Travelling Salesman heuristic via nearest-neighbour algorithm)
- **Smart suggestions** — scored recommendations based on proximity, rating, and altitude
- **Altitude acclimatisation warnings** for high-elevation routes
- Pre-built packages: *Spiritual Retreat*, *Adventure Trek*, *Photography Tour*, *Budget Explorer*
- Trip cost breakdown (transport, accommodation, entry fees, activities)
- Export itinerary as **PDF** or copy as plain text

### 🌦️ Weather
- Per-monastery 7-day forecast modal with temperature, precipitation, wind, humidity, and UV index
- Season-aware data generation

### 📅 Events & Booking
- Cultural events (Cham dances, meditation retreats, photography workshops, cooking classes)
- Event booking flow with QR-code payment simulation and polling for payment confirmation
- Order ID generation and booking receipt display

### 👤 Authentication
- **Email/password** sign-up and login with form validation
- **Google Sign-In** (Google Identity Services SDK)
- **Facebook Login** (Facebook JavaScript SDK)
- Persistent session via `localStorage`
- Password show/toggle, input error states, tab switching

### 📖 Community & Content
- Discussion forum with category filters (photography, hiking, spiritual, weather, meditation)
- Create new discussion threads
- Travel articles/guides with category filters and estimated read time
- Downloadable travel guides (generated as text files client-side)

### 🎵 Immersive Extras
- Auto-rotating panorama mode
- Monastery history narration (text-to-speech via Web Speech API)
- Share monastery location via Web Share API or clipboard fallback

### 🎨 Design System
- CSS custom-property design tokens (colours, spacing, typography, radii, shadows)
- **Dark mode** — `prefers-color-scheme` media query + manual `data-color-scheme="dark"` toggle
- Fully **responsive** layout (breakpoints at 640 px, 768 px, 1024 px, 1280 px)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (single file: `Monastery360.html`) |
| Styling | Vanilla CSS with CSS custom properties (`style.css`) |
| Logic | Vanilla JavaScript ES6+ (`app.js`) |
| Map | [Leaflet.js](https://leafletjs.com/) v1.9.4 |
| 360° Viewer | [Pannellum](https://pannellum.org/) v2.5.6 |
| Social Auth | Google Identity Services · Facebook JavaScript SDK |
| Persistence | Browser `localStorage` |
| PDF Export | Client-side HTML → print/PDF via `window.print()` |
| Speech | Web Speech API (`SpeechSynthesisUtterance`) |
| Sharing | Web Share API with clipboard fallback |

No build tools, bundlers, or server runtime are required.

---

## Project Structure

```
monastery360/
├── Monastery360.html      # Entry point — shell HTML, inline design tokens, SDK scripts
├── style.css              # Full design system: tokens, components, dark mode, responsive
├── app.js                 # All application logic (~3800 lines)
└── TESTING_GUIDE.js       # Browser-console testing utilities (dev only)
```

### `app.js` — Logical Sections

| Lines (approx.) | Responsibility |
|---|---|
| 1 – 395 | Monastery data array (15 entries with GPS, panorama URLs, metadata) |
| 396 – 460 | Static data: articles, forum posts, transport options, events, experience packages |
| 461 – 607 | Routing utilities: Haversine distance, TSP optimiser, smart suggestions, altitude warnings, cost calculator |
| 608 – 930 | App bootstrap, rendering (cards, map, gallery), favourites, share, panorama init |
| 931 – 1190 | Event listeners, AI planner listeners, weather modal, sorting/filtering |
| 1191 – 1993 | Section renderers: tours gallery, dining, events, discussions, articles, guide download |
| 1994 – 2541 | Itinerary wizard (steps 1–5), PDF generation, itinerary copy text |
| 2542 – 2960 | Account section, booking persistence, event booking form, payment flow, QR generation |
| 2961 – 3318 | Payment status polling, discussion creation, form validation utilities |
| 3319 – 3800 | Authentication: social login handlers, Google/Facebook SDK integration, email auth, UI updates |

---

## Getting Started

### Prerequisites
- A modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- An internet connection (CDN assets: Leaflet, Pannellum, Google/Facebook SDKs)
- *(Optional)* Google OAuth Client ID and Facebook App ID for social login

### Running Locally

1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/your-org/monastery360.git
   cd monastery360
   ```

2. **Serve the files** from a local HTTP server (required for some browser APIs):
   ```bash
   # Python 3
   python -m http.server 8080

   # Node.js (npx)
   npx serve .

   # VS Code: use the Live Server extension
   ```

3. Open `http://localhost:8080/Monastery360.html` in your browser.

> **Note:** Opening `Monastery360.html` directly via `file://` may block certain features (geolocation, Web Share) due to browser security policies. Always use a local server.

### Social Login Setup *(optional)*

#### Google Sign-In
1. Create a project in [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the **Google Identity** API and create an OAuth 2.0 client ID (Web application type).
3. Add `http://localhost:8080` to *Authorised JavaScript origins*.
4. Replace the placeholder `data-client_id` value in `Monastery360.html`:
   ```html
   <div id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        ...>
   ```

#### Facebook Login
1. Create an app at [Meta for Developers](https://developers.facebook.com/).
2. Add the **Facebook Login** product and configure `http://localhost:8080` as a valid OAuth redirect URI.
3. Replace the `appId` value inside the `initializeFacebookSDK()` function in `app.js`:
   ```javascript
   appId: 'YOUR_FACEBOOK_APP_ID',
   ```

---

## Authentication

The app supports three authentication paths:

| Method | Description |
|---|---|
| Email / Password | Credentials hashed and stored in `localStorage` under the `users` key |
| Google Sign-In | JWT decoded client-side; user upserted into `localStorage` |
| Facebook Login | Profile fetched via FB Graph API; user upserted into `localStorage` |

The active session is stored under the `currentUser` key in `localStorage`. On page load, `initApp()` reads this key to restore session state and update the navigation UI.

---

## Testing

A browser-console testing utility is provided in `TESTING_GUIDE.js`. It is **not** loaded by the app automatically — paste commands directly into DevTools (F12).

### Quick Start

```javascript
// 1. Check SDK and storage status
checkConfiguration()

// 2. Create a test email/password account
createTestUser()
// → Credentials: test@example.com / password123

// 3. Run the full quick-test flow
quickTest()
```

### All Available Commands

| Command | Description |
|---|---|
| `checkConfiguration()` | Reports SDK load status, localStorage availability, and stored user count |
| `createTestUser()` | Inserts a test user (`test@example.com` / `password123`) into `localStorage` |
| `simulateGoogleLogin()` | Logs the payload that would be passed to `handleSocialAuthSuccess()` for Google |
| `simulateFacebookLogin()` | Logs the payload that would be passed to `handleSocialAuthSuccess()` for Facebook |
| `quickTest()` | Runs steps 1–3 in sequence and prints next-action instructions |
| `printUser('email')` | Pretty-prints a user object from storage by email |
| `exportUserData()` | Dumps all users and current session as formatted JSON |
| `logoutCurrentUser()` | Removes `currentUser` from `localStorage` and reloads |
| `clearAllData()` | Prompts confirmation, then wipes all `localStorage` data and reloads |

---

## Module Reference

### Key Functions (`app.js`)

#### Routing & Planning
| Function | Description |
|---|---|
| `haversineDistance(lat1, lon1, lat2, lon2)` | Returns great-circle distance in km |
| `optimizeRouteTSP(selectedIds)` | Nearest-neighbour TSP heuristic; returns ordered monastery array |
| `getSmartSuggestions(currentSelection, max)` | Returns scored monastery recommendations |
| `getAltitudeWarnings(selectedIds)` | Returns acclimatisation warnings for high-altitude routes |
| `calculateTripCostAdvanced(params)` | Full trip cost breakdown by transport, hotel tier, and activities |

#### UI & Rendering
| Function | Description |
|---|---|
| `initApp()` | Bootstrap: restores session, renders monasteries, initialises map and social SDKs |
| `renderMonasteries()` | Renders filtered/sorted monastery card grid |
| `renderItineraryStep()` | Renders the active step of the 5-step itinerary wizard |
| `openTour(index)` | Opens the 360° tour modal and initialises Pannellum or Google embed |
| `openWeatherModal(index)` | Opens per-monastery weather forecast modal |

#### Authentication
| Function | Description |
|---|---|
| `handleLogin(e)` | Validates and processes email/password login |
| `handleSignup(e)` | Validates and registers a new user |
| `handleGoogleSignIn(response)` | Decodes Google JWT and calls `handleSocialAuthSuccess()` |
| `handleFacebookLogin(e)` | Fetches FB profile and calls `handleSocialAuthSuccess()` |
| `handleSocialAuthSuccess(socialUser)` | Upserts social user into storage, sets session, updates UI |
| `logout()` | Clears session and resets UI |

#### Booking & Payments
| Function | Description |
|---|---|
| `showEventBookingForm(eventId)` | Renders event booking form with dynamic pricing |
| `proceedToPayment(orderId)` | Initiates payment flow and renders QR code |
| `generateQRCode(orderId)` | Generates a QR code data URL for UPI/wallet payment |
| `startPaymentStatusPolling(orderId)` | Polls for payment confirmation (simulated) |
| `showPaymentSuccessScreen(orderId)` | Renders booking confirmation and receipt |

---

## Data Model

### Monastery Object
```javascript
{
  id: Number,
  name: String,
  description: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,          // metres
  altitudeText: String,
  season: String,            // e.g. "October - April"
  history: String,
  hours: String,
  entryFee: String,
  distance: String,          // e.g. "24 km from Gangtok"
  distanceKm: Number,
  rating: Number,            // 0–5
  reviews: Number,
  color: String,             // hex, used for card accent
  panoramaUrl: String        // Google Maps embed HTML or Pannellum image URL
}
```

### User Object (localStorage)
```javascript
{
  name: String,
  email: String,
  password: String,          // email/password auth only
  provider: String,          // "email" | "google" | "facebook"
  picture: String,           // avatar URL (social auth)
  sub: String,               // Google sub or Facebook ID
  bookings: Array,
  favorites: Array,          // monastery IDs
  savedItinerary: Object,
  createdAt: String          // ISO date string
}
```

### Booking Object
```javascript
{
  orderId: String,
  eventId: Number,
  eventTitle: String,
  attendees: Number,
  date: String,
  total: Number,
  status: String,            // "confirmed" | "pending"
  timestamp: String
}
```

---

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feature/your-feature`).
2. Keep all logic in `app.js` and styles in `style.css` — no build step is intentional.
3. Test against the commands in `TESTING_GUIDE.js` before opening a PR.
4. Follow the existing naming conventions: `camelCase` functions, `kebab-case` CSS classes.
5. Open a pull request with a clear description of the change and screenshots if UI is affected.

---

## License

This project is released under the [MIT License](LICENSE).

---

*Built with ❤️ for the monasteries of Sikkim.*
