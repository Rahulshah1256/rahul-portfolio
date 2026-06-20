<p align="center" width="100%">
    <img height="100" src="https://github.com/Rahulshah1256/rahul-portfolio">
</p>

<h1 align="center">Rahul Kumar - Software Engineer Portfolio</h1>

<p align="center">
  <strong>A modern, responsive portfolio showcasing Java development expertise, microservices architecture, and cloud-native solutions</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js" alt="Next.js 16.0.1">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React 19.2.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
</p>

<p align="center">
  <a href="#about-portfolio">About</a> •
  <a href="#features-sparkles">Features</a> •
  <a href="#recent-updates">Recent Updates</a> •
  <a href="#installation-arrow_down">Installation</a> •
  <a href="#usage-joystick">Usage</a> •
  <a href="#deployment-rocket">Deployment</a>
</p>

---

## About Portfolio

Professional portfolio of **Rahul Kumar**, a Software Engineer at **Lloyds Technology Centre** with 3+ years of experience in building scalable backend solutions, microservices architecture, and cloud-native applications. This portfolio showcases expertise in:

- **Backend Development**: Java (17+), Spring Boot, Spring Kafka, Microservices
- **Cloud Architecture**: GCP, Kubernetes, Docker, CI/CD with Jenkins
- **Performance Optimization**: Database query optimization (20% improvement), System design
- **Full Stack**: React, Angular, Spring MVC, RESTful APIs
- **Infrastructure**: Cloud operations, monitoring, and deployment automation

---

## Features :sparkles:

### Core Portfolio Features
- ✅ **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- ✅ **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ✅ **SEO Optimized**: Enhanced search engine visibility with Next.js metadata API
- ✅ **Blazing Fast**: Next.js 16 server components and streaming for performance
- ✅ **Interactive UI**: Smooth animations with Lottie and modern CSS effects
- ✅ **Dark Theme**: Beautiful gradient design with professional aesthetics

### Portfolio Sections Enhanced
- ✅ **Hero Section**: Eye-catching introduction with social links (GitHub, LinkedIn, LeetCode)
- ✅ **About Me**: Comprehensive professional summary highlighting technical expertise
- ✅ **Experience**: Detailed job history with project-based achievements and quantified impact
  - Click to Pay Project (Spring migration, event-driven architecture)
  - Push to Wallet Project (API design, performance optimization)
  - Infrastructure & Cloud Operations highlights
- ✅ **Skills**: Modern interactive tab-based skills showcase with dynamic categorization
  - Programming Languages, Frameworks, Web Dev Tools, Cloud & Database, Familiar
  - Category-specific color themes with hover animations
- ✅ **Education**: Academic background with CGPA scores
  - MCA in Computer Science and IT (Jain University, 8.9/10)
  - BCA in Computer Applications (Acharya Institute, 9.06/10)
- ✅ **Projects**: Portfolio projects with full tech stack details
- ✅ **Contact Form**: Get in touch functionality with email/Telegram integration

---

## Recent Updates

### 🎓 Enhanced Experience Section
- Added detailed project information with descriptions and achievements
- Project-based organization showing Click to Pay and Push to Wallet initiatives
- Quantified impact metrics (20% performance improvement, 27% efficiency boost)
- Infrastructure and Cloud Operations section highlighting GCP, Jenkins, Kubernetes expertise

### 🛠️ Modern Skills Section Redesign
- **Interactive Category Tabs**: Switch between 5 skill categories with smooth transitions
- **Dynamic Color Theming**: Each category has unique color scheme (Blue/Purple/Pink/Cyan/Green)
- **Responsive Grid Layout**: Skills display in modern card-based grid instead of marquee
- **Hover Animations**: Scale, glow, and accent line animations on interaction
- **Statistics Dashboard**: Display total count of skills per category
- **Glassmorphism Design**: Frosted glass effect with backdrop blur for modern aesthetic

### 📚 Comprehensive Education Section
- Updated with precise dates and institutions
- Added CGPA scores (8.9/10 for MCA, 9.06/10 for BCA)
- Preserved Higher Secondary and Senior Secondary education records
- Enhanced CGPA display in education cards

