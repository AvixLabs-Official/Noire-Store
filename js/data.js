/**
 * NOIRÉ - Fictional Luxury E-Commerce Data Model
 */

const NOIRE_PRODUCTS = [
  {
    id: "prd-01",
    name: "AUREL LEATHER TOTE",
    slug: "aurel-leather-tote",
    category: "Bags",
    collection: "EVERYDAY",
    price: 8900,
    priceFormatted: "₹8,900",
    stock: 24,
    rating: 4.9,
    reviewCount: 38,
    badge: "BESTSELLER",
    colors: ["Black", "Espresso", "Sand"],
    sizes: ["One Size"],
    description: "Crafted from full-grain vegetable-tanned Italian leather with hand-finished edges.",
    longDescription: "The Aurel Leather Tote embodies quiet sophistication. Sculpted from full-grain Italian leather that patinas beautifully over time, it features a structured base, unlined suede interior, and an internal zipped pocket for valuables.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-02",
    name: "NOIR CHRONO",
    slug: "noir-chrono",
    category: "Watches",
    collection: "PERSONAL",
    price: 14500,
    priceFormatted: "₹14,500",
    stock: 12,
    rating: 4.8,
    reviewCount: 22,
    badge: "NEW",
    colors: ["Black", "Silver", "Gold"],
    sizes: ["40mm"],
    description: "Minimalist chronograph featuring a matte black dial and Japanese quartz movement.",
    longDescription: "Engineered with architectural precision, the Noir Chrono features a brushed stainless steel case, anti-reflective sapphire crystal glass, and a supple black calfskin leather strap.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-03",
    name: "FORMA CARD HOLDER",
    slug: "forma-card-holder",
    category: "Accessories",
    collection: "EVERYDAY",
    price: 2400,
    priceFormatted: "₹2,400",
    stock: 45,
    rating: 4.9,
    reviewCount: 54,
    badge: "POPULAR",
    colors: ["Black", "Olive", "Stone"],
    sizes: ["One Size"],
    description: "Ultra-slim card sleeve built with four slots and a central bill compartment.",
    longDescription: "Precision-stitched from smooth French calfskin, the Forma Card Holder is designed to carry your daily essentials without bulk.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-04",
    name: "ARC WEEKENDER",
    slug: "arc-weekender",
    category: "Bags",
    collection: "EVERYDAY",
    price: 11800,
    priceFormatted: "₹11,800",
    stock: 8,
    rating: 5.0,
    reviewCount: 19,
    badge: "LIMITED",
    colors: ["Olive", "Espresso", "Black"],
    sizes: ["Large"],
    description: "Heavyweight organic canvas holdall trimmed with full-grain leather handles.",
    longDescription: "The Arc Weekender is built for short escapes and quiet getaways. Water-repellent waxed canvas body with reinforced brass hardware.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-05",
    name: "MONO FRAME GLASSES",
    slug: "mono-frame-glasses",
    category: "Accessories",
    collection: "PERSONAL",
    price: 4200,
    priceFormatted: "₹4,200",
    stock: 18,
    rating: 4.7,
    reviewCount: 16,
    badge: "NEW",
    colors: ["Black", "Sand"],
    sizes: ["Medium"],
    description: "Handcrafted Mazzucchelli acetate eyewear with prescription-ready clear lenses.",
    longDescription: "Timeless optical frame featuring hand-polished Japanese acetate and 5-barrel custom hinges.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-06",
    name: "SOLACE OVERSHIRT",
    slug: "solace-overshirt",
    category: "Apparel",
    collection: "PERSONAL",
    price: 6500,
    priceFormatted: "₹6,500",
    stock: 15,
    rating: 4.8,
    reviewCount: 29,
    badge: "POPULAR",
    colors: ["Sand", "Olive", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Heavyweight organic cotton twill overshirt with horn buttons.",
    longDescription: "Relaxed tailored cut overshirt crafted from 100% organic cotton twill. Perfect for mid-season layering.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-07",
    name: "STUDIO CERAMIC SET",
    slug: "studio-ceramic-set",
    category: "Home",
    collection: "HOME",
    price: 3200,
    priceFormatted: "₹3,200",
    stock: 30,
    rating: 4.9,
    reviewCount: 42,
    badge: "BESTSELLER",
    colors: ["Stone", "Sand"],
    sizes: ["Set of 2"],
    description: "Hand-thrown stoneware mugs featuring a tactile matte glaze finish.",
    longDescription: "Crafted in small studio batches, each mug features unique subtle variations in tone and texture.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-08",
    name: "LINE DESK LAMP",
    slug: "line-desk-lamp",
    category: "Home",
    collection: "HOME",
    price: 5800,
    priceFormatted: "₹5,800",
    stock: 14,
    rating: 4.8,
    reviewCount: 18,
    badge: "NEW",
    colors: ["Black", "Brass"],
    sizes: ["One Size"],
    description: "Anodized aluminum task light with touch-dimmable warm LED illumination.",
    longDescription: "Minimalist task lamp offering 3000K warm ambient glow with a 360-degree rotating head arm.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-09",
    name: "ATLAS BACKPACK",
    slug: "atlas-backpack",
    category: "Bags",
    collection: "EVERYDAY",
    price: 9600,
    priceFormatted: "₹9,600",
    stock: 20,
    rating: 4.9,
    reviewCount: 31,
    badge: "POPULAR",
    colors: ["Black", "Olive"],
    sizes: ["16-inch Laptop"],
    description: "Weatherproof recycled nylon daypack with padded laptop sleeve.",
    longDescription: "Designed for modern commuters, featuring a dedicated 16-inch laptop compartment and hidden passport pocket.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-10",
    name: "FORMA WATCH",
    slug: "forma-watch",
    category: "Watches",
    collection: "PERSONAL",
    price: 12900,
    priceFormatted: "₹12,900",
    stock: 10,
    rating: 4.7,
    reviewCount: 14,
    badge: "NEW",
    colors: ["Silver", "Black"],
    sizes: [ "38mm" ],
    description: "Clean dress watch featuring an off-white sunray dial and mesh bracelet.",
    longDescription: "Refined aesthetic for evening and everyday wear. Slim 7mm stainless steel case.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-11",
    name: "NOVA CHAIN",
    slug: "nova-chain",
    category: "Jewelry",
    collection: "PERSONAL",
    price: 3800,
    priceFormatted: "₹3,800",
    stock: 25,
    rating: 4.9,
    reviewCount: 37,
    badge: "BESTSELLER",
    colors: ["Gold", "Silver"],
    sizes: ["50cm"],
    description: "Recycled sterling silver box chain plated in 18k solid gold.",
    longDescription: "Subtle daily jewelry piece designed for standalone wear or delicate pendant pairing.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1611591475179-670d4f40f099?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-12",
    name: "OBJECT 01 TRAY",
    slug: "object-01-tray",
    category: "Home",
    collection: "HOME",
    price: 2100,
    priceFormatted: "₹2,100",
    stock: 35,
    rating: 4.8,
    reviewCount: 26,
    badge: "POPULAR",
    colors: ["Black", "Stone"],
    sizes: ["Medium"],
    description: "Cast concrete catch-all tray for keys, watches, and desk accessories.",
    longDescription: "Sealed with non-toxic natural oil finish. Felt padded bottom protects tabletop surfaces.",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-13",
    name: "EVERYDAY WALLET",
    slug: "everyday-wallet",
    category: "Accessories",
    collection: "EVERYDAY",
    price: 3100,
    priceFormatted: "₹3,100",
    stock: 22,
    rating: 4.8,
    reviewCount: 20,
    badge: "POPULAR",
    colors: ["Espresso", "Black"],
    sizes: ["Bifold"],
    description: "Classic bifold wallet with 6 card slots and full note divider.",
    longDescription: "Hand-stitched full grain leather bifold. Slim profile engineered for pocket comfort.",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-14",
    name: "LINE KNIT SWEATER",
    slug: "line-knit-sweater",
    category: "Apparel",
    collection: "PERSONAL",
    price: 5200,
    priceFormatted: "₹5,200",
    stock: 16,
    rating: 4.9,
    reviewCount: 33,
    badge: "NEW",
    colors: ["Stone", "Black"],
    sizes: ["S", "M", "L"],
    description: "Fine gauge extra-fine merino wool crewneck sweater.",
    longDescription: "Soft, breathable 100% Australian merino wool knit with ribbed cuffs and hem.",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-15",
    name: "AUREL CROSSBODY",
    slug: "aurel-crossbody",
    category: "Bags",
    collection: "EVERYDAY",
    price: 7400,
    priceFormatted: "₹7,400",
    stock: 19,
    rating: 4.8,
    reviewCount: 27,
    badge: "BESTSELLER",
    colors: ["Black", "Sand"],
    sizes: ["One Size"],
    description: "Compact leather shoulder pouch with magnetic flap closure.",
    longDescription: "Sleek architectural form with adjustable shoulder strap and interior card sleeve.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "prd-16",
    name: "ORBIT RING",
    slug: "orbit-ring",
    category: "Jewelry",
    collection: "PERSONAL",
    price: 2900,
    priceFormatted: "₹2,900",
    stock: 28,
    rating: 4.7,
    reviewCount: 19,
    badge: "POPULAR",
    colors: ["Silver", "Gold"],
    sizes: ["7", "8", "9", "10"],
    description: "Minimalist band ring with a subtle bevel edge detail.",
    longDescription: "Hand-finished 925 sterling silver band with comfortable interior contouring.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const NOIRE_COUPONS = {
  "NOIRE10": { type: "percent", value: 10, label: "10% OFF" },
  "WELCOME15": { type: "percent", value: 15, label: "15% OFF" },
  "FIRSTORDER": { type: "flat", value: 500, label: "₹500 OFF" }
};
