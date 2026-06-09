# 🌐 Ishika — Developer Portfolio

Personal portfolio site with a Django REST backend and a React frontend, organized as a monorepo.

---

## 📂 Structure

```text
Ishika-Portfolio/
├── backend/
│   ├── api/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   └── resume.pdf
│   ├── src/
│   ├── .env.example
│   ├── tailwind.config.js
│   └── vite.config.js
├── scripts/
│   └── dev.js
└── package.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Django, Django REST Framework |
| Frontend | React, Vite, TailwindCSS |
| Contact Form | EmailJS |

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/portfolio` | Portfolio data |

---

## ⚙️ Setup

Install dependencies:

```bash
# Frontend
cd frontend && npm install

# Backend
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

Contact form — create `frontend/.env` from `frontend/.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🚀 Running

```bash
# Both together (from repo root)
npm run dev

# Separately
npm run dev:frontend
npm run dev:backend
```

Other commands:

```bash
npm run build              # Build frontend
npm run preview            # Preview frontend build
npm run migrate:backend    # Run Django migrations
npm run test:backend       # Run backend tests
```

---

## 📝 Notes

- Profile links point to real GitHub, LinkedIn, and LeetCode profiles
- Phone number not displayed publicly
- Downloadable resume at `frontend/public/resume.pdf`
