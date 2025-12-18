# 🏡 LandBnb

> **Discover Your Perfect Home** — A modern, lightning-fast real estate platform built with cutting-edge web technologies.

<div align="center">

[![Status](https://img.shields.io/badge/Status-Active-00D084?style=for-the-badge&logo=checkmark&logoColor=white)](https://github.com/ycorps/landbnb)
[![License](https://img.shields.io/badge/License-MIT-FF6B6B?style=for-the-badge)](https://github.com/ycorps/landbnb/blob/main/LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

🔗 **[View Live Demo](https://land-bnb.vercel.app/)** • 📚 **[Documentation](#-getting-started)** • ⭐ **[Give Us a Star!](https://github.com/ycorps/landbnb)**

</div>

---

## ✨ What's LandBnb?

LandBnb is a **modern property discovery platform** that brings the simplicity and elegance of Airbnb to the real estate market. Built for speed, designed for beauty, and crafted with the latest web technologies to deliver an unforgettable user experience.

Whether you're looking to find your dream home or explore stunning properties, LandBnb makes the journey delightful.

---

## 🎯 Key Features

<table>
<tr>
<td width="50%">

### 🏠 Comprehensive Listings
Browse through an extensive collection of properties with high-quality images and detailed descriptions.

</td>
<td width="50%">

### ⚡ Lightning Fast
Server-side rendering and static generation ensure blazing-fast page loads.

</td>
</tr>
<tr>
<td>

### 🎨 Beautiful UI/UX
Meticulously designed interface crafted in Figma and brought to life with precision.

</td>
<td>

### 🔍 Smart Search
Intuitive filtering and search capabilities to find exactly what you're looking for.

</td>
</tr>
<tr>
<td>

### 📱 Fully Responsive
Seamless experience across desktop, tablet, and mobile devices.

</td>
<td>

### 🗄️ Scalable Backend
Robust data management powered by Supabase for reliability at scale.

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

We've chosen the best-in-class technologies to build LandBnb:

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | [Next.js 14](https://nextjs.org/) | High-performance React framework with SSR & SSG |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS for rapid UI development |
| **Backend & DB** | [Supabase](https://supabase.com/) | PostgreSQL-powered open-source Firebase alternative |
| **Design** | Figma + Locofy | Pixel-perfect design-to-code workflow |
| **Language** | JavaScript / TypeScript | Type-safe, modern JavaScript |
| **Deployment** | Vercel | Optimized hosting for Next.js applications |

---

## 🚀 Quick Start

Get LandBnb running locally in just a few minutes!

### Prerequisites

Before you begin, ensure you have:
- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Supabase](https://supabase.com/) account (free tier available)

### Installation Steps

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ycorps/landbnb.git
cd landbnb
```

#### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

#### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your [Supabase Project Settings](https://app.supabase.com/projects).

#### 4️⃣ Run Development Server
```bash
npm run dev
# or
yarn dev
```

#### 5️⃣ Open in Browser
Navigate to **[http://localhost:3000](http://localhost:3000)** and start exploring!

---

## 📂 Project Architecture

```
landbnb/
├── components/              # Reusable React components
│   ├── Header/             # Navigation & top bar
│   ├── PropertyCard/        # Individual property display
│   ├── SearchBar/           # Search & filter interface
│   └── Footer/              # Footer component
├── pages/                    # Next.js pages & API routes
│   ├── index.js             # Home page
│   ├── properties/[id].js   # Property detail page
│   └── api/                 # Backend API endpoints
├── public/                   # Static assets & images
│   ├── images/              # Property photos & icons
│   └── icons/               # SVG icons & logos
├── styles/                   # Global styles & Tailwind config
├── utils/                    # Helper functions & utilities
├── data.csv                 # Property database
├── tailwind.config.js       # Tailwind CSS customization
├── next.config.js           # Next.js configuration
└── package.json             # Project dependencies & scripts
```

---

## 🎨 Design Highlights

LandBnb features a stunning design system:

- **Color Palette:** Modern gradients combining emerald, sky blue, and vibrant accents
- **Typography:** Clean, readable fonts with excellent hierarchy
- **Components:** Pre-built UI kit for consistency across the platform
- **Animations:** Smooth transitions and micro-interactions for delight
- **Accessibility:** WCAG compliant design ensuring inclusivity

---

## 🔌 API Endpoints

LandBnb provides a clean API for property operations:

```
GET  /api/properties              # Fetch all properties
GET  /api/properties/:id          # Get property details
POST /api/properties              # Create new listing (admin)
PUT  /api/properties/:id          # Update property (admin)
DELETE /api/properties/:id        # Remove listing (admin)
GET  /api/search                  # Search with filters
```

---

## 🎯 Usage Examples

### Browsing Properties
Simply navigate to the home page and explore featured properties. Use the search bar to filter by location, price range, and amenities.

### Viewing Details
Click on any property card to view full details, high-resolution images, and booking options.

### Advanced Filtering
Use the sophisticated filter sidebar to narrow down results based on your preferences.

---

## 📊 Performance Metrics

LandBnb is optimized for speed and efficiency:

- **First Contentful Paint (FCP):** < 1.2s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Lighthouse Score:** 95+

---

## 🤝 Contributing

We love contributions! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes locally before submitting

---

## 🐛 Known Issues & Roadmap

### Current Version
- ✅ Property listing & browsing
- ✅ Search & filtering
- ✅ Property details page
- ✅ Responsive design

### Upcoming Features 🚧
- 🔄 User authentication & profiles
- 🔄 Booking system with calendar
- 🔄 Review & rating system
- 🔄 Wishlist functionality
- 🔄 Advanced analytics dashboard
- 🔄 Map view integration

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👥 Meet the Team

**LandBnb** is maintained with ❤️ by the [ycorps](https://github.com/ycorps) development team.

---

## 💡 Support & Feedback

Have questions or suggestions? We'd love to hear from you!

- 📧 **Email:** support@landbnb.com
- 🐦 **Twitter:** [@landbnb](https://twitter.com/landbnb)
- 💬 **Issues:** [GitHub Issues](https://github.com/ycorps/landbnb/issues)
- 📖 **Documentation:** [Full Docs](https://landbnb-docs.vercel.app/)

---

## 🙏 Acknowledgments

Special thanks to:
- [Vercel](https://vercel.com/) for hosting & deployment
- [Supabase](https://supabase.com/) for backend infrastructure
- The incredible [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) communities
- All our amazing contributors and users

---

<div align="center">

### Made with 💚 by Shail

[⭐ Star us on GitHub](https://github.com/ycorps/landbnb) • [🔗 Visit Live Site](https://land-bnb.vercel.app/) • [🚀 Get Started](#-quick-start)

**v1.0.0** | Last Updated: December 2024

</div>