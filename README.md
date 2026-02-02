# Procontractorfinal

# ProContractors Miami - Website

A modern, high-performance React website for ProContractors, a licensed general contractor serving South Florida with kitchen remodeling, bathroom renovations, home additions, and commercial construction services.

![ProContractors](public/og-image.avif)

## 🚀 Tech Stack

- **React 19** - Latest React with hooks and performance optimizations
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing
- **Framer Motion** - Smooth animations
- **Lenis** - Smooth scrolling
- **EmailJS** - Contact form handling
- **React Helmet Async** - SEO meta tags

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher) or **yarn**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ProContractors.git
   cd ProContractors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run optimize-images` | Optimize images using Sharp |
| `npm run compress-portfolio` | Compress portfolio images |

## 🏗️ Project Structure

```
ProContractors/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── NewPortfolio/  # Portfolio images by category
│   │   └── Slider1/       # Hero slider images
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ...
│   ├── config/            # Configuration files
│   ├── data/              # Static data and content
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── services/      # Service detail pages
│   │   └── locations/     # Location-based pages
│   ├── styles/            # CSS and theme files
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Performance Optimized** - Lazy loading, code splitting, memoization
- **SEO Ready** - Meta tags, structured data, canonical URLs
- **Smooth Animations** - GPU-accelerated transitions
- **Contact Form** - EmailJS integration for lead capture
- **Google Reviews** - Elfsight widget integration
- **WhatsApp Chat** - Direct messaging widget
- **Portfolio Gallery** - Filterable project showcase

## 🌐 Pages

- **Home** (`/`) - Landing page with hero, services, testimonials
- **About** (`/about`) - Company story and team profiles
- **Services** (`/services`) - All services overview
- **Portfolio** (`/portfolio`) - Project gallery with filters
- **Contact** (`/contact`) - Contact form and information
- **FAQ** (`/faq`) - Frequently asked questions
- **Financing** (`/financing`) - Financing options
- **Careers** (`/careers`) - Job opportunities

### Service Pages
- Kitchen Renovations (`/services/kitchen-renovations`)
- Bathroom Remodels (`/services/bathroom-remodels`)
- Home Remodeling (`/services/home-remodeling`)
- Home Additions (`/services/home-additions`)
- Design Build (`/services/design-build`)
- New Construction (`/services/new-construction`)

## ⚙️ Configuration

### EmailJS Setup
To enable the contact form, configure EmailJS:

1. Create an account at [emailjs.com](https://emailjs.com)
2. Create an email service and template
3. Update the EmailJS credentials in `src/hooks/useContactForm.js`

### Elfsight Widgets
The site uses Elfsight for:
- Google Reviews widget
- WhatsApp chat widget

Update widget IDs in `index.html` and component files as needed.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder.

### Deploy to Firebase
```bash
npm run build
firebase deploy
```

### Deploy to Netlify/Vercel
Connect your GitHub repository and set:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## 🔧 Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

**ProContractors Miami**
- Phone: 786-789-0097
- Website: [procontractorsmiami.com](https://procontractorsmiami.com)
- Location: Miami-Dade & Broward County, Florida

---

Built with ❤️ by the ProContractors team
