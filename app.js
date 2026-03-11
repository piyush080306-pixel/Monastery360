// Monastery Data with Real GPS Coordinates
const monasteries = [
    {
        id: 5,
        name: "Rabdentse Monastery",
        description: "Ruins of the ancient capital with spiritual significance",
        latitude: 27.307,
        longitude: 88.2915,
        altitude: 1500,
        altitudeText: "1500m",
        season: "October - April",
        history: "Remnants of 17th-century palace and monastery complex. Former capital of Sikkim before relocation to Gangtok.",
        hours: "7:00 AM - 5:00 PM",
        entryFee: "₹60 per person",
        distance: "45 km from Gangtok",
        distanceKm: 45,
        rating: 4.5,
        reviews: 223,
        color: "#764ba2",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769698620777!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0Q4cXJEdlFF!2m2!1d27.30140300061072!2d88.25662228383815!3f204.97208570375724!4f-19.526204264721784!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 1,
        name: "Rumtek Monastery",
        description: "The largest monastery in Sikkim, known for its golden roof and intricate artwork",
        latitude: 27.288834,
        longitude: 88.56145,
        altitude: 1560,
        altitudeText: "1560m",
        season: "October - May",
        history: "Built in 1966, it houses the Black Hat relics of the Karmapa",
        hours: "5:00 AM - 7:00 PM",
        entryFee: "Free",
        distance: "24 km from Gangtok",
        distanceKm: 24,
        rating: 4.8,
        reviews: 342,
        color: "#667eea",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769699552022!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2t2ZXZVaXdF!2m2!1d27.28884361783851!2d88.56089980788117!3f88.3796236089083!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 2,
        name: "Pemayangtse Monastery",
        description: "An ancient monastery with stunning views of the Kanchenjunga peak",
        latitude: 27.30444,
        longitude: 88.25278,
        altitude: 2084,
        altitudeText: "2084m",
        season: "March - October",
        history: "Founded in 1705, features a 7-story wooden structure",
        hours: "6:00 AM - 5:00 PM",
        entryFee: "₹50 per person",
        distance: "110 km from Gangtok",
        distanceKm: 110,
        rating: 4.9,
        reviews: 287,
        color: "#f093fb",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769699648734!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f29.149603!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 3,
        name: "Tashiding Monastery",
        description: "Perched on a hilltop, offering panoramic views and spiritual energy",
        latitude: 27.30833,
        longitude: 88.29806,
        altitude: 1465,
        altitudeText: "1465m",
        season: "Year-round",
        history: "Established in 1717 by Lama Phuntsog Chogyal",
        hours: "5:00 AM - 8:00 PM",
        entryFee: "Free",
        distance: "40 km from Gangtok",
        distanceKm: 40,
        rating: 4.7,
        reviews: 401,
        color: "#4facfe",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769699699566!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f337.7484!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 4,
        name: "Kanchenjunga Monastery",
        description: "Dedicated to the sacred mountain Kanchenjunga",
        latitude: 27.31,
        longitude: 88.30,
        altitude: 1970,
        altitudeText: "1970m",
        season: "April - September",
        history: "Built in the 18th century with Tibetan architectural style",
        hours: "6:00 AM - 6:00 PM",
        entryFee: "₹100 per person",
        distance: "95 km from Gangtok",
        distanceKm: 95,
        rating: 4.6,
        reviews: 198,
        color: "#fa709a",
        panoramaUrl: "https://pannellum.org/images/bma-3.jpg"
    },
    {
        id: 6,
        name: "Dubdi Monastery",
        description: "Sikkim's oldest monastery (established 1701), located near the former capital Yuksom. Features traditional two-story stone architecture.",
        latitude: 27.067,
        longitude: 88.467,
        altitude: 2100,
        altitudeText: "2100m (6,900 ft)",
        season: "October - May",
        history: "Oldest monastery in Sikkim; historical significance as coronation site of first Chogyal.",
        hours: "8:00 AM - 5:00 PM",
        entryFee: "₹50-100 per person",
        distance: "95 km from Gangtok",
        distanceKm: 95,
        rating: 4.6,
        reviews: 156,
        color: "#ff9a9e",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769699840676!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFVpdHkxNndF!2m2!1d27.36655288826205!2d88.22999220879571!3f326.35718!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 7,
        name: "Phensang Monastery",
        description: "One of the six largest monasteries in Sikkim (established 1721), featuring 300+ resident monks. Houses vibrant Cham dances in December.",
        latitude: 27.4203,
        longitude: 88.6103,
        altitude: 1900,
        altitudeText: "1900m",
        season: "Year-round",
        history: "Hosts largest number of monks; scenic December festival performances.",
        hours: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        distance: "27 km from Gangtok",
        distanceKm: 27,
        rating: 4.5,
        reviews: 182,
        color: "#a18cd1",
        panoramaUrl: "https://pannellum.org/images/bma-5.jpg"
    },
    {
        id: 8,
        name: "Phodong Monastery",
        description: "Founded in early 18th century (Karma Kagyu sect), features intricate murals and 260 resident monks. Built by the 9th Karmapa.",
        latitude: 27.4128,
        longitude: 88.5839,
        altitude: 1370,
        altitudeText: "1370m (4,500 ft)",
        season: "October - May",
        history: "Ancient wall paintings and sculptures; stunning mountain panoramas.",
        hours: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        distance: "38 km from Gangtok",
        distanceKm: 38,
        rating: 4.7,
        reviews: 215,
        color: "#fad0c4",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769699998816!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGg0OURqV3c.!2m2!1d27.41303405816734!2d88.58375766744783!3f161.06181!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 9,
        name: "Sanga Choeling Monastery",
        description: "One of the oldest monasteries (established 1697), accessible by scenic 4km trek through dense forests. Features 17th-century clay statues.",
        latitude: 27.2639,
        longitude: 88.2214,
        altitude: 2200,
        altitudeText: "2200m (7,200 ft)",
        season: "March - October",
        history: "Pristine forest trek; ancient artifacts. Entry to inner sanctum restricted to Bhutia and Lepcha communities.",
        hours: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        distance: "110 km from Gangtok",
        distanceKm: 110,
        rating: 4.8,
        reviews: 143,
        color: "#ffecd2",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769700043532!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVnS3p0dlFF!2m2!1d27.29775170700695!2d88.22168671699492!3f245.1103!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 10,
        name: "Ralang Monastery",
        description: "Largest monastery in Sikkim (rebuilt 1995), features extensive paintings and Thangkas. Hosts annual Pang Lhabsol festival in August-September.",
        latitude: 27.3283,
        longitude: 88.3347,
        altitude: 1820,
        altitudeText: "1820m",
        season: "April - June",
        history: "Vibrant festivals; comprehensive Buddhist art collection; South Sikkim location.",
        hours: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        distance: "74 km from Gangtok",
        distanceKm: 74,
        rating: 4.6,
        reviews: 267,
        color: "#fcb69f",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769700080345!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDh5NUc4RGc.!2m2!1d27.3284964274141!2d88.33524768412993!3f152.78369!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 11,
        name: "Enchey Monastery",
        description: "Built in 1909 in Chinese pagoda style, overlooks Gangtok. Belongs to Nyingma sect with ~90 resident monks.",
        latitude: 27.3358,
        longitude: 88.6192,
        altitude: 1900,
        altitudeText: "1900m",
        season: "Year-round",
        history: "Closest major monastery to capital; excellent city views; accessible to tourists.",
        hours: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        distance: "3 km from Gangtok",
        distanceKm: 3,
        rating: 4.4,
        reviews: 489,
        color: "#84fab0",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769700118726!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0pzTXEzOWdF!2m2!1d27.33593677395685!2d88.61916587167339!3f44.015686!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 12,
        name: "Lingdum Monastery",
        description: "Recently constructed monastery (completed 1998), popular with filmmakers. Modern architectural style combined with traditional elements.",
        latitude: 27.35,
        longitude: 88.55,
        altitude: 1500,
        altitudeText: "1500m",
        season: "Year-round",
        history: "Movie filming location; contemporary design; easily accessible.",
        hours: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        distance: "20 km from Gangtok",
        distanceKm: 20,
        rating: 4.5,
        reviews: 312,
        color: "#8fd3f4",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769700155591!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ011T2JkcmdF!2m2!1d27.33118603686677!2d88.5790941249777!3f281.10345!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 13,
        name: "Khecheopalri Lake Area",
        description: "Sacred lake in West Sikkim, part of pilgrimage circuit. Crystal-clear waters with surrounding monasteries.",
        latitude: 27.2,
        longitude: 88.2,
        altitude: 1700,
        altitudeText: "1700m",
        season: "March - October",
        history: "Sacred wish-fulfilling lake.",
        hours: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        distance: "145 km from Gangtok",
        distanceKm: 145,
        rating: 4.8,
        reviews: 345,
        color: "#a8edea",
        panoramaUrl: '<iframe src="https://www.google.com/maps/embed?pb=!4v1769700223176!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0ctZlhuNkFF!2m2!1d27.34922097771846!2d88.18827678962926!3f22.460953!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
];

// Events Data
const events = [
    {
        id: 1,
        name: "Losar Festival - Tibetan New Year",
        date: "2025-02-01",
        time: "8:00 AM - 6:00 PM",
        duration_days: 1,
        monastery_id: 1,
        monastery_name: "Rumtek Monastery",
        type: "festival",
        description: "Celebrate Tibetan New Year with traditional rituals, masked dances (Cham), and sacred ceremonies. Join monks and pilgrims in this vibrant festival featuring colorful costumes and sacred rituals passed down through generations.",
        what_to_bring: ["Camera", "Warm clothes", "Comfortable shoes", "Sun protection"],
        rules: ["Respect monastery rules", "Photography only in designated areas", "Silence during prayers"],
        max_participants: 1500,
        current_participants: 1200,
        price: 1000,
        includes: ["Meals", "Guided tour", "Cultural materials", "Souvenir"],
        rating: 4.8,
        reviews: 234
    },
    {
        id: 2,
        name: "3-Day Meditation Retreat",
        date: "2025-01-15",
        time: "6:00 AM - 8:00 PM",
        duration_days: 3,
        monastery_id: 3,
        monastery_name: "Tashiding Monastery",
        type: "meditation",
        description: "A guided meditation and spiritual awakening session led by experienced monks. Learn ancient Buddhist meditation techniques in the serene environment of this sacred monastery.",
        what_to_bring: ["Meditation cushion", "Warm layers", "Journal", "Meditation app optional"],
        rules: ["No phones during sessions", "Vegetarian meals only", "Early morning practices", "Silence between 8-9 PM"],
        max_participants: 50,
        current_participants: 42,
        price: 5000,
        includes: ["Accommodation", "All meals", "Daily teachings", "Meditation materials", "Certificate"],
        rating: 4.9,
        reviews: 156
    },
    {
        id: 3,
        name: "Professional Photography Workshop",
        date: "2025-01-22",
        time: "9:00 AM - 5:00 PM",
        duration_days: 1,
        monastery_id: 2,
        monastery_name: "Pemayangtse Monastery",
        type: "photography",
        description: "Learn monastery photography from professional photographers. Master composition, lighting, and capturing the spiritual essence of these sacred spaces. Includes portfolio review and feedback.",
        what_to_bring: ["DSLR or mirrorless camera", "Lenses", "Tripod", "Memory cards", "Batteries"],
        rules: ["Respect photography guidelines", "Editing software basics required", "Follow group schedule"],
        max_participants: 30,
        current_participants: 30,
        price: 3000,
        includes: ["Professional guidance", "Lunch", "Certificate", "Photo editing guide"],
        rating: 4.7,
        reviews: 89,
        status: "FULL"
    },
    {
        id: 4,
        name: "Sacred Cham Dance Festival",
        date: "2025-02-14",
        time: "10:00 AM - 5:00 PM",
        duration_days: 1,
        monastery_id: 2,
        monastery_name: "Pemayangtse Monastery",
        type: "cultural",
        description: "Witness traditional Cham dance performances by accomplished monks. These sacred dances are performed to ward off evil and bring blessings. Experience authentic Tibetan Buddhist culture.",
        what_to_bring: ["Camera", "Warm clothing", "Good shoes", "Cushion for sitting"],
        rules: ["Respect performance silence", "Photography guidelines apply", "Arrive early for good seating"],
        max_participants: 800,
        current_participants: 650,
        price: 800,
        includes: ["VIP seating", "Lunch", "Souvenir", "Program guide"],
        rating: 4.8,
        reviews: 178
    },
    {
        id: 5,
        name: "Spiritual Discourse & Teaching",
        date: "2025-01-20",
        time: "7:00 AM - 12:00 PM",
        duration_days: 1,
        monastery_id: 4,
        monastery_name: "Kanchenjunga Monastery",
        type: "meditation",
        description: "Buddhist teachings and spiritual guidance sessions by senior monks. Perfect for beginners seeking to understand Buddhist philosophy and practice techniques.",
        what_to_bring: ["Notebook", "Pen", "Warm clothes", "Comfortable seating"],
        rules: ["Respectful listening", "Q&A session follows", "Silence during teachings"],
        max_participants: 150,
        current_participants: 98,
        price: 500,
        includes: ["Tea", "Study materials", "Blessing ceremony", "Q&A session"],
        rating: 4.6,
        reviews: 112
    },
    {
        id: 6,
        name: "Cultural Heritage & History Tour",
        date: "2025-02-10",
        time: "8:00 AM - 4:00 PM",
        duration_days: 1,
        monastery_id: 3,
        monastery_name: "Tashiding Monastery",
        type: "cultural",
        description: "Guided tour exploring ancient artifacts, historical significance, and architectural marvels. Learn about 300+ years of monastery history from expert guides.",
        what_to_bring: ["Comfortable walking shoes", "Camera", "Water bottle", "Sun hat"],
        rules: ["Stay with group", "Touch artifacts only with permission", "Follow guide instructions"],
        max_participants: 80,
        current_participants: 52,
        price: 1200,
        includes: ["Expert guide", "Lunch", "Historical documents", "Souvenir"],
        rating: 4.7,
        reviews: 134
    }
];

// Hotels Data
const hotels = [
    { name: "Sikkim Heritage Hotel", rating: 4.6, price: 3000, distance: "2 km", amenities: ["Wifi", "Heater", "Veg Options"], cleanliness: 4.8, staff: 4.7, accessible: true },
    { name: "Kanchenjunga Resort", rating: 4.8, price: 5000, distance: "5 km", amenities: ["Spa", "View", "Pure Veg Kitchen"], cleanliness: 4.9, staff: 4.8, accessible: true },
    { name: "Valley View Guesthouse", rating: 4.4, price: 1500, distance: "1 km", amenities: ["Wifi", "Home Food"], cleanliness: 4.2, staff: 4.5, accessible: false },
    { name: "Mountain Paradise", rating: 4.7, price: 4000, distance: "3 km", amenities: ["Bonfire", "Heater", "Veg Options"], cleanliness: 4.6, staff: 4.6, accessible: false },
    { name: "Himalayan Retreat", rating: 4.5, price: 3500, distance: "4 km", amenities: ["Meditation Hall", "Organic Food"], cleanliness: 4.7, staff: 4.5, accessible: true },
    { name: "Sacred Valley Lodge", rating: 4.9, price: 7000, distance: "6 km", amenities: ["Luxury", "Spa", "Multi-cuisine"], cleanliness: 5.0, staff: 4.9, accessible: true },
    { name: "Budget Inn Gangtok", rating: 4.2, price: 2000, distance: "1.5 km", amenities: ["Wifi", "Breakfast"], cleanliness: 4.0, staff: 4.2, accessible: false },
    { name: "Monastery View Hotel", rating: 4.6, price: 4500, distance: "3.5 km", amenities: ["Balcony", "Veg Options"], cleanliness: 4.5, staff: 4.7, accessible: true }
];

// Restaurants Data
const restaurants = [
    { id: 1, name: "Taste of Tibet", cuisine: "Tibetan, Local", rating: 4.7, veg: false, delivery: true, image: "🥟", desc: "Authentic Momos and Thukpa." },
    { id: 2, name: "Green Leaf Vegetarian", cuisine: "Pure Veg, Indian", rating: 4.5, veg: true, delivery: true, image: "🥗", desc: "Best vegetarian thalis in town." },
    { id: 3, name: "Baker's Cafe", cuisine: "Cafe, Bakery", rating: 4.6, veg: false, delivery: false, image: "☕", desc: "Fresh coffee and cinnamon rolls." },
    { id: 4, name: "Roll House", cuisine: "Fast Food", rating: 4.4, veg: true, delivery: true, image: "🌯", desc: "Famous for Kati Rolls." },
    { id: 5, name: "Muchi's Kitchen", cuisine: "Sikkimese", rating: 4.8, veg: false, delivery: true, image: "🍛", desc: "Traditional Sikkimese curry and rice." },
    { id: 6, name: "The Coffee Shop", cuisine: "Continental", rating: 4.3, veg: true, delivery: false, image: "🍕", desc: "Pizza, pasta and mountain views." }
];

// Logistics Data
const fuelStops = [
    { name: "Indian Oil - Gangtok", location: "NH10, Gangtok", type: "Petrol/Diesel" },
    { name: "Bharat Petroleum - Ranipool", location: "Ranipool", type: "Petrol/Diesel/Air" },
    { name: "Nayara Energy - Singtam", location: "Singtam", type: "Petrol/Diesel/Restroom" }
];

// Articles Data
const articles = [
    { title: "Beginner's Guide to Sikkim Monasteries", author: "David Chen", date: "2025-01-10", category: "beginners", time: "8 min" },
    { title: "Budget Travel: Exploring Monasteries on ₹500/day", author: "Neha Singh", date: "2025-01-08", category: "budget", time: "10 min" },
    { title: "Golden Hour Photography Tips at Sikkim Monasteries", author: "Marco Rossi", date: "2025-01-05", category: "photography", time: "12 min" },
    { title: "The Spiritual Journey: A Week in Sikkim", author: "Priya Sharma", date: "2025-01-03", category: "spiritual", time: "15 min" },
    { title: "Trekking to Remote Monasteries", author: "John Walker", date: "2024-12-28", category: "adventure", time: "11 min" },
    { title: "Cultural Etiquette: Respecting Sacred Spaces", author: "Lama Dorji", date: "2024-12-25", category: "culture", time: "7 min" }
];

// Downloadable Guides Data
const downloadableGuides = [
    { title: "Sikkim Monastery Circuit", size: "15 MB", type: "PDF", icon: "🗺️" },
    { title: "Buddhist Etiquette Guide", size: "2.5 MB", type: "PDF", icon: "🙏" },
    { title: "Monastery Architecture", size: "8 MB", type: "PDF", icon: "🏛️" },
    { title: "Local Language Phrasebook", size: "1.2 MB", type: "PDF", icon: "🗣️" }
];

// Discussions Data
const discussions = [
    { title: "Best time to visit Rumtek for photography", author: "PhotoBuff_007", replies: 23, views: 156, category: "photography" },
    { title: "Anyone planning group trek to Pemayangtse?", author: "TrekkerLife", replies: 45, views: 342, category: "hiking" },
    { title: "Accommodation recommendations near monasteries", author: "BudgetTraveler", replies: 34, views: 289, category: "travel" },
    { title: "Understanding Buddhist symbols and their meanings", author: "SpiritSeeker", replies: 67, views: 521, category: "spiritual" },
    { title: "Weather conditions in February? Planning a trip", author: "FirstTimer", replies: 18, views: 134, category: "weather" },
    { title: "Meditation retreat experiences - worth it?", author: "InnerPeace", replies: 41, views: 298, category: "meditation" }
];

// Transport Options
const transportOptions = {
    personal: { name: "Self-Drive / Personal", desc: "GPS directions provided. Fuel stops mapped.", rate: 25, icon: "🚗" },
    shared: { name: "Public Bus / Shared Taxi", desc: "Budget friendly. Fixed schedules.", rate: 10, icon: "🚌" },
    guide: { name: "Private Taxi / Guide", desc: "Comfortable. Local driver expertise.", rate: 40, icon: "🚕" }
};

// Activity Options
const activityOptions = [
    { id: 'guide', name: 'Professional Guide', desc: 'Expert local guide (English/Hindi/Tibetan)', price: 1200, unit: 'day', icon: '👨‍🏫' },
    { id: 'meals', name: 'All Meals Included', desc: 'Breakfast, lunch, and dinner', price: 400, unit: 'day', icon: '🍽️' },
    { id: 'photo', name: 'Photography Tour', desc: 'Professional photography guidance', price: 2000, unit: 'fixed', icon: '📸' },
    { id: 'meditation', name: 'Meditation Session', desc: 'Guided meditation with monks', price: 800, unit: 'fixed', icon: '🧘' }
];

// State Management
let currentSection = 'explore';
let currentView = 'list';
let currentMonasteryIndex = 0;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let favorites = [];
let map = null;
let panoramaViewer = null;
let isAutoRotating = false;
let filteredMonasteries = [...monasteries];
let itineraryStep = 1;
let selectedMonasteries = [];
let selectedTransport = null;
let selectedHotels = [];
let selectedActivities = [];
let tripStartDate = ''; // YYYY-MM-DD from #trip-start-date
let userBookings = [];
let userReviews = [];

// Advanced Trip Planning Utilities
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function calculateTripDistances(selectedIds) {
    const selected = monasteries.filter(m => selectedIds.includes(m.id));
    if (selected.length < 2) return { totalDistance: 0, distances: [] };

    let totalDistance = 0;
    const distances = [];
    for (let i = 0; i < selected.length - 1; i++) {
        const dist = haversineDistance(
            selected[i].latitude, selected[i].longitude,
            selected[i+1].latitude, selected[i+1].longitude
        );
        distances.push({ from: selected[i].id, to: selected[i+1].id, distance: dist });
        totalDistance += dist;
    }
    return { totalDistance, distances };
}

function optimizeRouteTSP(selectedIds) {
    // Simple nearest neighbor TSP approximation
    // For production, consider using a proper TSP solver library
    const selected = monasteries.filter(m => selectedIds.includes(m.id));
    if (selected.length <= 2) return selectedIds;

    const startPoint = selected.find(m => m.id === 1) || selected[0]; // Prefer Rumtek as start
    let unvisited = [...selected.filter(m => m.id !== startPoint.id)];
    let route = [startPoint.id];
    let current = startPoint;

    while (unvisited.length > 0) {
        let nearest = null;
        let minDistance = Infinity;

        unvisited.forEach(next => {
            const dist = haversineDistance(
                current.latitude, current.longitude,
                next.latitude, next.longitude
            );
            if (dist < minDistance) {
                minDistance = dist;
                nearest = next;
            }
        });

        if (nearest) {
            route.push(nearest.id);
            current = nearest;
            unvisited = unvisited.filter(m => m.id !== nearest.id);
        }
    }

    return route;
}

function getSmartSuggestions(currentSelection, maxSuggestions = 3) {
    const selected = monasteries.filter(m => currentSelection.includes(m.id));
    const available = monasteries.filter(m => !currentSelection.includes(m.id));

    // Score based on proximity, rating, and seasonal compatibility
    const scored = available.map(m => {
        let score = m.rating * 10; // Base rating score

        // Proximity bonus
        if (selected.length > 0) {
            const avgLat = selected.reduce((sum, s) => sum + s.latitude, 0) / selected.length;
            const avgLon = selected.reduce((sum, s) => sum + s.longitude, 0) / selected.length;
            const dist = haversineDistance(avgLat, avgLon, m.latitude, m.longitude);
            score += Math.max(0, 50 - dist); // Closer is better, max 50 points
        }

        // Seasonal compatibility (simplified)
        const currentMonth = new Date().getMonth() + 1;
        if (m.season.toLowerCase().includes('year-round')) score += 20;
        else if (m.season.toLowerCase().includes('march') && (currentMonth >= 3 && currentMonth <= 5)) score += 15;

        return { monastery: m, score };
    });

    return scored
        .sort((a, b) => b.score - a.score)
        .slice(0, maxSuggestions)
        .map(item => item.monastery);
}

function getAltitudeWarnings(selectedIds) {
    const selected = monasteries.filter(m => selectedIds.includes(m.id));
    const warnings = [];

    selected.forEach(m => {
        if (m.altitude > 2000) {
            warnings.push({
                monastery: m.name,
                altitude: m.altitude,
                message: `High altitude (${m.altitudeText}) - expect colder temperatures and possible altitude sickness. Consider acclimatization time.`
            });
        }
    });

    // Check for rapid altitude changes
    for (let i = 0; i < selected.length - 1; i++) {
        const altDiff = Math.abs(selected[i+1].altitude - selected[i].altitude);
        if (altDiff > 500) {
            warnings.push({
                type: 'rapid_change',
                from: selected[i].name,
                to: selected[i+1].name,
                message: `Rapid altitude change (${altDiff}m) between ${selected[i].name} and ${selected[i+1].name}. Plan for acclimatization.`
            });
        }
    }

    return warnings;
}

function calculateTripCostAdvanced(params) {
    const transport = params.distance * params.transportRate;
    const accommodation = params.nights * params.hotelPrice;
    const activities = params.activities.reduce((sum, act) =>
        sum + (act.unit === 'day' ? act.price * params.days : act.price), 0);
    const entryFees = params.monasteries.reduce((sum, m) =>
        sum + parseFloat(m.entryFee.replace(/[^0-9]/g, '') || 0), 0);
    const subtotal = transport + accommodation + activities + entryFees;
    const gst = subtotal * 0.18; // 18% GST
    return {
        transport,
        accommodation,
        activities,
        entryFees,
        subtotal,
        gst,
        total: subtotal + gst
    };
}

// Initialize App
function initApp() {
    if (currentUser) {
        favorites = currentUser.favorites || [];
        userBookings = currentUser.bookings || [];
        updateAuthUI();
    }
    renderMonasteries();
    setupEventListeners();
    initializeMap();
    renderToursGallery();
    renderEvents();
    renderDiscussions();
    renderArticles();
    renderItineraryStep();
    renderDining();
    renderAccountContent('bookings');
    setupAIPlannerListeners();
    setDefaultTripDate();
}

function setDefaultTripDate() {
    const el = document.getElementById('trip-start-date');
    if (!el || el.value) return;
    const d = new Date();
    d.setDate(d.getDate() + 7);
    el.value = d.toISOString().slice(0, 10);
    tripStartDate = el.value;
}

// Render Monastery Cards
function renderMonasteries() {
    const listView = document.getElementById('list-view');
    listView.innerHTML = '';

    filteredMonasteries.forEach((monastery, index) => {
        const card = createMonasteryCard(monastery, index);
        listView.appendChild(card);
    });

    updateFavoritesList();
}

// Create Monastery Card
function createMonasteryCard(monastery, index) {
    const card = document.createElement('div');
    card.className = 'monastery-card';
    
    const stars = '★'.repeat(Math.floor(monastery.rating)) + (monastery.rating % 1 >= 0.5 ? '½' : '');
    const isFavorite = favorites.includes(monastery.id);
    
    card.innerHTML = `
        <div class="monastery-header">
            <h3 class="monastery-name">${monastery.name}</h3>
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${monastery.id}">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
        <p class="monastery-description">${monastery.description}</p>
        <div class="monastery-details">
            <div class="detail-item">
                <span class="detail-label">📍 Location</span>
                <div class="detail-value">${monastery.latitude.toFixed(6)}°N, ${monastery.longitude.toFixed(6)}°E</div>
            </div>
            <div class="detail-item">
                <span class="detail-label">⛰️ Altitude</span>
                <div class="detail-value">${monastery.altitudeText}</div>
            </div>
            <div class="detail-item">
                <span class="detail-label">🚗 Distance</span>
                <div class="detail-value">${monastery.distance}</div>
            </div>
            <div class="detail-item">
                <span class="detail-label">🎫 Entry Fee</span>
                <div class="detail-value">${monastery.entryFee}</div>
            </div>
            <div class="detail-item">
                <span class="detail-label">🕐 Hours</span>
                <div class="detail-value">${monastery.hours}</div>
            </div>
            <div class="detail-item">
                <span class="detail-label">🌸 Best Season</span>
                <div class="detail-value">${monastery.season}</div>
            </div>
        </div>
        <div class="monastery-rating">
            <span class="rating-stars">${stars}</span>
            <span class="rating-value">${monastery.rating}</span>
            <span class="rating-count">(${monastery.reviews} reviews)</span>
        </div>
        <div class="monastery-actions">
            <button class="btn btn-primary" data-index="${index}">🎯 Start 360° Tour</button>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); openWeatherModal(${index})" title="Weather Forecast">🌦️</button>
            <button class="btn btn-secondary" data-coords="${monastery.latitude},${monastery.longitude}" title="Share Location">📤</button>
        </div>
    `;

    // Add event listeners
    const tourBtn = card.querySelector('.btn-primary');
    tourBtn.addEventListener('click', () => openTour(index));

    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(monastery.id);
    });

    const shareBtn = card.querySelector('.btn-secondary');
    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shareLocation(monastery);
    });

    return card;
}