### 👤 Professional Bio Update
- Comprehensive "Who Am I" description highlighting:
  - 3+ years of professional experience
  - Specialization in Java and Spring Boot
  - Cloud architecture expertise (GCP, Kubernetes, Docker)
  - Performance optimization track record
  - Passion for problem-solving and clean code
- Updated designation to "Software Engineer | Java Developer"

---

## Tech Stack :computer:

| Category          | Technology       | Purpose                                          |
|-------------------|------------------|--------------------------------------------------|
| **Framework**     | Next.js 16       | React framework with App Router & Server Components |
| **UI Library**    | React 19         | Modern UI with latest React features             |
| **Styling**       | Tailwind CSS 4   | Utility-first CSS framework                      |
| **CSS**           | SASS             | CSS preprocessing                               |
| **Animations**    | Lottie React     | Lightweight, scalable animations                 |
| **Icons**         | React Icons      | Popular icon library integration                 |
| **Communication** | Nodemailer       | Email sending functionality                      |
| **API Calls**     | Axios            | HTTP client for external APIs                    |
| **Form Handling** | React Hook Form  | Efficient form state management                  |
| **Notifications** | React Toastify   | Beautiful toast notifications                    |

---

## Installation :arrow_down:

### Prerequisites

Ensure you have the following installed:

```bash
# Node.js 18.17+ (or 20+ recommended)
node --version

# Git
git --version

# pnpm (recommended) or npm
pnpm --version
```

### Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/Rahulshah1256/rahul-portfolio.git
   cd rahul-portfolio
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   # Visit http://localhost:3000
   ```

---

## Usage :joystick:

### Customizing with Your Data

All portfolio content is in `utils/data/` directory:

#### 1. Update Personal Information
```javascript
// utils/data/personal-data.js
export const personalData = {
  name: "Your Name",
  designation: "Software Engineer | Java Developer",
  description: "Your professional summary...",
  email: "your.email@gmail.com",
  phone: "+91-XXXXXXXXXX",
  // ... social links, resume URL, etc.
};
```

#### 2. Update Experience
```javascript
// utils/data/experience.js
export const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Company Name - City",
    duration: "(Date - Present)",
    projects: [
      {
        name: "Project Name",
        description: "Brief description",
        achievements: ["Achievement 1", "Achievement 2"]
      }
    ],
    additionalAchievements: ["Achievement 1", "Achievement 2"]
  }
  // ... more positions
];
```

#### 3. Update Technical Skills
```javascript
// utils/data/skills.js
export const skillsData = {
  'Programming Languages': ['Java', 'JavaScript', 'HTML', 'CSS'],
  'Frameworks': ['Spring Boot', 'React', 'Angular'],
  'Web Dev Tools': ['VSCode', 'Jenkins', 'Git'],
  'Cloud & Database': ['GCP', 'PostgreSQL', 'Docker'],
  'Familiar': ['Kubernetes', 'CI/CD', 'Design Patterns']
};
```

#### 4. Update Education
```javascript
// utils/data/educations.js
export const educations = [
  {
    id: 1,
    title: "Degree Name",
    duration: "Start Date - End Date",
    institution: "University Name, City",
    cgpa: "GPA/10"
  }
  // ... more education entries
];
```

### Environment Variables
```env
# Google Analytics (Optional)
NEXT_PUBLIC_GTM=GTM-XXXXXXX

# Portfolio URL
NEXT_PUBLIC_APP_URL=https://your-portfolio.com

# Email Notifications (Optional)
GMAIL_PASSKEY=your-gmail-app-password
EMAIL_ADDRESS=your-email@gmail.com

# Telegram Notifications (Optional)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

---

## Deployment :rocket:

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import repository
4. Add environment variables
5. Deploy (automatic on push to main)

### Deploy to Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy

### Docker Deployment

```bash
# Development
docker build -t rahul-portfolio:dev -f Dockerfile.dev .
docker run -p 3000:3000 rahul-portfolio:dev

# Production
docker build -t rahul-portfolio:prod -f Dockerfile.prod .
docker run -p 3000:3000 rahul-portfolio:prod

# Docker Compose
docker-compose up -d
```

