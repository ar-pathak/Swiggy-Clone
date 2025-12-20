# 🍔 Swiggy Clone

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://swiggy-clone-six-sigma.vercel.app)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-97.7%25-yellow)](https://github.com/ar-pathak/Swiggy-Clone)
[![Vite](https://img.shields.io/badge/Vite-Next%20Generation-646CFF)](https://vitejs.dev/)

A modern, fully responsive food delivery application clone inspired by Swiggy - India's leading online food ordering and delivery platform. Built with React.js and Vite, this project demonstrates advanced frontend development techniques and real-world application architecture.

🔗 **Live Demo:** [https://swiggy-clone-six-sigma.vercel.app](https://swiggy-clone-six-sigma.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Functionalities](#key-functionalities)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## 🌟 Overview

This Swiggy Clone is a feature-rich web application that replicates the core functionality of the popular food delivery platform. The project showcases modern React development practices, including component-based architecture, state management, API integration, and responsive design principles.

Built as a learning project, it demonstrates proficiency in creating production-ready web applications with clean code, optimized performance, and an intuitive user interface.

---

## ✨ Features

### 🏠 Home Page
- **Dynamic Restaurant Listing**: Browse through a wide variety of restaurants
- **Real-time Data**: Integration with Swiggy's Live API for up-to-date restaurant information
- **Search Functionality**: Quick search to find your favorite restaurants or cuisines
- **Filter & Sort Options**: Filter by ratings, delivery time, price, and cuisines
- **Location Detection**: Automatic location detection for personalized restaurant suggestions

### 🍽️ Restaurant Details
- **Detailed Menu View**: Browse complete menu with categories and items
- **Item Details**: View prices, descriptions, and images for each dish
- **Ratings & Reviews**: See customer ratings and reviews
- **Restaurant Information**: Opening hours, address, and contact details
- **Offers & Discounts**: View available offers and promotional deals

### 🛒 Cart Management
- **Add to Cart**: Seamlessly add items from different restaurants
- **Quantity Control**: Increase or decrease item quantities
- **Real-time Price Calculation**: Dynamic pricing with item count
- **Cart Summary**: View itemized bill with taxes and delivery charges
- **Clear Cart**: Option to remove all items at once

### 🎨 UI/UX Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views
- **Shimmer UI**: Elegant loading states for better user experience
- **Smooth Animations**: Fluid transitions and interactions
- **Modern Interface**: Clean, intuitive design following current trends
- **Toast Notifications**: User feedback for actions performed

### ⚡ Performance Optimizations
- **Code Splitting**: Lazy loading for improved initial load time
- **Image Optimization**: Compressed and optimized images
- **Efficient Rendering**: React optimization techniques
- **Fast Build System**: Powered by Vite for lightning-fast development

---

## 🛠️ Tech Stack

### Frontend Framework & Library
- **React.js** (v18+) - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool

### Styling & UI
- **CSS3** - Custom styling and animations
- **Responsive Design** - Mobile-first approach

### Development Tools
- **JavaScript (ES6+)** - Modern JavaScript features
- **npm** - Package manager
- **Git** - Version control

### Build & Deployment
- **Vite** - Fast build and development server
- **Vercel** - Deployment platform

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher) or **yarn** (v1.22 or higher)
- **Git** (v2.0 or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code recommended)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ar-pathak/Swiggy-Clone.git
cd Swiggy-Clone
```

### 2. Install Dependencies

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### 3. Set Up Environment Variables (Optional)

If your project requires API keys or environment-specific configurations, create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_base_url
VITE_API_KEY=your_api_key
```

**Note:** For development purposes and to avoid CORS issues when testing with Swiggy's Live API, you may need to use a CORS browser extension.

---

## 💻 Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

You should see output similar to:
```
VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
Swiggy-Clone/
│
├── public/                 # Static assets
│   └── favicon.ico
│
├── src/                    # Source files
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── RestaurantCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Menu.jsx
│   │   └── Shimmer.jsx
│   │
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── RestaurantDetails.jsx
│   │   └── About.jsx
│   │
│   ├── utils/             # Utility functions
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── mockData.js
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useRestaurant.js
│   │   └── useOnline.js
│   │
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
│
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.mjs        # Vite configuration
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

---

## 🎯 Key Functionalities

### 1. Restaurant Listing
- Displays a grid of restaurant cards with essential information
- Each card shows restaurant name, cuisine types, rating, delivery time, and cost
- Click on any restaurant card to view detailed menu

### 2. Search & Filter
- Real-time search functionality to find restaurants quickly
- Filter restaurants by cuisine type, rating, delivery time, or price range
- Sort options: relevance, delivery time, rating, cost (low to high/high to low)

### 3. Menu Display
- Category-wise menu organization
- Individual item cards with name, description, price, and image
- Vegetarian/Non-vegetarian indicators
- Bestseller tags on popular items

### 4. Cart Operations
- Add items to cart with single click
- Modify quantities directly from cart
- Remove individual items or clear entire cart
- View real-time price updates
- Bill summary with subtotal, taxes, and delivery charges

### 5. Responsive Behavior
- Desktop: Multi-column grid layout with sidebar
- Tablet: Adjusted grid with optimized spacing
- Mobile: Single column with touch-optimized interactions
- Hamburger menu for mobile navigation

---

## 🔌 API Integration

### Swiggy Live API

This project integrates with Swiggy's Live API to fetch real-time restaurant and menu data.

#### Handling CORS Issues

During development, you may encounter CORS (Cross-Origin Resource Sharing) issues. Here are solutions:

**Option 1: Use CORS Browser Extension (Development Only)**
1. Install a CORS extension for your browser:
   - Chrome: [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
   - Firefox: [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/)
2. Enable the extension while testing
3. **Important**: This is for development only, not for production

**Option 2: Use a CORS Proxy**
```javascript
const CORS_PROXY = "https://corsproxy.io/?";
const API_URL = "https://www.swiggy.com/api/...";
const finalURL = CORS_PROXY + encodeURIComponent(API_URL);
```

**Option 3: Backend Proxy (Recommended for Production)**
- Set up a backend server that makes the API calls
- Your frontend calls your backend, avoiding CORS issues

### API Endpoints Used

```javascript
// Restaurant List
GET https://www.swiggy.com/dapi/restaurants/list/v5?lat=YOUR_LAT&lng=YOUR_LNG

// Restaurant Menu
GET https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=YOUR_LAT&lng=YOUR_LNG&restaurantId=RESTAURANT_ID
```

---

## 📸 Screenshots

*Add your application screenshots here*

### Home Page
![Home Page Screenshot](#)

### Restaurant Menu
![Menu Screenshot](#)

### Cart Page
![Cart Screenshot](#)

---

## 🚧 Future Enhancements

- [ ] User authentication and profile management
- [ ] Order history and tracking
- [ ] Payment gateway integration
- [ ] Real-time location tracking
- [ ] User reviews and ratings
- [ ] Favorites/Wishlist functionality
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Advanced filtering options
- [ ] Push notifications for order updates
- [ ] Social media integration
- [ ] Referral program implementation

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button at the top right of this page
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Swiggy-Clone.git
   cd Swiggy-Clone
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add some amazing feature"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes

### Contribution Guidelines

- Follow the existing code structure and naming conventions
- Write clear, concise commit messages
- Update documentation for any new features
- Test your changes thoroughly before submitting
- Be respectful and constructive in discussions

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

### Disclaimer

This is a clone project created for **educational and learning purposes only**. It is not affiliated with, endorsed by, or connected to Swiggy in any way. All rights to the Swiggy brand, logo, and original designs belong to Bundl Technologies Private Limited (Swiggy).

This project should not be used for commercial purposes.

---

## 🙏 Acknowledgments

- **Swiggy** - For the inspiration and design reference
- **React Team** - For the amazing React library
- **Vite Team** - For the blazing fast build tool
- **Vercel** - For seamless deployment platform
- **Community Contributors** - For valuable feedback and contributions

---

## 📞 Contact

**AR Pathak**

- **GitHub**: [@ar-pathak](https://github.com/ar-pathak)
- **Project Repository**: [https://github.com/ar-pathak/Swiggy-Clone](https://github.com/ar-pathak/Swiggy-Clone)
- **Live Demo**: [https://swiggy-clone-six-sigma.vercel.app](https://swiggy-clone-six-sigma.vercel.app)

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/ar-pathak/Swiggy-Clone?style=social)
![GitHub Forks](https://img.shields.io/github/forks/ar-pathak/Swiggy-Clone?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/ar-pathak/Swiggy-Clone?style=social)

---

## 🎓 Learning Outcomes

By working on this project, you'll gain experience with:

- React.js component architecture and hooks
- State management in React applications
- API integration and handling asynchronous operations
- Responsive web design principles
- Modern build tools (Vite)
- Git version control and collaboration
- Deployment to production environments
- Performance optimization techniques

---

## 💡 Tips for Developers

1. **Start Simple**: Begin with basic features and gradually add complexity
2. **Component Reusability**: Create reusable components to avoid code duplication
3. **State Management**: Keep state management simple; use Context API or Redux for complex scenarios
4. **Performance**: Use React.memo, useMemo, and useCallback for optimization
5. **Testing**: Write tests for critical components and functions
6. **Accessibility**: Follow ARIA guidelines and semantic HTML
7. **Code Quality**: Use ESLint and Prettier for consistent code formatting

---

**⭐ If you found this project helpful, please consider giving it a star!**

**🍴 Fork it, customize it, and make it your own!**

---

Made with ❤️ by [AR Pathak](https://github.com/ar-pathak)