# 🌌 Myla Gangadhar — Personal Developer Portfolio

A stunning, highly-interactive, and performant personal portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and lightweight **CSS animations** for a buttery-smooth experience across all devices.

🔗 **Live Site:** [Deployed on Netlify / Vercel](#) *(update with your live URL)*

---

## ✨ Features & Architecture

- **Next.js App Router** — Server-side rendering for optimal SEO and fast page loads.
- **CSS Scroll-Reveal Animations** — Lightweight intersection-observer-based reveals replacing heavy animation libraries, ensuring zero rendering lag.
- **Premium Glassmorphism UI** — All cards use `backdrop-blur` frosted glass effects with neon accent glows for a luxury tech aesthetic.
- **Custom Animated Cursor** — Bespoke cursor that tracks mouse movement for an interactive feel.
- **Dynamic Background** — Subtle technical grid with a mouse-tracking spotlight glow.
- **Responsive Grid Layout** — Projects grid auto-centers lone cards on large screens for a polished look at every count.
- **Contact Form** — Ready for EmailJS integration to receive real-time messages.
- **Scroll-to-Top Button** — Smooth navigation utility for long-scroll pages.

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Animated typewriter intro with role highlights and CTA buttons |
| **About** | Personal summary with a 3D glassmorphism card layout |
| **Skills** | Tech stack displayed as styled tag pills |
| **Experience** | Timeline of roles and responsibilities |
| **Projects** | Featured + other project cards with GitHub links |
| **Education** | Academic background cards |
| **Contact** | EmailJS-ready contact form |

---

## 🚀 Projects Showcased

### ⭐ Featured
| Project | Tech | Link |
|---|---|---|
| **PrivAccess – Zero Knowledge RBAC** | Cryptography, ZKP, Python, Backend | [GitHub](https://github.com/abhiram-1508/PrivAccess-A-Zero-Knowledge-Framework-for-Role-Based-Access-Control) |
| **AI Rock Paper Scissors** | Python, OpenCV, MediaPipe, Computer Vision | [GitHub](https://github.com/Ganga07-code/AI-Rock-Paper-Scissors-Hand-Gesture) |

### 🔹 Other Projects
| Project | Tech | Link |
|---|---|---|
| **Time-Table Management System** | DBMS, SQL, Python, Backend | [GitHub](https://github.com/Ganga07-code/Time-Table-Management-System) |
| **Personal Portfolio Website** | HTML5, CSS3, JavaScript, Netlify | [GitHub](https://github.com/Ganga07-code/My_Main_Personal_Protfolio-) |
| **Credit Card Fraud Detection** | Python, Scikit-learn, Pandas, ML | [GitHub](https://github.com/Ganga07-code) |
| **Alzheimer's Prediction System** | Python, TensorFlow, Deep Learning, Medical AI | [GitHub](https://github.com/Ganga07-code/Alzhimers-Prediction) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript / React 18 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | CSS Intersection Observer (ScrollReveal) |
| **Icons** | Lucide React |
| **Type Animation** | react-type-animation |
| **Contact** | @emailjs/browser |

---

## 🏃 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Ganga07-code/My_Main_Personal_Protfolio-

# 2. Navigate into the project
cd MY-WEBSITE

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, CSS variables & animations
│   ├── layout.tsx        # Root layout with metadata & SEO
│   └── page.tsx          # Main page assembling all sections
└── components/
    ├── Navbar.tsx         # Sticky nav with smooth scroll links
    ├── Hero.tsx           # Landing section with typewriter effect
    ├── About.tsx          # About me card
    ├── Skills.tsx         # Tech skills tags
    ├── Experience.tsx     # Work experience timeline
    ├── Projects.tsx       # Featured & other project cards
    ├── Education.tsx      # Academic cards
    ├── Contact.tsx        # Contact form (EmailJS ready)
    ├── Footer.tsx         # Footer with social links
    ├── BackgroundEffects.tsx  # Grid & spotlight background
    ├── CustomCursor.tsx   # Animated custom cursor
    ├── ScrollReveal.tsx   # Scroll-triggered reveal hook
    └── ScrollToTop.tsx    # Floating scroll-to-top button
```

---

*Architected and engineered by **Myla Gangadhar**.*