// Toggle Favorite
function toggleFavorite(monasteryId) {
    const index = favorites.indexOf(monasteryId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(monasteryId);
    }
    if (currentUser) {
        currentUser.favorites = [...favorites];
        updateUserInStorage(currentUser);
    }
    renderMonasteries();
}

// Update Favorites List
function updateFavoritesList() {
    const favoritesList = document.getElementById('favorites-list');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">No favorites yet</div>';
        return;
    }

    const favoriteMonasteries = monasteries.filter(m => favorites.includes(m.id));
    favoritesList.innerHTML = favoriteMonasteries.map(m => 
        `<div style="padding: var(--space-8) 0; border-bottom: 1px solid var(--color-card-border); cursor: pointer;" onclick="openTour(${monasteries.indexOf(m)})">
            <div style="font-weight: var(--font-weight-medium); color: var(--color-text);">${m.name}</div>
            <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">⭐ ${m.rating}</div>
        </div>`
    ).join('');
}

// Share Location
function shareLocation(monastery) {
    const url = `https://www.google.com/maps?q=${monastery.latitude},${monastery.longitude}`;
    if (navigator.share) {
        navigator.share({
            title: monastery.name,
            text: `Check out ${monastery.name} in Sikkim!`,
            url: url
        }).catch(() => {
            window.open(url, '_blank');
        });
    } else {
        window.open(url, '_blank');
    }
}

