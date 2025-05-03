export const API_URLS = {
  BASE_URL: "https://media-assets.swiggy.com/swiggy/image/upload",
  IMAGES: {
    VEGGIES: "/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png",
    SUSHI: "/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png",
    FOOD_DELIVERY:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png",
    GROCERY:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png",
    DINEOUT:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png",
  },
};

export const APP_CONFIG = {
  LOGO_PATH:
    "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png",
  NAVIGATION: {
    CORPORATE: {
      label: "Swiggy Corporate",
      path: "/corporate",
    },
    PARTNER: {
      label: "Partner with Us",
      path: "/partner",
    },
  },
};

export const SERVICE_CARDS = {
  FOOD_DELIVERY: {
    title: "Food Delivery",
    description: "Order from your favorite restaurants",
    discount: "Up to 60% off",
    ctaText: "Order Now",
    image: API_URLS.IMAGES.FOOD_DELIVERY,
  },
  INSTAMART: {
    title: "Instamart",
    description: "Get groceries delivered in minutes",
    discount: "Up to 60% off",
    ctaText: "Shop Now",
    image: API_URLS.IMAGES.GROCERY,
  },
  DINEOUT: {
    title: "Dineout",
    description: "Discover amazing dining offers",
    discount: "Up to 50% off",
    ctaText: "Explore",
    image: API_URLS.IMAGES.DINEOUT,
  },
};
