export const APP_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  PRODUCTS: "/products",
  GALLERY: "/gallery",
  CONTACT: "/contact",
};

export const SERVICE_TYPES = [
  { id: "xerox", name: "Xerox" },
  { id: "color-printing", name: "Color Printing" },
  { id: "bw-printing", name: "B&W Printing" },
  { id: "tshirt-printing", name: "T-Shirt Printing" },
  { id: "mug-printing", name: "Mug Printing" },
  { id: "photo-printing", name: "Photo Printing" },
  { id: "spiral-binding", name: "Spiral Binding" },
  { id: "lamination", name: "Lamination" },
  { id: "art-craft", name: "Art & Craft Supplies" },
];

export const API_ENDPOINTS = {
  SUBMIT_CONTACT: "/api/contact",
  TRACK_ORDER: (orderId: string) => `/api/orders/${orderId}`,
};

export const STORE_INFO = {
  name: "Creativity",
  subtitle: "Stationery & Print Hub",
  tagline: "Your Ideas, Perfectly Printed",
  phone: "+91 98319 83105",
  address: "15/4, Mohanlal Bahalwalla Rd, Belur, Bally, Howrah, West Bengal 711201",
  email: "support@creativity.com",
  mapCoords: { lat: 22.6377096, lng: 88.3423469 },
  hours: {
    weekday: "11:00 AM – 11:00 PM",
    saturday: "11:00 AM – 11:00 PM",
    sunday: "11:00 AM – 11:00 PM",
    holidays: "Closed",
  },
};