// Initialize Leaflet Map
function initializeMap() {
    const mapView = document.getElementById('map-view');
    
    map = L.map(mapView).setView([27.31, 88.40], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Add monastery markers
    monasteries.forEach((monastery, index) => {
        const marker = L.marker([monastery.latitude, monastery.longitude], {
            title: monastery.name
        }).addTo(map);

        const popupContent = `
            <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px;">${monastery.name}</h3>
                <p style="margin: 0 0 8px 0; font-size: 13px; color: #666;">${monastery.description}</p>
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 12px; margin: 4px 0;">⛰️ ${monastery.altitudeText}</div>
                    <div style="font-size: 12px; margin: 4px 0;">🚗 ${monastery.distance}</div>
                    <div style="font-size: 12px; margin: 4px 0;">⭐ ${monastery.rating} (${monastery.reviews} reviews)</div>
                </div>
                <button onclick="openTour(${index})" style="width: 100%; padding: 8px; background: #21808D; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Start 360° Tour</button>
            </div>
        `;

        marker.bindPopup(popupContent);
    });

    // Add Gangtok marker
    L.marker([27.33, 88.61], {
        icon: L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMiIgZmlsbD0iI0ZGNDc0NyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+',
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        })
    }).addTo(map).bindPopup('<b>Gangtok</b><br>Capital of Sikkim');
}

// Open Tour Modal
function openTour(index) {
    currentMonasteryIndex = index;
    const monastery = filteredMonasteries[index];
    
    const modal = document.getElementById('tour-modal');
    const modalTitle = document.getElementById('modal-monastery-name');
    const footerCoords = document.getElementById('footer-coords');
    const footerAltitude = document.getElementById('footer-altitude');
    
    modalTitle.textContent = monastery.name;
    footerCoords.textContent = `📍 ${monastery.latitude.toFixed(6)}°N, ${monastery.longitude.toFixed(6)}°E`;
    footerAltitude.textContent = `⛰️ ${monastery.altitudeText}`;
    
    modal.classList.add('active');
    
    initPanorama(monastery);
}

// Initialize Pannellum Panorama Viewer
function initPanorama(monastery) {
    const viewerContainer = document.getElementById('panorama-viewer');
    const loading = document.getElementById('panorama-loading');
    loading.style.display = 'flex';

    // Destroy previous viewer if exists
    if (panoramaViewer) {
        try {
            panoramaViewer.destroy();
        } catch (e) {
            console.log('Viewer cleanup:', e);
        }
        panoramaViewer = null;
    }
    viewerContainer.innerHTML = ''; // Clear previous content

    if (monastery.panoramaUrl.trim().startsWith('<iframe')) {
        viewerContainer.innerHTML = monastery.panoramaUrl;
        const iframe = viewerContainer.querySelector('iframe');
        if (iframe) {
            // Ensure the iframe fills the container, overriding inline attributes
            iframe.style.width = '100%';
            iframe.style.height = '100%';

            iframe.onload = () => {
                loading.style.display = 'none';
            };
            setTimeout(() => {
                loading.style.display = 'none';
            }, 2000); // Fallback for iframes that don't fire onload
        } else {
            loading.style.display = 'none';
        }
    } else {
        // Initialize new panorama viewer
        setTimeout(() => {
            try {
                panoramaViewer = pannellum.viewer('panorama-viewer', {
                    type: 'equirectangular',
                    panorama: monastery.panoramaUrl,
                    autoLoad: true,
                    showControls: false,
                    mouseZoom: true,
                    doubleClickZoom: true,
                    draggable: true,
                    compass: true,
                    hotSpotDebug: false,
                    hfov: 100,
                    pitch: 0,
                    yaw: 0,
                    minHfov: 50,
                    maxHfov: 120,
                    friction: 0.15
                });

                // Hide loading when panorama loads
                panoramaViewer.on('load', () => {
                    loading.style.display = 'none';
                });

                panoramaViewer.on('error', () => {
                    loading.innerHTML = '<div style="color: #ff4444;">Failed to load panorama. Please try again.</div>';
                });
            } catch (error) {
                console.error('Panorama initialization error:', error);
                loading.innerHTML = '<div style="color: #ff4444;">Error loading panorama viewer.</div>';
            }
        }, 100);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // View Toggle
    document.getElementById('list-view-btn').addEventListener('click', () => {
        currentView = 'list';
        document.getElementById('list-view').style.display = 'grid';
        document.getElementById('map-view').style.display = 'none';
        document.getElementById('list-view-btn').classList.add('active');
        document.getElementById('map-view-btn').classList.remove('active');
    });

    document.getElementById('map-view-btn').addEventListener('click', () => {
        currentView = 'map';
        document.getElementById('list-view').style.display = 'none';
        document.getElementById('map-view').style.display = 'block';
        document.getElementById('list-view-btn').classList.remove('active');
        document.getElementById('map-view-btn').classList.add('active');
        
        // Invalidate map size after display change
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 100);
    });

    // Modal Controls
    document.getElementById('close-modal').addEventListener('click', closeTourModal);
    
    document.getElementById('tour-modal').addEventListener('click', (e) => {
        if (e.target.id === 'tour-modal') {
            closeTourModal();
        }
    });

    // Navigation
    document.getElementById('prev-monastery').addEventListener('click', () => {
        currentMonasteryIndex = (currentMonasteryIndex - 1 + filteredMonasteries.length) % filteredMonasteries.length;
        openTour(currentMonasteryIndex);
    });

    document.getElementById('next-monastery').addEventListener('click', () => {
        currentMonasteryIndex = (currentMonasteryIndex + 1) % filteredMonasteries.length;
        openTour(currentMonasteryIndex);
    });

    // Panorama Controls
    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        const container = document.querySelector('.modal-content');
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        }
    });

    document.getElementById('autorotate-btn').addEventListener('click', () => {
        if (panoramaViewer) {
            isAutoRotating = !isAutoRotating;
            if (isAutoRotating) {
                panoramaViewer.setYaw(panoramaViewer.getYaw() + 0.1);
                autoRotate();
            }
        }
    });

    document.getElementById('zoom-in-btn').addEventListener('click', () => {
        if (panoramaViewer) {
            panoramaViewer.setHfov(panoramaViewer.getHfov() - 10);
        }
    });

    document.getElementById('zoom-out-btn').addEventListener('click', () => {
        if (panoramaViewer) {
            panoramaViewer.setHfov(panoramaViewer.getHfov() + 10);
        }
    });

    // Filters
    document.getElementById('sort-select').addEventListener('change', (e) => {
        sortMonasteries(e.target.value);
    });

    document.getElementById('season-select').addEventListener('change', (e) => {
        filterBySeason(e.target.value);
    });

    // Event Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEvents(btn.dataset.type);
        });
    });

    // Main Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.app-section').forEach(s => {
                s.classList.remove('active');
                s.style.display = 'none';
            });
            
            const targetId = btn.dataset.section + '-section';
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.display = 'block';
            }
            
            if (btn.dataset.section === 'explore' && currentView === 'map' && map) {
                setTimeout(() => map.invalidateSize(), 100);
            }
        });
    });

    // Itinerary Actions
    document.getElementById('btn-save-draft').addEventListener('click', saveItinerary);
    document.getElementById('btn-share-pdf').addEventListener('click', generatePDF);
    document.getElementById('btn-back').addEventListener('click', prevItineraryStep);
    document.getElementById('btn-proceed-booking').addEventListener('click', handleProceed);
    const tripDateEl = document.getElementById('trip-start-date');
    if (tripDateEl) {
        tripDateEl.addEventListener('change', function() { tripStartDate = this.value || ''; });
    }
    const loadDraftBtn = document.getElementById('btn-load-draft');
    if (loadDraftBtn) loadDraftBtn.addEventListener('click', loadItineraryDraft);

    // Location & Dining
    document.getElementById('btn-use-location').addEventListener('click', updateDistancesWithGeolocation);
    document.getElementById('filter-veg').addEventListener('change', renderDining);
    document.getElementById('filter-local').addEventListener('change', renderDining);
    document.getElementById('filter-delivery').addEventListener('change', renderDining);

    // Initial visibility check
    document.querySelectorAll('.app-section').forEach(s => {
        if (!s.classList.contains('active')) s.style.display = 'none';
    });
}

// AI Planner & Packages Logic
function setupAIPlannerListeners() {
    // AI Generator
    const generateBtn = document.getElementById('ai-generate-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateAIItinerary);
    }

    // Package Tabs
    document.querySelectorAll('.package-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.package-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            applyPackage(e.target.dataset.package);
        });
    });
}

function generateAIItinerary() {
    const duration = parseInt(document.getElementById('ai-duration').value);
    const pace = document.getElementById('ai-pace').value;
    
    // Logic: 
    // Relaxed: 1 site/day
    // Moderate: 2 sites/day
    // Packed: 3 sites/day
    let sitesPerDay = 1;
    if (pace === 'moderate') sitesPerDay = 2;
    if (pace === 'packed') sitesPerDay = 3;
    
    const totalSites = Math.min(monasteries.length, duration * sitesPerDay);
    
    // Sort by rating and distance (heuristic: high rating, closer to Gangtok first)
    // We'll create a score: rating * 10 - (distanceKm / 10)
    const scoredMonasteries = [...monasteries].map(m => ({
        ...m,
        score: (m.rating * 10) - (m.distanceKm / 20) // Weight rating higher
    })).sort((a, b) => b.score - a.score);
    
    selectedMonasteries = scoredMonasteries.slice(0, totalSites).map(m => m.id);
    
    // Reset to step 1 to show selection
    itineraryStep = 1;
    renderItineraryStep();
    
    // Visual feedback
    const btn = document.getElementById('ai-generate-btn');
    const originalText = btn.textContent;
    btn.textContent = '✅ Generated!';
    setTimeout(() => btn.textContent = originalText, 2000);
}

function applyPackage(packageType) {
    // Define packages
    const packages = {
        weekend: [1, 11, 12], // Rumtek, Enchey, Lingdum (Close to Gangtok)
        spiritual: [1, 2, 3, 9, 10], // Major spiritual centers
        cultural: [1, 2, 6, 7, 8, 11, 5], // Historical & Cultural mix
        adventure: [2, 3, 6, 13] // West Sikkim loop + Lake
    };
    
    if (packages[packageType]) {
        selectedMonasteries = [...packages[packageType]];
        
        // Ensure IDs exist in current data
        selectedMonasteries = selectedMonasteries.filter(id => monasteries.find(m => m.id === id));
        
        itineraryStep = 1;
        renderItineraryStep();
    }
}

