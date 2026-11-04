export const nav = [
  { href: "#crafts", label: "Crafts" },
  { href: "#collections", label: "Collections" },
  { href: "#house", label: "The House" },
  { href: "#process", label: "Process" },
  { href: "#ahead", label: "Ahead" },
];

export const heroSlides = [
  {
    image: "/images/hero-brass.jpg",
    alt: "Engraved brass vases, ewers and an oil lamp arranged on a dark table",
    position: "50% 60%",
    eyebrow: "Moradabad brass · Available now",
    title: "Brass, as the brass city once made it.",
    text: "Hand-cast, hand-beaten and hand-engraved in Moradabad, the brass city. Serving bowls, water pots, lamps and kettles, finished to a standard the trade forgot.",
    primary: { href: "#pital", label: "See the brass" },
    secondary: { href: "#register", label: "Trade enquiries" },
  },
  {
    image: "/images/hero.jpg",
    alt: "A weaver bent over a handloom, working an ikat cloth",
    position: "60% 40%",
    eyebrow: "Many crafts · One signature · Infinite stories",
    title: "Objects made by named hands, in named places.",
    text: "Lokiom brings India's finest craft traditions under one roof. Blue pottery from Khurja. Stone inlay from Agra. Brocade from Varanasi. Chikankari from Lucknow.",
    primary: { href: "#collections", label: "View the collections" },
    secondary: { href: "#crafts", label: "Explore the crafts" },
  },
  {
    image: "/images/hero-maati.jpg",
    alt: "Rows of unglazed terracotta pots in low sunlight",
    position: "50% 50%",
    eyebrow: "Maati · First collection",
    title: "Clay remembers pressure. Stone remembers the tool.",
    text: "Fourteen pieces in Khurja blue pottery and Agra pietra dura. The register is now open for the first collection.",
    primary: { href: "#register", label: "Register interest" },
    secondary: { href: "#maati", label: "About Maati" },
  },
];

export const crafts = [
  {
    id: "moradabad",
    place: "Moradabad, Uttar Pradesh",
    name: "Brassware",
    image: "/images/brass/engraved-pot.jpg",
    alt: "An antique brass pot with a band of fine engraving",
    blurb:
      "Cast, beaten and engraved in the brass city. Functional objects of precise weight and proportion, available now.",
    collection: "Pital",
    href: "#pital",
  },
  {
    id: "khurja",
    place: "Khurja, Uttar Pradesh",
    name: "Blue pottery",
    image: "/images/khurja.jpg",
    alt: "Hand-painted blue and white ceramic plates laid out on a stone floor",
    blurb:
      "A quartz and glass body that cannot be thrown on a wheel. Every piece is hand-built and brushed with mineral cobalt.",
    collection: "Maati",
  },
  {
    id: "agra",
    place: "Agra, Uttar Pradesh",
    name: "Pietra dura",
    image: "/images/agra.jpg",
    alt: "White marble tomb in Agra covered in geometric stone inlay",
    blurb:
      "Semi-precious stones cut to slide into marble under fingertip pressure alone. The same craft that inlaid the Taj Mahal.",
    collection: "Maati",
  },
  {
    id: "varanasi",
    place: "Varanasi, Uttar Pradesh",
    name: "Banarasi brocade",
    image: "/images/varanasi.jpg",
    alt: "A handloom weaver seated at a loom in a whitewashed room",
    blurb:
      "Silk and silver zari woven on pit looms by the Ansari family, sixth generation, in the Madanpura quarter.",
    collection: "Taar",
  },
  {
    id: "lucknow",
    place: "Lucknow, Uttar Pradesh",
    name: "Chikankari",
    image: "/images/lucknow.jpg",
    alt: "Close-up of hands embroidering white thread on white cotton",
    blurb:
      "White-on-white embroidery in thirty-six stitch types, worked by a women's collective under a court-trained master.",
    collection: "Taar",
  },
];

export const collections = [
  {
    id: "pital",
    order: "Available now",
    name: "Pital",
    tagline: "Objects of brass",
    places: "Moradabad",
    image: "/images/brass/hammered.jpg",
    alt: "Stacks of hammered brass bowls and pots",
    position: "50% 100%",
    description:
      "Six pieces in hand-beaten and engraved brass: serving bowls, a water pot, a kettle, the coffee pair, a full thali set and decorative vases. Made to order in small batches.",
    facts: [
      ["Pieces", "6"],
      ["Makers", "1 workshop"],
      ["Lead time", "4 to 6 weeks"],
    ],
    status: "Available now",
  },
  {
    id: "maati",
    order: "First collection",
    name: "Maati",
    tagline: "Objects of earth",
    places: "Khurja and Agra",
    image: "/images/maati.jpg",
    alt: "Rows of unglazed terracotta pots in low sunlight",
    description:
      "Fourteen pieces in fired clay and inlaid marble: drinking vessels, serving bowls, place markers, trays and a centrepiece panel. Presented on raw linen in handmade Sanganer paper.",
    facts: [
      ["Pieces", "14"],
      ["Makers", "2 workshops"],
      ["Lead time", "12 to 16 weeks"],
    ],
    status: "Opening the register",
  },
  {
    id: "taar",
    order: "Second collection",
    name: "Taar",
    tagline: "Objects of thread",
    places: "Varanasi and Lucknow",
    image: "/images/varanasi.jpg",
    alt: "A handloom weaver seated at a loom in a whitewashed room",
    description:
      "Twelve pieces in brocaded silk and chikankari cotton: a wall panel, a table runner, cushion covers, napkins, placemats and a tablecloth. Delivered folded in handloom cloth, tied with raw silk cord.",
    facts: [
      ["Pieces", "12"],
      ["Makers", "2 workshops"],
      ["Lead time", "14 to 20 weeks"],
    ],
    status: "In sampling",
  },
];

export const beliefs = [
  {
    n: "01",
    title: "Objects carry memory",
    body: "Every piece is made by a named person, in a named place, by a method that can be traced to its origin.",
  },
  {
    n: "02",
    title: "Provenance is not decoration",
    body: "Artisan is a designation of technical expertise, not a marketing term. The story of origin is the value.",
  },
  {
    n: "03",
    title: "Luxury is attention, not expense",
    body: "A piece is expensive because it was difficult to make well, not because a logo was applied to it.",
  },
  {
    n: "04",
    title: "The maker receives what the work is worth",
    body: "No intermediaries, no negotiating down. Every relationship is direct and every price is a true price.",
  },
];

export const process = [
  {
    n: "1",
    title: "Commission",
    body: "Each collection is developed over at least six months of direct collaboration with the makers, through repeated rounds of sampling.",
  },
  {
    n: "2",
    title: "Make",
    body: "Pieces are made to order in small batches. Nothing is held in stock, and no two pieces are identical.",
  },
  {
    n: "3",
    title: "Deliver",
    body: "Each piece arrives with a single card naming the maker, the district, the tradition and the materials. Nothing else.",
  },
];

export const ahead = [
  { medium: "Glass", title: "Firozabad", body: "Developed with a master from the industry's earlier, finer period." },
  { medium: "Wood", title: "Varanasi lacquerware", body: "Turned and painted forms, seriously curated for the first time." },
  { medium: "Leather", title: "Kanpur saddlery", body: "Vegetable-tanned hide, hand-stitched by the workshops that once supplied the cavalry." },
];
