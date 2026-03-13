# Developer Portfolio

A modern developer portfolio website for a Computer Science student aiming to become a Software Engineer. The project is built with React, Vite, TailwindCSS, Framer Motion, and React Icons, with a polished UI that is ready for deployment on Vercel or Netlify.

## Features

- Modern minimal design with responsive layouts
- Dark and light mode with persisted theme preference
- Sticky navbar with smooth scrolling
- Animated hero section with typing effect
- Skills, projects, achievements, and contact sections
- Scroll progress indicator and motion-based section reveals
- Project filtering and hover interactions
- EmailJS-ready contact form
- SEO-friendly metadata and Open Graph tags
- Deployment-ready structure for Vercel and Netlify

## Tech Stack

- React.js
- Vite
- TailwindCSS
- Framer Motion
- React Icons
- EmailJS

## Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## EmailJS Setup

To enable the contact form, create a `.env` file in the project root and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then make sure your EmailJS template expects:

- `from_name`
- `reply_to`
- `message`
- `to_name`

## Customization

- Replace placeholder social links in the components with your actual GitHub, LinkedIn, and Twitter URLs.
- Replace `public/resume.pdf` with your real resume before deployment.
- Update `src/data/projects.js` with your real project links and descriptions.
- Adjust the text across sections to match your achievements, education, and goals.
- Replace the placeholder contact email with your own email address.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the EmailJS environment variables in the Vercel dashboard.
4. Deploy. Vercel will detect the Vite configuration automatically.

### Netlify

1. Push the project to GitHub.
2. Create a new site from the repository in Netlify.
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add the EmailJS environment variables in the Netlify dashboard.
5. Deploy the site.

## SEO Notes

The project already includes:

- Page title
- Meta description
- Open Graph metadata
- Twitter card metadata
- Favicon

Update the production URL in `index.html` before launching.