// Geolocation Logic
function updateDistancesWithGeolocation() {
    const btn = document.getElementById('btn-use-location');
    btn.textContent = "📍 Locating...";
    
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            
            filteredMonasteries.forEach(m => {
                const dist = calculateDistance(userLat, userLon, m.latitude, m.longitude);
                m.distanceKm = Math.round(dist);
                m.distance = `${Math.round(dist)} km from you`;
            });
            
            renderMonasteries();
            btn.textContent = "📍 Updated from Location";
            setTimeout(() => btn.textContent = "📍 Calculate Real Distances", 3000);
        }, error => {
            alert("Could not get location. Please enable GPS.");
            btn.textContent = "📍 Calculate Real Distances";
        });
    } else {
        alert("Geolocation not supported");
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Auto Rotate Function
function autoRotate() {
    if (isAutoRotating && panoramaViewer) {
        panoramaViewer.setYaw(panoramaViewer.getYaw() + 0.3);
        requestAnimationFrame(autoRotate);
    }
}

// Close Tour Modal
function closeTourModal() {
    const modal = document.getElementById('tour-modal');
    modal.classList.remove('active');
    isAutoRotating = false;
    
    if (panoramaViewer) {
        try {
            panoramaViewer.destroy();
            panoramaViewer = null;
        } catch (e) {
            console.log('Cleanup:', e);
        }
    }
}

// Weather Modal Functions
function openWeatherModal(index) {
    const monastery = filteredMonasteries[index];
    const modal = document.getElementById('weather-modal');
    const body = document.getElementById('weather-modal-body');
    
    const weatherData = generateWeatherData(monastery);
    
    body.innerHTML = `
        <h3 style="margin-bottom: 15px;">${monastery.name} <span style="font-size: 0.8em; color: var(--color-text-secondary);">(${monastery.altitudeText})</span></h3>
        
        ${weatherData.altitudeWarning ? `
        <div class="advisory-box warning">
            <strong>⚠️ High Altitude Warning</strong><br>
            ${weatherData.altitudeWarning}
        </div>` : ''}
        
        <div class="advisory-box info">
            <strong>📅 Seasonal Advisory (${weatherData.seasonName})</strong><br>
            ${weatherData.seasonalAdvisory}
        </div>

        <div style="margin-bottom: 20px;">
            <h4>🎒 Packing Suggestions</h4>
            <div class="packing-list" style="margin-top: 10px;">
                ${weatherData.packingList.map(item => `<div class="packing-item">${item}</div>`).join('')}
            </div>
        </div>

        <div>
            <h4>7-Day Forecast</h4>
            <div class="forecast-grid">
                ${weatherData.forecast.map(day => `
                    <div class="forecast-day">
                        <div style="font-size: 12px; margin-bottom: 5px;">${day.day}</div>
                        <div style="font-size: 24px; margin-bottom: 5px;">${day.icon}</div>
                        <div style="font-weight: bold;">${day.temp}°C</div>
                        <div style="font-size: 11px; color: var(--color-text-secondary);">${day.condition}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeWeatherModal() {
    document.getElementById('weather-modal').classList.remove('active');
}

function generateWeatherData(monastery) {
    const date = new Date();
    const month = date.getMonth();
    
    let seasonName = "Winter";
    let seasonalAdvisory = "Heavy woolens required. Potential snow on high passes.";
    let baseTemp = 5;
    let condition = "Sunny";
    
    if (month >= 2 && month <= 4) {
        seasonName = "Spring";
        seasonalAdvisory = "Pleasant weather. Rhododendrons in bloom. Good visibility.";
        baseTemp = 15;
        condition = "Partly Cloudy";
    } else if (month >= 5 && month <= 8) {
        seasonName = "Monsoon";
        seasonalAdvisory = "Monsoon season - muddy trails, slippery paths. Leeches possible.";
        baseTemp = 18;
        condition = "Rain";
    } else if (month >= 9 && month <= 10) {
        seasonName = "Autumn";
        seasonalAdvisory = "Best views of Kanchenjunga. Clear skies. Crisp air.";
        baseTemp = 12;
        condition = "Clear";
    }

    const gangtokAlt = 1650;
    const tempDiff = (gangtokAlt - monastery.altitude) / 1000 * 6.5;
    const avgTemp = Math.round(baseTemp + tempDiff);

    let altitudeWarning = null;
    if (monastery.altitude > 2000) {
        altitudeWarning = `High altitude (${monastery.altitudeText}) - expect ${Math.abs(Math.round(tempDiff))}°C colder than Gangtok.`;
    }

    const packingList = [];
    if (avgTemp < 10) packingList.push("🧥 Heavy Jacket", "🧤 Gloves");
    else if (avgTemp < 20) packingList.push("🧥 Light Jacket", "🧣 Scarf");
    else packingList.push("👕 Cotton Clothes");

    if (seasonName === "Monsoon" || condition === "Rain") packingList.push("☔ Raincoat", "👢 Waterproof Shoes", "🌂 Umbrella");
    if (monastery.altitude > 2000) packingList.push("🧴 Sunscreen", "🕶️ Sunglasses");
    packingList.push("👟 Walking Shoes", "💧 Water Bottle");

    const forecast = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 0; i < 7; i++) {
        const d = new Date(date);
        d.setDate(date.getDate() + i);
        const dayTemp = avgTemp + Math.floor(Math.random() * 5) - 2;
        let dayCond = condition;
        let icon = "⛅";
        
        if (condition === "Rain") {
            icon = Math.random() > 0.3 ? "🌧️" : "☁️";
            dayCond = icon === "🌧️" ? "Rain" : "Cloudy";
        } else if (condition === "Clear") {
            icon = Math.random() > 0.8 ? "⛅" : "☀️";
            dayCond = icon === "☀️" ? "Sunny" : "Partly Cloudy";
        } else {
            icon = Math.random() > 0.5 ? "⛅" : "☁️";
        }

        forecast.push({ day: days[d.getDay()], temp: dayTemp, condition: dayCond, icon: icon });
    }

    return { seasonName, seasonalAdvisory, altitudeWarning, packingList, forecast };
}

// Sort Monasteries
function sortMonasteries(sortBy) {
    switch(sortBy) {
        case 'rating':
            filteredMonasteries.sort((a, b) => b.rating - a.rating);
            break;
        case 'distance':
            filteredMonasteries.sort((a, b) => a.distanceKm - b.distanceKm);
            break;
        case 'altitude':
            filteredMonasteries.sort((a, b) => b.altitude - a.altitude);
            break;
    }
    renderMonasteries();
}

// Filter by Season
function filterBySeason(season) {
    if (season === 'all') {
        filteredMonasteries = [...monasteries];
    } else if (season === 'year-round') {
        filteredMonasteries = monasteries.filter(m => m.season.toLowerCase().includes('year'));
    } else if (season === 'summer') {
        filteredMonasteries = monasteries.filter(m => 
            m.season.toLowerCase().includes('march') || 
            m.season.toLowerCase().includes('april') ||
            m.season.toLowerCase().includes('october')
        );
    } else if (season === 'winter') {
        filteredMonasteries = monasteries.filter(m => 
            m.season.toLowerCase().includes('october') ||
            m.season.toLowerCase().includes('november')
        );
    }
    renderMonasteries();
}

// Render Tours Gallery
function renderToursGallery() {
    const gallery = document.getElementById('tours-gallery');
    if (!gallery) return;
    gallery.innerHTML = monasteries.map((m, index) => {
        const stars = '★'.repeat(Math.floor(m.rating)) + (m.rating % 1 >= 0.5 ? '½' : '');
        return `
        <article class="tour-card" role="listitem" onclick="openTour(${index})">
            <div class="tour-card-media" style="--tour-color: ${m.color};">
                <span class="tour-card-badge" aria-hidden="true">360°</span>
                <span class="tour-card-icon" aria-hidden="true">🏛️</span>
                <div class="tour-card-overlay">
                    <span class="tour-card-cta">Start 360° Tour</span>
                </div>
            </div>
            <div class="tour-card-body">
                <h3 class="tour-card-name">${m.name}</h3>
                <div class="tour-card-meta">
                    <span class="tour-card-rating" title="Rating ${m.rating}">${stars} ${m.rating}</span>
                    <span class="tour-card-distance">${m.distance}</span>
                </div>
                <div class="tour-card-altitude">${m.altitudeText}</div>
            </div>
        </article>`;
    }).join('');
}

// Render Dining
function renderDining() {
    const list = document.getElementById('dining-list');
    if (!list) return;

    const vegOnly = document.getElementById('filter-veg').checked;
    const localOnly = document.getElementById('filter-local').checked;
    const deliveryOnly = document.getElementById('filter-delivery').checked;

    const filtered = restaurants.filter(r => {
        if (vegOnly && !r.veg) return false;
        if (localOnly && !r.cuisine.includes('Local') && !r.cuisine.includes('Sikkimese') && !r.cuisine.includes('Tibetan')) return false;
        if (deliveryOnly && !r.delivery) return false;
        return true;
    });

    list.innerHTML = filtered.map(r => `
        <div class="dining-card">
            <div class="dining-image">${r.image}</div>
            <div class="dining-content">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <h3 style="margin-bottom: 4px;">${r.name}</h3>
                    <span style="background: var(--color-success); color: white; padding: 2px 6px; border-radius: 4px; font-size: 12px;">${r.rating} ★</span>
                </div>
                <div style="color: var(--color-text-secondary); font-size: 12px; margin-bottom: 8px;">${r.cuisine}</div>
                <p style="font-size: 13px; margin-bottom: 12px;">${r.desc}</p>
                <div style="margin-bottom: 12px;">
                    ${r.veg ? '<span class="amenity-tag veg">🥗 Pure Veg</span>' : ''}
                    ${r.delivery ? '<span class="amenity-tag">🛵 Delivery</span>' : ''}
                </div>
                <button class="btn btn-outline btn-sm" style="width: 100%;">View Menu & Book</button>
            </div>
        </div>
    `).join('');
}

// Render Events
function renderEvents(filter = 'all') {
    const eventsList = document.getElementById('events-list');
    const filtered = filter === 'all' ? events : events.filter(e => e.type === filter);
    
    eventsList.innerHTML = filtered.map(event => {
        const percentage = (event.current_participants / event.max_participants) * 100;
        const isFull = event.status === 'FULL';
        
        return `
            <div class="event-card" onclick="openEventModal(${event.id})">
                <div class="event-type-badge">${event.type}</div>
                <div class="event-title">${event.name}</div>
                <div class="event-info">
                    <div>📅 ${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div>🕐 ${event.time}</div>
                    <div>📍 ${event.monastery_name}</div>
                </div>
                <div class="event-description">${event.description.substring(0, 120)}...</div>
                <div class="event-participants">
                    <span>👥 ${event.current_participants}/${event.max_participants}</span>
                    <div class="participants-bar">
                        <div class="participants-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
                <div class="event-price">₹${event.price.toLocaleString()}</div>
                ${isFull ? '<div class="event-status-full">FULLY BOOKED</div>' : '<button class="btn btn-primary" style="width: 100%;" onclick="event.stopPropagation(); openEventModal(' + event.id + ')">Register for Event</button>'}
            </div>
        `;
    }).join('');
}

// Open Event Modal
function openEventModal(eventId) {
    const event = events.find(e => e.id === eventId);
    const modal = document.getElementById('event-modal');
    const title = document.getElementById('event-modal-title');
    const body = document.getElementById('event-modal-body');
    
    title.textContent = event.name;
    
    const isFull = event.status === 'FULL';
    const percentage = (event.current_participants / event.max_participants) * 100;
    
    body.innerHTML = `
        <div style="margin-bottom: var(--space-24);">
            <div class="event-type-badge">${event.type}</div>
            <h3 style="font-size: var(--font-size-2xl); margin: var(--space-12) 0;">${event.name}</h3>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-16); margin-bottom: var(--space-24);">
            <div>
                <div style="font-weight: var(--font-weight-medium); margin-bottom: var(--space-4);">📅 Date</div>
                <div style="color: var(--color-text-secondary);">${new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</div>
            </div>
            <div>
                <div style="font-weight: var(--font-weight-medium); margin-bottom: var(--space-4);">🕐 Time</div>
                <div style="color: var(--color-text-secondary);">${event.time}</div>
            </div>
            <div>
                <div style="font-weight: var(--font-weight-medium); margin-bottom: var(--space-4);">📍 Location</div>
                <div style="color: var(--color-text-secondary);">${event.monastery_name}</div>
            </div>
            <div>
                <div style="font-weight: var(--font-weight-medium); margin-bottom: var(--space-4);">⏱️ Duration</div>
                <div style="color: var(--color-text-secondary);">${event.duration_days} day${event.duration_days > 1 ? 's' : ''}</div>
            </div>
        </div>
        
        <div style="margin-bottom: var(--space-24);">
            <h4 style="margin-bottom: var(--space-12);">About this Event</h4>
            <p style="line-height: 1.6; color: var(--color-text-secondary);">${event.description}</p>
        </div>
        
        <div style="margin-bottom: var(--space-24);">
            <h4 style="margin-bottom: var(--space-12);">What's Included</h4>
            <ul style="margin-left: var(--space-20); color: var(--color-text-secondary);">
                ${event.includes.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: var(--space-24);">
            <h4 style="margin-bottom: var(--space-12);">What to Bring</h4>
            <ul style="margin-left: var(--space-20); color: var(--color-text-secondary);">
                ${event.what_to_bring.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: var(--space-24);">
            <h4 style="margin-bottom: var(--space-12);">Rules & Guidelines</h4>
            <ul style="margin-left: var(--space-20); color: var(--color-text-secondary);">
                ${event.rules.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: var(--space-24);">
            <div style="font-weight: var(--font-weight-medium); margin-bottom: var(--space-8);">Availability</div>
            <div style="display: flex; align-items: center; gap: var(--space-12);">
                <span>👥 ${event.current_participants}/${event.max_participants} participants</span>
                <div class="participants-bar" style="flex: 1; height: 8px; background: var(--color-border); border-radius: 4px; overflow: hidden;">
                    <div class="participants-fill" style="width: ${percentage}%; height: 100%; background: var(--color-primary);"></div>
                </div>
            </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: var(--space-24); border-top: 1px solid var(--color-card-border);">
            <div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Price per person</div>
                <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold);">₹${event.price.toLocaleString()}</div>
            </div>
            ${isFull ? 
                '<button class="btn btn-secondary" disabled style="opacity: 0.7; cursor: not-allowed;">Fully Booked</button>' : 
                `<button class="btn btn-primary" onclick="showEventBookingForm(${event.id})">Book Now</button>`
            }
        </div>
    `;
    
    modal.classList.add('active');
}

function closeEventModal() {
    document.getElementById('event-modal').classList.remove('active');
}

// Render Discussions
function renderDiscussions() {
    const list = document.getElementById('discussions-list');
    if (!list) return;
    list.innerHTML = discussions.map(d => `
        <div style="padding: 16px; border: 1px solid var(--color-card-border); border-radius: 8px; margin-bottom: 16px; background: var(--color-surface);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="background: var(--color-secondary); padding: 2px 8px; border-radius: 4px; font-size: 12px;">${d.category}</span>
                <span style="font-size: 12px; color: var(--color-text-secondary);">👁️ ${d.views}</span>
            </div>
            <h4 style="margin-bottom: 8px;">${d.title}</h4>
            <div style="font-size: 12px; color: var(--color-text-secondary);">By ${d.author} • 💬 ${d.replies} replies</div>
        </div>
    `).join('');
}

// Render Articles
function renderArticles() {
    const list = document.getElementById('articles-list');
    if (!list) return;
    
    list.className = ''; // Reset class to allow custom container layout

    list.innerHTML = `
        <div class="guides-container">
            <!-- Downloadable Guides -->
            <div>
                <h3 class="guide-section-title">📥 Downloadable Guides (Offline Access)</h3>
                <div class="download-grid">
                    ${downloadableGuides.map(g => `
                        <div class="download-card">
                            <div class="file-icon">${g.icon}</div>
                            <div class="file-info">
                                <h4>${g.title}</h4>
                                <div class="file-meta">${g.type} • ${g.size}</div>
                                <div class="download-progress-container" style="display: none; height: 4px; background: var(--color-border); border-radius: 2px; margin-top: 12px; margin-bottom: 4px; overflow: hidden;">
                                    <div class="download-progress-bar" style="width: 0%; height: 100%; background: var(--color-primary); transition: width 0.2s ease-out;"></div>
                                </div>
                                <button class="btn btn-sm btn-secondary" style="margin-top: 8px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="downloadGuide(this, '${g.title}')"><span>Download</span></button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Historical Context -->
            <div>
                <h3 class="guide-section-title">📜 Historical Context & Archives</h3>
                <div class="history-list">
                    ${monasteries.slice(0, 3).map((m, idx) => `
                        <div class="history-card">
                            <div class="history-header">
                                <h4 style="font-size: 18px;">${m.name}</h4>
                                <span class="history-tag">Est. ${m.history.match(/\d{4}/) ? m.history.match(/\d{4}/)[0] : 'Ancient'}</span>
                            </div>
                            <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
                                ${m.history} The monastery stands as a testament to the rich spiritual heritage of Sikkim, preserving ancient manuscripts and murals that date back centuries.
                            </p>
                            <button class="btn btn-secondary" style="font-size: 12px;" onclick="readHistory(${idx})">📖 Read Full History</button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Articles -->
            <div>
                <h3 class="guide-section-title">📰 Latest Articles</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
                    ${articles.map(a => `
                        <div style="padding: 16px; border: 1px solid var(--color-card-border); border-radius: 8px; background: var(--color-surface);">
                            <div style="font-size: 12px; color: var(--color-primary); margin-bottom: 4px; text-transform: uppercase; font-weight: bold;">${a.category}</div>
                            <h4 style="margin-bottom: 8px;">${a.title}</h4>
                            <div style="font-size: 12px; color: var(--color-text-secondary); display: flex; justify-content: space-between;">
                                <span>${a.author}</span><span>⏱️ ${a.time}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Download Guide Function
function downloadGuide(btn, title) {
    const card = btn.closest('.download-card');
    const progressContainer = card.querySelector('.download-progress-container');
    const progressBar = card.querySelector('.download-progress-bar');
    const btnText = btn.querySelector('span') || btn;
    const originalText = "Download";
    
    // Reset UI
    btn.disabled = true;
    btnText.textContent = 'Connecting...';
    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    
    // Simulate download process
    let progress = 0;
    
    const interval = setInterval(() => {
        const increment = Math.random() * 15 + 5;
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            progressBar.style.width = '100%';
            btnText.textContent = 'Finalizing...';
            
            setTimeout(() => {
                generateAndDownloadFile(title);
                
                btnText.textContent = '✅ Saved';
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
                
                setTimeout(() => {
                    progressContainer.style.display = 'none';
                    progressBar.style.width = '0%';
                    btnText.textContent = originalText;
                    btn.disabled = false;
                    btn.classList.add('btn-secondary');
                    btn.classList.remove('btn-primary');
                }, 3000);
            }, 500);
        } else {
            progressBar.style.width = `${progress}%`;
            btnText.textContent = `${Math.floor(progress)}%`;
        }
    }, 200);
}

function generateAndDownloadFile(title) {
    let content = "";
    const date = new Date().toLocaleDateString();

    if (title.includes("Sikkim Monastery Circuit")) {
        content = `SIKKIM MONASTERY CIRCUIT: THE ULTIMATE PILGRIMAGE GUIDE
Generated on: ${date}
Sikkim Monastery Virtual Tours
----------------------------------------

INTRODUCTION
Sikkim, the land of mysticism, is dotted with over 200 monasteries belonging to the Nyingma and Kagyu orders of Tibetan Buddhism. This guide outlines the most spiritually significant and scenically breathtaking circuits.

------------------------------------------------------------
CIRCUIT 1: THE ROYAL HERITAGE (WEST SIKKIM)
Duration: 3-4 Days
Base: Pelling

Day 1: The Premier Monasteries
- Pemayangtse Monastery: The "Perfect Sublime Lotus". One of the oldest (1705).
  * Highlight: The seven-tiered wooden model of Zangdok Palri (Guru Rinpoche's Celestial Abode).
  * Best Time: Morning puja (7 AM).
- Rabdentse Ruins: The second capital of Sikkim.
  * Walk through the chestnut forest to reach the palace ruins with views of Kanchenjunga.

Day 2: The Sacred Heart
- Tashiding Monastery: The most holy monastery.
  * Legend: It is believed that a mere glimpse of this monastery cleanses one of all sins.
  * Event: Bumchu Festival (Holy Water ceremony) in Feb/March.
- Sanga Choeling: One of the oldest, accessible by a 45-min hike through rich forests.

Day 3: The Wish-Fulfilling Lake
- Khecheopalri Lake: Sacred to both Buddhists and Hindus.
- Dubdi Monastery: The first monastery established in Sikkim (1701) at Yuksom.

------------------------------------------------------------
CIRCUIT 2: THE EASTERN SPIRITUAL HUB (EAST SIKKIM)
Duration: 2 Days
Base: Gangtok

- Rumtek Monastery (Dharma Chakra Centre):
  * Significance: Seat of the Karmapa (Black Hat sect).
  * Architecture: Replica of Tsurphu Monastery in Tibet.
  * Must-See: The Golden Stupa containing relics of the 16th Karmapa.

- Enchey Monastery:
  * Meaning: "The Solitary Temple".
  * Significance: Built on a site blessed by Lama Drupthob Karpo.

- Lingdum (Ranka) Monastery:
  * Experience: Spin the long row of prayer wheels and enjoy the panoramic sunset.

------------------------------------------------------------
CIRCUIT 3: THE NORTHERN FRONTIER (NORTH SIKKIM)
Duration: 3 Days (Requires Special Permits)
Base: Gangtok -> Lachen/Lachung

- Phodong Monastery: One of the six major monasteries.
- Phensang Monastery: Known for its scenic location and large number of monks.
- Labrang Monastery: Unique octagonal architecture (Tumlong).

------------------------------------------------------------
TRAVEL LOGISTICS
1. Permits:
   - Foreigners need Inner Line Permit (ILP).
   - North Sikkim requires Protected Area Permit (PAP) for all.
   - West Sikkim is generally open, but trekking routes may need permits.

2. Transport:
   - Private taxis are recommended for monastery hopping as they are often located on hilltops away from main roads.
   - Shared jeeps connect major towns (Gangtok, Pelling, Ravangla).

3. Best Seasons:
   - March to May: Rhododendrons bloom, pleasant weather.
   - October to mid-December: clearest mountain views.
   - January-February: Snow in higher areas, Losar (New Year) festivals.

------------------------------------------------------------
EMERGENCY CONTACTS
- Police: 100
- Ambulance: 102
- Tourist Information Centre (Gangtok): +91-3592-202111

Safe Travels!`;
    } else if (title.includes("Buddhist Etiquette")) {
        content = `RESPECTFUL TRAVEL: A GUIDE TO BUDDHIST ETIQUETTE IN SIKKIM
Generated on: ${date}
Sikkim Monastery Virtual Tours
----------------------------------------

Visiting a monastery (Gompa) is a spiritual experience. The atmosphere is one of peace, discipline, and reverence. Please observe the following guidelines to respect the local culture and the sanctity of the space.

------------------------------------------------------------
1. DRESS CODE & BODY LANGUAGE
- Cover Up: Shoulders and knees must be covered. Avoid tank tops, shorts, or short skirts.
- Headgear: Remove hats, caps, and sunglasses before entering the monastery premises or the main prayer hall.
- Feet: Always remove shoes before entering the shrine room (Lhakhang).
- Sitting: When sitting on the floor, do not stretch your legs towards the altar or the Rinpoche (High Lama). Sit cross-legged or with your legs tucked beneath you.

------------------------------------------------------------
2. MOVEMENT & RESPECT
- The Kora (Circumambulation): Always walk around the monastery, stupas (chortens), and mani walls in a CLOCKWISE direction. This follows the path of the sun and shows respect.
- Prayer Wheels: Spin prayer wheels only in a CLOCKWISE direction.
- Touching: Do not touch statues, thangkas (paintings), or ritual instruments unless explicitly permitted.
- Monks: Do not touch monks, especially if you are of the opposite gender. A slight bow with palms pressed together (Namaste) is the appropriate greeting.

------------------------------------------------------------
3. PHOTOGRAPHY & TECHNOLOGY
- Permission: Always ask for permission before taking photos of monks, especially during ceremonies.
- Interiors: Photography is often prohibited inside the main prayer hall (Lhakhang) to preserve the ancient murals from flash and to maintain sanctity. Look for signage or ask a monk.
- Phones: Switch mobile phones to silent mode. Avoid loud conversations.

------------------------------------------------------------
4. OFFERINGS (CHODPA)
- Butter Lamps: You may light a butter lamp (usually for a small donation, e.g., ₹10-₹100) to dispel ignorance and gain merit.
- Khata (Scarf): Offering a white silk scarf (Khata) to a high Lama or a statue is a sign of deep respect.
- Donations: Donation boxes are usually available. It is customary but not mandatory to leave a small offering.

------------------------------------------------------------
5. FESTIVAL ETIQUETTE (CHAM DANCES)
- Crowd: Festivals like Losar or Pang Lhabsol attract crowds. Be patient.
- The Dance: The masked dances are sacred rituals, not just entertainment. Watch with respect. Do not enter the dance arena.

"Om Mani Padme Hum" - May peace be with you.`;
    } else if (title.includes("Architecture")) {
        content = `SACRED SPACES: UNDERSTANDING SIKKIMESE MONASTERY ARCHITECTURE
Generated on: ${date}
Sikkim Monastery Virtual Tours
----------------------------------------

Sikkimese monasteries follow the Tibetan Buddhist architectural style, serving as a physical representation of the Buddhist cosmos (Mandala).

------------------------------------------------------------
1. THE COMPLEX LAYOUT
- Location: Usually built on hilltops or ridges to face the rising sun and overlook the valley (symbolizing dominion over the spiritual realm).
- The Courtyard (Deyang): An open space used for Cham dances and public gatherings. A tall prayer flag pole (Darchog) usually stands here.

------------------------------------------------------------
2. THE MAIN TEMPLE (LHAKHANG / DUKHANG)
- Orientation: Faces East.
- Entrance: Guarded by the "Four Great Kings" (Gyalchen Zhi) painted on the walls to protect the dharma from four directions.
- The Wheel of Life (Bhavachakra): Often painted near the entrance, depicting the cycle of existence (Samsara).

3. INTERIOR ELEMENTS
- The Altar (Choesham): The focal point, housing statues of the Buddha (Shakyamuni), Guru Rinpoche (Padmasambhava), and other deities.
- Thangkas: Intricate scroll paintings on cotton or silk, depicting life of Buddha or deities. They are not just art but tools for visualization during meditation.
- Frescoes: Wall paintings depicting Jataka tales and Buddhist legends.
- Pillars: Wooden pillars are often carved and painted in vibrant reds and golds, wrapped in rugs.

------------------------------------------------------------
4. THE ROOF
- Style: Often Chinese-influenced curved roofs with gold-plated ornaments.
- The Symbol: The "Dharmachakra" (Wheel of Law) flanked by two deer is central on the roof. It represents the Buddha's first sermon at Deer Park in Sarnath.

------------------------------------------------------------
5. CHORTENS (STUPAS)
- Symbolism: Represents the enlightened mind of the Buddha.
- Structure:
  1. Base (Square): Earth / Stability
  2. Dome (Round): Water / Fluidity
  3. Spire (Conical): Fire / Rising Energy
  4. Crescent: Air
  5. Top Point: Space / Void
- Types: There are eight types of Chortens commemorating different events in Buddha's life.

------------------------------------------------------------
6. COLOR SYMBOLISM
- White: Purity and knowledge.
- Blue: Sky and healing.
- Yellow: Earth and rootedness.
- Red: Fire and life force.
- Green: Water and balance.

Understanding these elements transforms a visit from mere sightseeing to a deep cultural immersion.`;
    } else if (title.includes("Phrasebook")) {
        content = `ESSENTIAL SIKKIMESE PHRASEBOOK (NEPALI & BHUTIA)
Generated on: ${date}
Sikkim Monastery Virtual Tours
----------------------------------------

While English and Hindi are widely understood, using local phrases in Nepali (the lingua franca) or Bhutia (traditional language) builds instant rapport.

------------------------------------------------------------
1. GREETINGS & BASICS
English          | Nepali (Pronunciation)       | Bhutia
------------------------------------------------------------
Hello            | Namaste                      | Tashi Delek
How are you?     | Kasto cha?                   | Kham-zang-in-na?
I am fine        | Thik cha                     | Zang-po-yo
Thank you        | Dhanyabad                    | Thu-chi-che
Yes              | Ho / Hajur                   | Ong
No               | Hoina                        | Men
Please           | Kripaya                      | -
Goodbye          | Pheri bhetaula (See you)     | -

------------------------------------------------------------
2. TRAVEL & DIRECTIONS
Where is...?     | ... kaha cha?                | ... ga-ti yo?
Monastery        | Gumba                        | Gompa
Road/Path        | Baato                        | Lam
How far?         | Kati tada cha?               | -
Stop here        | Yaha rok-nus                 | -
Go straight      | Sidha jaanus                 | -
Slowly           | Bistarai                     | -

------------------------------------------------------------
3. FOOD & DINING
Water            | Paani                        | Chu
Tea              | Chiya                        | So-cha (Butter tea) / Na-cha (Sweet)
Food/Rice        | Khaana / Bhaat               | -
Vegetables       | Sabji                        | -
Meat             | Maasu                        | -
Spicy            | Piro                         | -
Delicious        | Mitho cha                    | Shim-bo-du
Bill please      | Bill dinus                   | -

------------------------------------------------------------
4. SHOPPING & NUMBERS
How much?        | Kati ho? / Yesko kati?       | Gadem chi mo?
Too expensive    | Dherai mahango bhayo         | -
Lower the price  | Ali kam garnus               | -

1  - Ek
2  - Dui
3  - Teen
4  - Chaar
5  - Paanch
6  - Cha
7  - Saat
8  - Aath
9  - Nau
10 - Das
100 - Ek Say

------------------------------------------------------------
5. EMERGENCY
Help!            | Guhaar! / Madat!             | -
Doctor           | Doctor                       | Amji (Traditional doctor)
Hospital         | Aspataal                     | -
Police           | Police                       | -

------------------------------------------------------------
CULTURAL TIP:
When addressing someone older or with respect in Nepali, add "didi" (older sister), "bhai" (younger brother), "dai" (older brother), or "bahini" (younger sister) after their name or as a standalone address.`;
    } else {
        content = `${title}\n----------------------------------------\nThank you for downloading this guide from Sikkim Monastery Virtual Tours.\n\nSafe Travels!`;
    }
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_Guide.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Read History Modal
function readHistory(index) {
    const m = monasteries[index];
    const modal = document.getElementById('event-modal');
    const title = document.getElementById('event-modal-title');
    const body = document.getElementById('event-modal-body');
    
    title.textContent = `History: ${m.name}`;
    body.innerHTML = `
        <div style="padding: 10px;">
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <span class="history-tag">Est. ${m.history.match(/\d{4}/) ? m.history.match(/\d{4}/)[0] : 'Ancient'}</span>
                <span class="history-tag" style="background: var(--color-surface); border: 1px solid var(--color-border);">📍 ${m.distance}</span>
            </div>
            
            <div style="background: var(--color-secondary); height: 200px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 48px;">
                🏛️
            </div>

            <h4 style="margin-bottom: 10px;">Historical Significance</h4>
            <p style="line-height: 1.8; color: var(--color-text-secondary); margin-bottom: 20px;">
                ${m.history}
            </p>
            
            <h4 style="margin-bottom: 10px;">Cultural Heritage</h4>
            <p style="line-height: 1.8; color: var(--color-text-secondary); margin-bottom: 20px;">
                The monastery stands as a testament to the rich spiritual heritage of Sikkim, preserving ancient manuscripts and murals that date back centuries. 
                It has served as a center for Buddhist learning and practice, attracting scholars and practitioners from across the Himalayas.
            </p>

            <h4 style="margin-bottom: 10px;">Architecture</h4>
            <p style="line-height: 1.8; color: var(--color-text-secondary);">
                The architecture reflects the traditional Tibetan style, with intricate wood carvings and vibrant frescoes depicting Buddhist deities and legends.
                Visitors can observe the detailed craftsmanship in the prayer wheels, the main prayer hall, and the residential quarters for the monks.
            </p>
        </div>
    `;
    
    modal.classList.add('active');
}

// Render Itinerary
function renderItineraryStep() {
    const content = document.getElementById('itinerary-content');
    document.querySelectorAll('.step').forEach(s => s.classList.toggle('active', parseInt(s.dataset.step) === itineraryStep));
    
    // Update Static Buttons
    const backBtn = document.getElementById('btn-back');
    const proceedBtn = document.getElementById('btn-proceed-booking');
    
    if (backBtn) backBtn.style.display = itineraryStep === 1 ? 'none' : 'inline-block';
    
    if (proceedBtn) {
        if (itineraryStep === 1) {
            proceedBtn.textContent = 'Next: Transport →';
            proceedBtn.disabled = selectedMonasteries.length === 0;
        } else if (itineraryStep === 2) {
            proceedBtn.textContent = 'Next: Accommodation →';
            proceedBtn.disabled = !selectedTransport;
        } else if (itineraryStep === 3) {
            proceedBtn.textContent = 'Next: Activities →';
            proceedBtn.disabled = false;
        } else if (itineraryStep === 4) {
            proceedBtn.textContent = 'Review Itinerary →';
            proceedBtn.disabled = false;
        } else if (itineraryStep === 5) {
            const { total } = calculateTripCost();
            proceedBtn.textContent = `Book Now - ₹${total.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
            proceedBtn.disabled = false;
        }
    }
    
    if (itineraryStep === 1) {
        const { totalDistance } = calculateTripDistances(selectedMonasteries);
        const warnings = getAltitudeWarnings(selectedMonasteries);
        const suggestions = selectedMonasteries.length > 0 ? getSmartSuggestions(selectedMonasteries) : [];

        content.innerHTML = `
            <div style="margin-bottom: 24px;">
                <h3>Select Monasteries</h3>
                <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: 12px;">Click to add or remove. Order can be adjusted later for day-by-day planning.</p>

                ${selectedMonasteries.length > 0 ? `
                    <div class="trip-summary-bar" style="background: var(--color-surface); padding: 16px; border-radius: 8px; border: 1px solid var(--color-card-border); margin-bottom: 16px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="font-weight: bold;">${selectedMonasteries.length} monasteries selected</span>
                            <button class="btn btn-secondary btn-sm" onclick="optimizeSelectedRoute()">🪄 Optimize Route</button>
                        </div>
                        <div style="font-size: 14px; color: var(--color-text-secondary);">
                            Total circuit distance: ${totalDistance.toFixed(1)} km
                            ${totalDistance > 0 ? ` · Est. drive time: ${Math.round(totalDistance / 35 * 10) / 10} hours` : ''}
                        </div>
                    </div>
                ` : ''}

                ${warnings.length > 0 ? `
                    <div class="warnings-section" style="background: rgba(255, 193, 7, 0.1); border-left: 4px solid #ffc107; padding: 16px; margin-bottom: 16px; border-radius: 4px;">
                        <h4 style="margin: 0 0 8px 0; color: #856404;">⚠️ Altitude Warnings</h4>
                        ${warnings.map(w => `<div style="font-size: 14px; margin-bottom: 4px;">• ${w.message}</div>`).join('')}
                    </div>
                ` : ''}

                ${suggestions.length > 0 ? `
                    <div class="suggestions-section" style="background: var(--color-secondary); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                        <h4 style="margin: 0 0 12px 0;">💡 Smart Suggestions</h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
                            ${suggestions.map(m => `
                                <div onclick="toggleMonasterySelection(${m.id})" style="background: var(--color-surface); padding: 12px; border-radius: 6px; cursor: pointer; border: 1px solid var(--color-border); transition: all 0.2s;">
                                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${m.name}</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">⭐ ${m.rating} · ${m.distance}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="itinerary-monastery-grid">
                    ${monasteries.map(m => `
                        <div onclick="toggleMonasterySelection(${m.id})" class="itinerary-monastery-card ${selectedMonasteries.includes(m.id) ? 'selected' : ''}">
                            <div class="itinerary-monastery-name">${m.name}</div>
                            <div class="itinerary-monastery-meta">${m.distance} · ${m.altitudeText}</div>
                            <div class="itinerary-monastery-meta">🌸 ${m.season} · ⭐ ${m.rating}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    } else if (itineraryStep === 2) {
        const { totalDistance } = calculateTripDistances(selectedMonasteries);
        const transportCost = selectedTransport ? totalDistance * transportOptions[selectedTransport].rate : 0;

        content.innerHTML = `
            <div style="margin-bottom: 24px;">
                <h3>Choose Transport Mode</h3>
                <div style="display: grid; gap: 16px; margin-top: 16px;">
                    ${Object.entries(transportOptions).map(([key, option]) => `
                        <div onclick="selectTransport('${key}')" style="display: flex; justify-content: space-between; align-items: center; padding: 16px; border: 1px solid ${selectedTransport === key ? 'var(--color-primary)' : 'var(--color-card-border)'}; border-radius: 8px; cursor: pointer; background: ${selectedTransport === key ? 'var(--color-secondary)' : 'var(--color-surface)'};">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="font-size: 24px;">${option.icon}</div>
                                <div>
                                    <div style="font-weight: bold;">${option.name}</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">${option.desc}</div>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: bold; color: var(--color-primary);">₹${option.rate}/km</div>
                                ${totalDistance > 0 ? `<div style="font-size: 12px; color: var(--color-text-secondary);">Total: ₹${(totalDistance * option.rate).toLocaleString()}</div>` : ''}
                            </div>
                        </div>
                        ${selectedTransport === 'personal' && key === 'personal' ? `
                            <div class="logistics-info" style="margin-top: 12px; padding: 12px; background: var(--color-surface); border-radius: 6px; border: 1px solid var(--color-border);">
                                <strong>⛽ Fuel Stops on Route:</strong><br>
                                ${fuelStops.map(f => `• ${f.name} (${f.type})`).join('<br>')}
                            </div>
                        ` : ''}
                    `).join('')}
                </div>

                ${selectedTransport ? `
                    <div class="transport-summary" style="margin-top: 16px; padding: 16px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-card-border);">
                        <h4 style="margin: 0 0 8px 0;">Transport Summary</h4>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 14px;">
                            <div>Distance: ${totalDistance.toFixed(1)} km</div>
                            <div>Rate: ₹${transportOptions[selectedTransport].rate}/km</div>
                            <div>Est. time: ${Math.round(totalDistance / 35 * 10) / 10} hours</div>
                            <div style="font-weight: bold;">Cost: ₹${transportCost.toLocaleString()}</div>
                        </div>
                    </div>
                ` : ''}
            </div>`;
    } else if (itineraryStep === 3) {
        content.innerHTML = `
            <div style="margin-bottom: 24px;">
                <h3>Select Accommodation</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; margin-top: 16px;">
                    ${hotels.map((h, index) => `
                        <div onclick="selectHotel(${index})" style="padding: 16px; border: 1px solid ${selectedHotels.includes(index) ? 'var(--color-primary)' : 'var(--color-card-border)'}; border-radius: 8px; cursor: pointer; background: ${selectedHotels.includes(index) ? 'var(--color-secondary)' : 'var(--color-surface)'};">
                            <div style="font-weight: bold; margin-bottom: 4px;">${h.name}</div>
                            <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                <span>⭐ ${h.rating} (Clean: ${h.cleanliness})</span>
                                <span>📍 ${h.distance}</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                ${h.amenities.map(a => `<span class="amenity-tag ${a.includes('Veg') ? 'veg' : ''}">${a}</span>`).join('')}
                                ${h.accessible ? '<span class="amenity-tag">♿ Accessible</span>' : ''}
                            </div>
                            <div style="font-weight: bold; color: var(--color-primary);">₹${h.price.toLocaleString()}/night</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    } else if (itineraryStep === 4) {
        content.innerHTML = `
            <div style="margin-bottom: 24px;">
                <h3>Add Activities & Services</h3>
                <div style="display: grid; gap: 16px; margin-top: 16px;">
                    ${activityOptions.map(a => `
                        <div onclick="toggleActivity('${a.id}')" style="display: flex; justify-content: space-between; align-items: center; padding: 16px; border: 1px solid ${selectedActivities.includes(a.id) ? 'var(--color-primary)' : 'var(--color-card-border)'}; border-radius: 8px; cursor: pointer; background: ${selectedActivities.includes(a.id) ? 'var(--color-secondary)' : 'var(--color-surface)'};">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="font-size: 24px;">${a.icon}</div>
                                <div>
                                    <div style="font-weight: bold;">${a.name}</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">${a.desc}</div>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: bold; color: var(--color-primary);">₹${a.price}</div>
                                <div style="font-size: 10px; color: var(--color-text-secondary);">${a.unit === 'day' ? '/day' : '(one-time)'}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    } else if (itineraryStep === 5) {
        // Calculation Logic
        const {
            total,
            totalDistance,
            duration,
            nights,
            transportCost,
            accommodationCost,
            activityCost,
            entryFees,
            gst,
            selectedMons,
            selectedActs
        } = calculateTripCost();

        const avgSpeedKmh = 35;
        const driveHours = Math.round((totalDistance / avgSpeedKmh) * 10) / 10;
        const driveText = driveHours < 24 ? `${driveHours} hrs total drive` : `${Math.floor(driveHours / 24)}d ${Math.round(driveHours % 24)}h drive`;
        const sitesPerDay = Math.max(1, Math.ceil(selectedMons.length / duration));
        const dayByDay = [];
        for (let d = 0; d < duration; d++) {
            const start = d * sitesPerDay;
            const dayMons = selectedMons.slice(start, start + sitesPerDay);
            if (dayMons.length) dayByDay.push({ day: d + 1, monasteries: dayMons });
        }
        const dateEl = document.getElementById('trip-start-date');
        const startDateStr = dateEl && dateEl.value ? new Date(dateEl.value + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) : '—';

        content.innerHTML = `
            <div class="itinerary-review">
                <h3>Trip Summary</h3>
                ${dateEl && dateEl.value ? `<p class="itinerary-review-date">📅 Start date: <strong>${startDateStr}</strong></p>` : ''}

                <div class="itinerary-review-permits">
                    <strong>🪪 Remember</strong> Inner Line Permit (ILP) is required for Sikkim. Apply in advance at <a href="https://sikkimtourism.gov.in" target="_blank" rel="noopener">sikkimtourism.gov.in</a> or at Rangpo/Siliguri.
                </div>

                <div class="itinerary-day-by-day">
                    <h4>Day-by-day Itinerary</h4>
                    ${dayByDay.map(d => `
                        <div class="itinerary-day-block">
                            <span class="itinerary-day-num">Day ${d.day}</span>
                            <ul>${d.monasteries.map(m => `<li>${m.name} (${m.altitudeText})</li>`).join('')}</ul>
                        </div>
                    `).join('')}
                </div>

                <div class="itinerary-review-stats">
                    <div class="itinerary-stat"><span class="itinerary-stat-label">📍 Total distance</span><span class="itinerary-stat-value">${totalDistance.toFixed(1)} km</span></div>
                    <div class="itinerary-stat"><span class="itinerary-stat-label">🚗 Est. drive time</span><span class="itinerary-stat-value">${driveText}</span></div>
                    <div class="itinerary-stat"><span class="itinerary-stat-label">📅 Duration</span><span class="itinerary-stat-value">${duration} days</span></div>
                    <div class="itinerary-stat"><span class="itinerary-stat-label">🏛️ Monasteries</span><span class="itinerary-stat-value">${selectedMons.length}</span></div>
                </div>

                <div class="itinerary-review-cost">
                    <h4>Detailed Cost Breakdown</h4>
                    <div class="cost-row"><span>Transport (${totalDistance.toFixed(1)} km)</span><span>₹${transportCost.toLocaleString()}</span></div>
                    <div class="cost-row"><span>Accommodation (${nights} nights)</span><span>₹${accommodationCost.toLocaleString()}</span></div>
                    ${selectedActs.map(a => `<div class="cost-row"><span>${a.name}</span><span>₹${(a.price * (a.unit === 'day' ? duration : 1)).toLocaleString()}</span></div>`).join('')}
                    <div class="cost-row"><span>Entry Fees (${selectedMons.length} monasteries)</span><span>₹${entryFees.toLocaleString()}</span></div>
                    <div class="cost-row cost-row-muted"><span>GST (18%)</span><span>₹${gst.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></div>
                    <div class="cost-row cost-total"><span>Total Cost</span><span>₹${total.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></div>
                </div>

                <div class="itinerary-review-actions">
                    <button type="button" class="btn btn-secondary" id="btn-copy-itinerary">📋 Copy itinerary</button>
                    <button type="button" class="btn btn-primary" id="btn-download-pdf">📄 Download PDF</button>
                </div>
            </div>`;

        const copyBtn = content.querySelector('#btn-copy-itinerary');
        if (copyBtn) {
            copyBtn.addEventListener('click', function() {
                const text = getItineraryCopyText(selectedMons, duration, total, startDateStr, driveText, dayByDay);
                navigator.clipboard.writeText(text).then(function() {
                    copyBtn.textContent = '✅ Copied!';
                    setTimeout(function() { copyBtn.textContent = '📋 Copy itinerary'; }, 2000);
                }).catch(function() { alert('Copy failed. Use Download PDF instead.'); });
            });
        }

        const pdfBtn = content.querySelector('#btn-download-pdf');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', function() {
                generateTripPDF({
                    selectedMons,
                    selectedActs,
                    totalDistance,
                    duration,
                    total,
                    startDateStr,
                    driveText,
                    dayByDay,
                    transportCost,
                    accommodationCost,
                    activityCost,
                    entryFees,
                    gst
                });
            });
        }
    }
}

function toggleMonasterySelection(id) {
    const index = selectedMonasteries.indexOf(id);
    if (index > -1) selectedMonasteries.splice(index, 1);
    else selectedMonasteries.push(id);
    renderItineraryStep();
}

function selectHotel(index) {
    selectedHotels = [index]; // Single select
    renderItineraryStep();
}

function toggleActivity(id) {
    const index = selectedActivities.indexOf(id);
    if (index > -1) selectedActivities.splice(index, 1);
    else selectedActivities.push(id);
    renderItineraryStep();
}

function calculateTripCost() {
    const selectedMons = monasteries.filter(m => selectedMonasteries.includes(m.id));
    const { totalDistance } = calculateTripDistances(selectedMonasteries);
    const duration = Math.max(1, Math.ceil(totalDistance / 150)); // Estimate 1 day per 150km
    const nights = duration - 1;

    const transportRate = transportOptions[selectedTransport]?.rate || 0;
    const transportCost = totalDistance * transportRate;

    const hotel = selectedHotels.length > 0 ? hotels[selectedHotels[0]] : null;
    const accommodationCost = hotel ? hotel.price * nights : 0;

    let activityCost = 0;
    const selectedActs = activityOptions.filter(a => selectedActivities.includes(a.id));
    selectedActs.forEach(a => {
        activityCost += a.price * (a.unit === 'day' ? duration : 1);
    });

    let entryFees = 0;
    selectedMons.forEach(m => {
        entryFees += parseFloat(m.entryFee.replace(/[^0-9]/g, '') || 0);
    });

    const subtotal = transportCost + accommodationCost + activityCost + entryFees;
    const gst = subtotal * 0.18; // Updated to 18% GST
    const total = subtotal + gst;

    return {
        total,
        totalDistance,
        duration,
        nights,
        transportCost,
        accommodationCost,
        activityCost,
        entryFees,
        gst,
        selectedMons,
        selectedActs
    };
}

function handleProceed() {
    if (itineraryStep < 5) {
        if (itineraryStep === 1 && selectedMonasteries.length === 0) {
            alert('Please select at least one monastery.');
            return;
        }
        if (itineraryStep === 2 && !selectedTransport) {
            alert('Please select a transport option.');
            return;
        }
        nextItineraryStep();
    } else {
        const { total } = calculateTripCost();
        bookItinerary(total);
    }
}

function generateTripPDF(data) {
    // Load jsPDF if not already loaded
    if (typeof jspdf === 'undefined' && typeof jsPDF === 'undefined') {
        // Fallback to print version if jsPDF not available
        generatePDF();
        return;
    }

    const { jsPDF } = window.jspdf || window;
    if (!jsPDF) {
        alert('PDF library not loaded. Using print version instead.');
        generatePDF();
        return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    let yPosition = 20;

    // Header
    doc.setFontSize(20);
    doc.setTextColor(33, 128, 141); // Teal color
    doc.text('Sikkim Monastery Journey', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 15;

    // Trip Overview
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Trip Overview', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    if (data.startDateStr !== '—') {
        doc.text(`Start Date: ${data.startDateStr}`, 20, yPosition);
        yPosition += 6;
    }
    doc.text(`Duration: ${data.duration} Days`, 20, yPosition);
    yPosition += 6;
    doc.text(`Total Distance: ${data.totalDistance.toFixed(1)} km`, 20, yPosition);
    yPosition += 6;
    doc.text(`Estimated Drive Time: ${data.driveText}`, 20, yPosition);
    yPosition += 15;

    // Permit Reminder
    doc.setFillColor(255, 243, 205);
    doc.rect(20, yPosition - 5, pageWidth - 40, 15, 'F');
    doc.setTextColor(133, 100, 4);
    doc.setFontSize(9);
    doc.text('🪪 Inner Line Permit (ILP) required for Sikkim. Apply at sikkimtourism.gov.in', 25, yPosition + 2);
    yPosition += 20;

    // Day-by-day Itinerary
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text('Day-by-Day Itinerary', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(9);
    data.dayByDay.forEach(day => {
        if (yPosition > pageHeight - 40) {
            doc.addPage();
            yPosition = 20;
        }
        doc.setFont(undefined, 'bold');
        doc.text(`Day ${day.day}:`, 20, yPosition);
        doc.setFont(undefined, 'normal');
        day.monasteries.forEach(monastery => {
            doc.text(`• ${monastery.name} (${monastery.altitudeText})`, 30, yPosition + 5);
            yPosition += 5;
        });
        yPosition += 5;
    });
    yPosition += 10;

    // Cost Breakdown
    if (yPosition > pageHeight - 60) {
        doc.addPage();
        yPosition = 20;
    }

    doc.setFontSize(12);
    doc.text('Cost Breakdown', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(9);
    const costs = [
        { label: `Transport (${data.totalDistance.toFixed(1)} km)`, amount: data.transportCost },
        { label: `Accommodation (${data.duration - 1} nights)`, amount: data.accommodationCost },
        ...data.selectedActs.map(a => ({
            label: a.name,
            amount: a.price * (a.unit === 'day' ? data.duration : 1)
        })),
        { label: `Entry Fees (${data.selectedMons.length} monasteries)`, amount: data.entryFees },
        { label: 'GST (18%)', amount: data.gst, isGST: true }
    ];

    costs.forEach(cost => {
        if (cost.isGST) {
            doc.setTextColor(100, 100, 100);
        }
        doc.text(cost.label, 20, yPosition);
        doc.text(`₹${cost.amount.toLocaleString()}`, pageWidth - 20, yPosition, { align: 'right' });
        yPosition += 6;
        if (cost.isGST) {
            doc.setTextColor(0, 0, 0);
        }
    });

    // Total
    yPosition += 5;
    doc.setFont(undefined, 'bold');
    doc.setFontSize(11);
    doc.text('Total Cost', 20, yPosition);
    doc.text(`₹${data.total.toLocaleString()}`, pageWidth - 20, yPosition, { align: 'right' });

    // Footer
    yPosition = pageHeight - 20;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Generated by Monastery360 - Your Spiritual Journey Companion', pageWidth / 2, yPosition, { align: 'center' });

    // Save the PDF
    const fileName = `Sikkim_Trip_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
}

function generatePDF() {
    const { total, totalDistance, duration, transportCost, accommodationCost, activityCost, entryFees, gst, selectedMons, selectedActs } = calculateTripCost();
    const dateEl = document.getElementById('trip-start-date');
    const startDateStr = dateEl && dateEl.value ? new Date(dateEl.value + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) : 'Not set';

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Trip Itinerary</title>
            <style>
                body { font-family: sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
                h1 { color: #21808D; border-bottom: 2px solid #21808D; padding-bottom: 10px; }
                .section { margin-bottom: 20px; }
                .cost-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                .total { font-weight: bold; font-size: 1.2em; border-top: 1px solid #ccc; padding-top: 10px; margin-top: 10px; }
                .reminder { background: #fff3cd; border-left: 4px solid #ffc107; padding: 10px; margin: 10px 0; }
            </style>
        </head>
        <body>
            <h1>Sikkim Monastery Journey</h1>
            <div class="section"><h3>Trip Overview</h3><p><strong>Start date:</strong> ${startDateStr}</p><p><strong>Duration:</strong> ${duration} Days</p><p><strong>Total Distance:</strong> ${totalDistance.toFixed(1)} km</p></div>
            <div class="reminder"><strong>Permit:</strong> Inner Line Permit (ILP) required for Sikkim. Apply at sikkimtourism.gov.in or at Rangpo/Siliguri.</div>
            <div class="section"><h3>Monasteries</h3><ul>${selectedMons.map(m => `<li>${m.name} (${m.distance})</li>`).join('')}</ul></div>
            <div class="section"><h3>Logistics</h3><p><strong>Transport:</strong> ${transportOptions[selectedTransport]?.name || 'Not selected'}</p><p><strong>Accommodation:</strong> ${selectedHotels.length > 0 ? hotels[selectedHotels[0]].name : 'Not selected'}</p></div>
            <div class="section"><h3>Estimated Cost</h3>
                <div class="cost-row"><span>Transport</span><span>₹${transportCost.toLocaleString()}</span></div>
                <div class="cost-row"><span>Accommodation</span><span>₹${accommodationCost.toLocaleString()}</span></div>
                <div class="cost-row"><span>Activities</span><span>₹${activityCost.toLocaleString()}</span></div>
                <div class="cost-row"><span>Entry Fees</span><span>₹${entryFees.toLocaleString()}</span></div>
                <div class="cost-row"><span>GST (18%)</span><span>₹${gst.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></div>
                <div class="cost-row total"><span>Total</span><span>₹${total.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></div>
            </div>
            <script>window.print();</script>
        </body></html>`);
    printWindow.document.close();
}

function getItineraryCopyText(selectedMons, duration, total, startDateStr, driveText, dayByDay) {
    let lines = ['Sikkim Monastery Trip', ''];
    if (startDateStr) lines.push('Start: ' + startDateStr);
    lines.push('Duration: ' + duration + ' days', 'Est. drive: ' + driveText, '');
    if (dayByDay && dayByDay.length) {
        dayByDay.forEach(function(d) {
            lines.push('Day ' + d.day + ': ' + d.monasteries.map(function(m) { return m.name; }).join(', '));
        });
        lines.push('');
    }
    lines.push('Monasteries: ' + selectedMons.map(function(m) { return m.name; }).join(', '));
    lines.push('Total (est.): ₹' + total.toLocaleString(undefined, { maximumFractionDigits: 0 }));
    return lines.join('\n');
}

function nextItineraryStep() { itineraryStep++; renderItineraryStep(); }
function prevItineraryStep() { itineraryStep--; renderItineraryStep(); }
function selectTransport(type) { selectedTransport = type; renderItineraryStep(); }

function renderAccountContent(tab) {
    const content = document.getElementById('account-content');
    document.querySelectorAll('.tab-btn').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
        t.onclick = () => renderAccountContent(t.dataset.tab);
    });
    
    if (!currentUser) {
        content.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>Please Login</h3>
                <p style="color: var(--color-text-secondary); margin-bottom: 20px;">You need to be logged in to view your account details.</p>
                <button class="btn btn-primary" onclick="openAuthModal()">Login / Sign Up</button>
            </div>
        `;
        return;
    }

    const headerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--color-border);">
            <div>
                <h3 style="margin: 0;">${currentUser.name}</h3>
                <div style="color: var(--color-text-secondary); font-size: 14px;">${currentUser.email}</div>
            </div>
            <button class="btn btn-secondary" onclick="logout()">Sign Out</button>
        </div>
    `;
    
    if (tab === 'bookings') {
        if (userBookings.length === 0) {
            content.innerHTML = headerHTML + `<div style="text-align: center; padding: 40px; color: var(--color-text-secondary);"><h3>No Upcoming Bookings</h3><p>Your booked events will appear here.</p></div>`;
        } else {
            content.innerHTML = headerHTML + `<div style="display: grid; gap: 16px;">
                ${userBookings.map(b => `
                    <div style="padding: 16px; border: 1px solid var(--color-card-border); border-radius: 8px; background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-weight: bold;">Trip #${b.id.toString().slice(-6)}</span>
                            <span style="color: var(--color-primary); font-weight: bold;">${b.status}</span>
                        </div>
                        <div style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 8px;">
                            <div>📅 Booked on: ${new Date(b.date).toLocaleDateString()}</div>
                            <div>💰 Total: ₹${b.total.toLocaleString()}</div>
                        </div>
                        <div style="font-size: 14px;">
                            <strong>Itinerary:</strong> ${b.monasteries.join(', ')}<br>
                            <strong>Stay:</strong> ${b.hotel}<br>
                            <strong>Transport:</strong> ${b.transport}
                        </div>
                    </div>
                `).join('')}
            </div>`;
        }
    } else if (tab === 'favorites') {
        const favs = monasteries.filter(m => favorites.includes(m.id));
        content.innerHTML = headerHTML + (favs.length ? `<div style="display: grid; gap: 16px;">${favs.map(m => `<div style="padding: 16px; border: 1px solid var(--color-card-border); border-radius: 8px; cursor: pointer;" onclick="openTour(${monasteries.indexOf(m)})"><strong>${m.name}</strong><br><span style="font-size: 12px; color: var(--color-text-secondary);">⭐ ${m.rating}</span></div>`).join('')}</div>` : `<div style="text-align: center; padding: 40px;">No favorites yet.</div>`);
    } else {
        content.innerHTML = headerHTML + `<div style="text-align: center; padding: 40px;">Feature coming soon</div>`;
    }
}

function saveItinerary() {
    const dateEl = document.getElementById('trip-start-date');
    const startDate = dateEl ? dateEl.value : '';
    const itinerary = {
        monasteries: selectedMonasteries,
        transport: selectedTransport,
        hotels: selectedHotels,
        activities: selectedActivities,
        tripStartDate: startDate,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem('savedItinerary', JSON.stringify(itinerary));
    alert('Itinerary saved! Load it anytime with "Load saved draft".');
}

function loadItineraryDraft() {
    const raw = localStorage.getItem('savedItinerary');
    if (!raw) {
        alert('No saved draft found. Plan a trip and use "Save Draft" first.');
        return;
    }
    try {
        const data = JSON.parse(raw);
        selectedMonasteries = Array.isArray(data.monasteries) ? data.monasteries.filter(id => monasteries.some(m => m.id === id)) : [];
        selectedTransport = data.transport && transportOptions[data.transport] ? data.transport : null;
        selectedHotels = Array.isArray(data.hotels) ? data.hotels.filter(i => i >= 0 && i < hotels.length) : [];
        selectedActivities = Array.isArray(data.activities) ? data.activities.filter(id => activityOptions.some(a => a.id === id)) : [];
        tripStartDate = data.tripStartDate || '';
        const dateEl = document.getElementById('trip-start-date');
        if (dateEl) dateEl.value = tripStartDate;
        itineraryStep = 1;
        renderItineraryStep();
        const savedAt = data.savedAt ? new Date(data.savedAt).toLocaleString() : '';
        if (savedAt) alert('Draft loaded. Last saved: ' + savedAt);
    } catch (e) {
        alert('Could not load draft. It may be from an older version.');
    }
}

function bookItinerary(total) {
    if (!confirm(`Confirm booking for ₹${total.toLocaleString()}?`)) return;

    const booking = {
        id: Date.now(),
        date: new Date().toISOString(),
        total: total,
        monasteries: monasteries.filter(m => selectedMonasteries.includes(m.id)).map(m => m.name),
        transport: transportOptions[selectedTransport]?.name || 'None',
        hotel: selectedHotels.length > 0 ? hotels[selectedHotels[0]].name : 'None',
        activities: activityOptions.filter(a => selectedActivities.includes(a.id)).map(a => a.name),
        status: 'Confirmed'
    };

    userBookings.push(booking);
    if (currentUser) {
        currentUser.bookings = userBookings;
        updateUserInStorage(currentUser);
    }
    
    // Reset builder
    selectedMonasteries = [];
    selectedTransport = null;
    selectedHotels = [];
    selectedActivities = [];
    itineraryStep = 1;
    renderItineraryStep();

    // Navigate to bookings
    const accountBtn = document.querySelector('.nav-btn[data-section="account"]');
    if (accountBtn) accountBtn.click();
    renderAccountContent('bookings');
    
    alert('Booking confirmed! View details in your account.');
}

function showEventBookingForm(eventId) {
    const event = events.find(e => e.id === eventId);
    const modalBody = document.getElementById('event-modal-body');
    const modalTitle = document.getElementById('event-modal-title');
    
    modalTitle.textContent = `Book: ${event.name}`;
    
    modalBody.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="margin-bottom: 24px; padding: 16px; background: var(--color-surface); border: 1px solid var(--color-card-border); border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--color-text-secondary);">Price per person</span>
                    <span style="font-weight: bold;">₹${event.price.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; border-top: 1px solid var(--color-border); padding-top: 8px; margin-top: 8px;">
                    <span>Total</span>
                    <span id="booking-total">₹${event.price.toLocaleString()}</span>
                </div>
            </div>

            <form id="booking-form" onsubmit="event.preventDefault(); processEventBooking(${event.id});">
                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Number of Participants</label>
                    <input type="number" id="participants" min="1" max="${event.max_participants - event.current_participants}" value="1" 
                        style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);"
                        onchange="updateBookingTotal(${event.price})">
                </div>

                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter your name" required
                        style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);">
                </div>

                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email Address</label>
                    <input type="email" id="email" placeholder="your@email.com" required
                        style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);">
                </div>

                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required
                        style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);">
                </div>

                <div style="margin-bottom: 24px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Payment Method</label>
                    <div style="display: flex; gap: 16px;">
                        <label style="flex: 1; padding: 12px; border: 1px solid var(--color-primary); border-radius: 8px; background: var(--color-secondary); cursor: pointer; display: flex; align-items: center; gap: 8px;">
                            <input type="radio" name="payment" value="upi" checked>
                            <span>UPI</span>
                        </label>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 16px;">
                    Complete Booking - <span id="btn-total">₹${event.price.toLocaleString()}</span>
                </button>
            </form>
        </div>
    `;
}

function updateBookingTotal(price) {
    const count = parseInt(document.getElementById('participants').value) || 1;
    const total = count * price;
    document.getElementById('booking-total').textContent = `₹${total.toLocaleString()}`;
    document.getElementById('btn-total').textContent = `₹${total.toLocaleString()}`;
}

function processEventBooking(eventId) {
    const event = events.find(e => e.id === eventId);
    const count = parseInt(document.getElementById('participants').value);
    const total = count * event.price;
    const name = document.getElementById('fullname').value;
    
    const btn = document.querySelector('#booking-form button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Processing...';
    
    setTimeout(() => {
        const booking = {
            id: Date.now(),
            date: new Date().toISOString(),
            total: total,
            monasteries: [event.monastery_name],
            transport: 'Event Transport',
            hotel: 'N/A',
            activities: [event.name],
            status: 'Confirmed',
            participants: count,
            guestName: name
        };
        
        userBookings.push(booking);
        if (currentUser) {
            currentUser.bookings = userBookings;
            updateUserInStorage(currentUser);
        }
        event.current_participants += count;
        renderEvents();
        
        alert(`Booking Successful!\n\nEvent: ${event.name}\nParticipants: ${count}\nTotal: ₹${total.toLocaleString()}`);
        closeEventModal();
        
        const accountBtn = document.querySelector('.nav-btn[data-section="account"]');
        if (accountBtn) accountBtn.click();
        renderAccountContent('bookings');
    }, 1500);
}

function showCreateDiscussionModal() {
    const modal = document.getElementById('event-modal');
    const title = document.getElementById('event-modal-title');
    const body = document.getElementById('event-modal-body');
    
    title.textContent = "Start New Discussion";
    
    body.innerHTML = `
        <form id="discussion-form" onsubmit="event.preventDefault(); handleCreateDiscussion();">
            <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Title</label>
                <input type="text" id="disc-title" placeholder="Discussion title" required
                    style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);">
            </div>

            <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Category</label>
                <select id="disc-category" required
                    style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);">
                    <option value="general">General</option>
                    <option value="travel">Travel Tips</option>
                    <option value="photography">Photography</option>
                    <option value="spiritual">Spiritual</option>
                    <option value="culture">Culture</option>
                </select>
            </div>

            <div style="margin-bottom: 24px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Content</label>
                <textarea id="disc-content" rows="4" placeholder="What would you like to discuss?" required
                    style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background); color: var(--color-text);"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 16px;">Post Discussion</button>
        </form>
    `;
    
    modal.classList.add('active');
}

function handleCreateDiscussion() {
    const title = document.getElementById('disc-title').value;
    const category = document.getElementById('disc-category').value;
    
    const newDiscussion = {
        title: title,
        author: "You",
        replies: 0,
        views: 0,
        category: category
    };
    
    discussions.unshift(newDiscussion);
    renderDiscussions();
    closeEventModal();
    alert('Discussion posted successfully!');
}

// Auth Functions
function openAuthModal() {
    document.getElementById('auth-modal').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('signup-form').classList.add('active');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        favorites = user.favorites || [];
        userBookings = user.bookings || [];
        closeAuthModal();
        renderAccountContent('bookings');
        renderMonasteries(); // Update hearts
        updateAuthUI();
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('Email already exists');
        return;
    }
    
    const newUser = { name, email, password, bookings: [], favorites: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    favorites = [];
    userBookings = [];
    
    closeAuthModal();
    renderAccountContent('bookings');
    renderMonasteries();
    updateAuthUI();
    alert('Account created successfully!');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    favorites = [];
    userBookings = [];
    renderAccountContent('bookings');
    renderMonasteries();
    updateAuthUI();
    alert('Logged out successfully');
}

function updateAuthUI() {
    const accountBtn = document.querySelector('.nav-btn[data-section="account"]');
    if (currentUser) {
        accountBtn.textContent = `👤 ${currentUser.name}`;
    } else {
        accountBtn.textContent = `👤 Account`;
    }
}

function updateUserInStorage(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex(u => u.email === user.email);
    if (index !== -1) {
        users[index] = user;
    } else {
        users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const btn = input.parentElement.querySelector('.password-toggle-btn');
    
    if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    } else {
        input.type = 'password';
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    }
}

document.addEventListener('DOMContentLoaded', initApp);