---

## Data Files Structure :file_folder:

```
utils/data/
├── personal-data.js      # Personal info, contact details, social links
├── experience.js         # Work experience and projects
├── educations.js         # Academic background
├── skills.js             # Technical skills by category
├── projects-data.js      # Portfolio projects
├── contactsData.js       # Contact form configuration
└── time-converter.js     # Helper utilities
```

---

## Troubleshooting :wrench:

**Q: Build errors with react-icons?**
```bash
# Ensure correct icon names are used
# Use: GiGraduateCap (not GiGraduationCap)
```

**Q: Skills section not showing updates?**
```bash
# Restart dev server after updating skills.js
# Clear browser cache
pnpm dev  # restart
```

**Q: Images not displaying?**
```bash
# Place images in public/ directory
# Use paths starting with /
# Example: src="/profile.jpg"
```

---

## Key Features Highlights

### Interactive Skills Section
- 5 organized categories with color-coded tabs
- Responsive grid layout (2-5 columns based on screen size)
- Hover animations and glowing effects
- Dedicated category statistics
- Modern glassmorphism design

### Detailed Experience Display
- Project-based organization
- Quantified achievements and metrics
- Infrastructure/operations section
- Clean, readable card layout

### Professional Bio
- Comprehensive description highlighting expertise
- Emphasis on technical skills and achievements
- Career trajectory and specializations
- Passion statement for hiring managers

---

## File Structure

```
rahul-portfolio/
├── app/
│   ├── components/
│   │   └── homepage/
│   │       ├── about/
│   │       ├── experience/
│   │       ├── skills/
│   │       ├── education/
│   │       ├── hero-section/
│   │       └── projects/
│   ├── api/
│   ├── layout.js
│   └── page.js
├── utils/
│   ├── data/
│   │   ├── personal-data.js
│   │   ├── experience.js
│   │   ├── educations.js
│   │   ├── skills.js
│   │   └── projects-data.js
│   └── skill-image.js
├── public/
│   ├── rahuldp.jpg        # Profile image
│   └── image/
└── package.json
```

---

## License :page_with_curl:

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## Author

**Rahul Kumar** - Software Engineer @ Lloyds Technology Centre, Hyderabad

- 📧 **Email**: rahul.kumar800745@gmail.com
- 💼 **LinkedIn**: [rahul-kumar-9066bb216](https://www.linkedin.com/in/rahul-kumar-9066bb216/)
- 🐙 **GitHub**: [Rahulshah1256](https://github.com/Rahulshah1256)
- 🧮 **LeetCode**: [Rahulkumar1256](https://leetcode.com/u/Rahulkumar1256/)
- 📱 **Phone**: +91-9089496572

### Professional Background

- **Current Role**: Software Engineer at Lloyds Technology Centre
- **Experience**: 3+ years in Java development and microservices architecture
- **Specialization**: Spring Boot, Event-driven systems, Cloud-native solutions, GCP
- **Education**: MCA in Computer Science and IT (Jain University) - 8.9/10 CGPA

---

## Contributing

This is a personal portfolio project. However, if you find improvements or bugs:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Commit changes: `git commit -m 'Add improvement'`
4. Push to branch: `git push origin feature/improvement`
5. Open a Pull Request

---

## Support & Feedback

Have questions or suggestions? Feel free to reach out:

- 📨 Email: rahul.kumar800745@gmail.com
- 💬 LinkedIn: [Connect with me](https://www.linkedin.com/in/rahul-kumar-9066bb216/)
- 🐙 GitHub: [Follow my work](https://github.com/Rahulshah1256)

⭐ If you found this portfolio useful or inspiring, please star the repository!

---

<p align="center">
  Made with ❤️ by Rahul Kumar
</p>

<p align="center">
  Built with <strong>Next.js 16</strong> | <strong>React 19</strong> | <strong>Tailwind CSS 4</strong>
</p>

<p align="center">
  <a href="https://github.com/Rahulshah1256/rahul-portfolio">Back to Repository</a>
</p>

