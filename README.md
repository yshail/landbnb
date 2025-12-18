# 🌍 LANDBNB - Your Gateway to Unforgettable Journeys

> **Modern Travel Experience Platform | Discover • Book • Explore**

<div align="center">

![LANDBNB Badge](https://img.shields.io/badge/LANDBNB-Travel%20Booking-FF6B6B?style=flat-square&logo=airbnb)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Connected-13AA52?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=flat-square)

</div>

---

## 🎯 About LANDBNB

**LANDBNB** is a sophisticated travel booking platform designed to revolutionize how travelers discover and experience unique accommodations and services worldwide. Built with modern web technologies, LANDBNB connects travelers with exceptional homes, curated experiences, and premium travel services.

Whether you're looking for a cozy apartment in Paris, an adventure experience in Bali, or a professional tour guide in Rome, LANDBNB has it all!

---

## ✨ Key Features

### 🏠 **Homes & Accommodations**
- Browse thousands of verified properties worldwide
- Advanced filtering and search capabilities
- High-quality images and detailed descriptions
- Real-time availability checking
- Secure booking system

### 🎭 **Unique Experiences**
- Local cultural experiences led by expert guides
- Adventure activities and outdoor experiences
- Culinary tours and cooking classes
- Workshops and educational classes
- Authentic connections with local communities

### 🛎️ **Premium Services**
- Professional airport transfers
- Expert tour guide booking
- Personalized travel planning
- Hotel & accommodation curation
- Skip-the-line attraction tickets
- Professional photography services

### 🔍 **Powerful Search**
- Real-time search across all listings
- Multi-criteria filtering
- Intelligent search results
- Location-based discovery
- Smart recommendations

### 👤 **User Features**
- Secure user authentication
- Personalized profiles
- Booking history and management
- Wishlist functionality
- Community reviews and ratings
- Host dashboard for property management

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| **Frontend** | EJS, Bootstrap 5, HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | Passport.js, Local Strategy |
| **Image Storage** | Cloudinary |
| **Validation** | Joi |
| **File Upload** | Multer |
| **Session Management** | Express Session |
| **Notifications** | Connect Flash |

</div>

---

## 📋 Project Structure

```
landbnb/
├── 📁 views/
│   ├── 📁 listings/          # Accommodation listings pages
│   ├── 📁 experiences/       # Experiences showcase
│   ├── 📁 services/          # Services catalog
│   ├── 📁 users/             # Auth pages (login, signup)
│   ├── 📁 includes/          # Navbar, footer, flash messages
│   └── 📁 layouts/           # Base layout template
├── 📁 models/                # MongoDB schemas
│   ├── listing.js            # Listing model
│   ├── review.js             # Review model
│   └── user.js               # User model
├── 📁 controllers/           # Business logic
│   ├── listings.js           # Listing operations
│   ├── reviews.js            # Review operations
│   └── users.js              # User operations
├── 📁 routes/                # API routes
│   ├── listing.js
│   ├── review.js
│   ├── experiences.js
│   ├── services.js
│   └── user.js
├── 📁 public/
│   ├── 📁 css/               # Stylesheets
│   └── 📁 js/                # Client-side scripts
├── 📁 init/                  # Database initialization
├── 📁 utils/                 # Helper functions
├── app.js                    # Main application file
├── middleware.js             # Custom middleware
├── cloudConfig.js            # Cloud storage config
└── package.json              # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local or Cloud)
- **npm** or **yarn**
- **Cloudinary Account** (for image uploads)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/landbnb.git
   cd landbnb
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/Wanderlust
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   SESSION_SECRET=your_session_secret
   ```

4. **Initialize Database (Optional)**
   ```bash
   node init/index.js
   ```

5. **Start the Server**
   ```bash
   # Development with nodemon
   npm run dev
   
   # Production
   npm start
   ```

6. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## 📱 Features Showcase

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Intuitive navigation
- Beautiful card-based layouts
- Smooth animations and transitions
- Dark/Light theme support ready

### 🔐 **Security**
- Password hashing with bcrypt
- CSRF protection
- Session-based authentication
- Secure file uploads
- Input validation and sanitization

### 📊 **Advanced Features**
- Real-time search with filters
- User reviews and ratings system
- Property image galleries
- Booking management system
- User profile customization
- Host dashboard

---

## 🌟 Core Pages

| Page | Description |
|------|-------------|
| 🏠 **Home/Listings** | Browse all available properties |
| 🎭 **Experiences** | Discover unique local experiences |
| 🛎️ **Services** | Explore premium travel services |
| 🔍 **Search Results** | Find listings based on queries |
| 📝 **Listing Details** | Full property information with reviews |
| ➕ **Create Listing** | Host can add new properties |
| ✏️ **Edit Listing** | Modify property details |
| 👤 **User Profile** | Manage account information |
| 🔑 **Authentication** | Login/Signup functionality |

---

## 📚 API Endpoints

### Listings
- `GET /listings` - Get all listings
- `GET /listings/search` - Search listings
- `GET /listings/:id` - Get listing details
- `POST /listings` - Create new listing
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /signup` - Signup page
- `POST /signup` - Register user
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

---

## 🎯 Usage Examples

### Search for Accommodations
1. Navigate to the **Homes** section
2. Use the search bar to find listings
3. Filter by location, price, or amenities
4. View detailed information
5. Read reviews from other travelers
6. Book your stay

### Browse Experiences
1. Click on **Experiences** in the navbar
2. Explore various local activities
3. View host profiles and reviews
4. Book your desired experience
5. Enjoy unforgettable moments

### Find Services
1. Visit the **Services** section
2. Browse available travel services
3. Check professional credentials
4. Read customer testimonials
5. Book your preferred service

---

## 🔄 Data Models

### User
```javascript
{
  username: String (unique),
  email: String,
  password: String (hashed),
  profile: Object,
  listings: [ObjectId],
  bookings: [ObjectId]
}
```

### Listing
```javascript
{
  title: String,
  description: String,
  location: String,
  country: String,
  price: Number,
  image: { url: String, filename: String },
  reviews: [ObjectId],
  createdBy: ObjectId
}
```

### Review
```javascript
{
  comment: String,
  rating: Number (1-5),
  author: ObjectId,
  listing: ObjectId,
  createdAt: Date
}
```

---

## 🚀 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongo_uri
   heroku config:set CLOUDINARY_NAME=your_value
   # ... set other variables
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

### Deploy to Other Platforms
- **Vercel** - For frontend
- **Render** - Full-stack deployment
- **AWS** - Enterprise hosting
- **DigitalOcean** - VPS hosting

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 8080
lsof -i :8080

# Kill process
kill -9 <PID>
```

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access if using MongoDB Atlas

### Image Upload Failures
- Verify Cloudinary credentials
- Check API key and secret
- Ensure image file size is acceptable

### Authentication Issues
- Clear browser cookies
- Check session secret in `.env`
- Verify password hashing

---

## 📈 Future Enhancements

- ✅ Payment gateway integration (Stripe/Razorpay)
- ✅ Real-time notifications
- ✅ Advanced booking calendar
- ✅ Map integration (Google Maps)
- ✅ Multi-language support
- ✅ Mobile app (React Native)
- ✅ AI-powered recommendations
- ✅ Video property tours
- ✅ Social media integration
- ✅ Advanced analytics dashboard

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/landbnb.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name/Organization**
- 🌐 Website: [your-website.com](https://your-website.com)
- 💼 LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

## 📞 Contact & Support

- 📧 Email: support@landbnb.com
- 💬 Issues: [GitHub Issues](https://github.com/yourusername/landbnb/issues)
- 💭 Discussions: [GitHub Discussions](https://github.com/yourusername/landbnb/discussions)

---

## 🙏 Acknowledgments

- **Bootstrap** - Beautiful responsive design
- **MongoDB** - Powerful database
- **Express.js** - Flexible web framework
- **Passport.js** - Authentication made simple
- **Cloudinary** - Image hosting solution
- **Font Awesome** - Amazing icons

---

<div align="center">

### ⭐ If you found this helpful, please give us a star!

**Happy Traveling with LANDBNB!** 🌍✈️

[⬆ back to top](#-landbnb---your-gateway-to-unforgettable-journeys)

</div>
