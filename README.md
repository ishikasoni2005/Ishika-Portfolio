# Ishika Portfolio

This repository is organized as a small monorepo with separate `frontend/` and `backend/` folders.


## Structure

```text
Ishika-Portfolio/
├── backend/
│   ├── api/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── scripts/
│   └── dev.js
├── package.json
└── README.md
```

## What Runs Where
- `frontend/`: React + Vite + Tailwind portfolio UI
- `backend/`: Django API with `GET /api/health` and `GET /api/portfolio`
- `scripts/dev.js`: starts frontend and backend together from the repo root

## Local Development

Install frontend dependencies if needed:

```bash
cd frontend
npm install
```

Install backend dependencies if needed:

```bash
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

Run both apps from the root:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev:frontend
npm run dev:backend
```

Build the frontend:

```bash
npm run build
```

Preview the frontend build:

```bash
npm run preview
```

Run Django migrations when needed:

```bash
npm run migrate:backend
```

Run backend tests:

```bash
npm run test:backend
```

## Environment

To enable the contact form, create `frontend/.env` from `frontend/.env.example` and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Notes

- Public profile and project links point to Ishika's real GitHub, LinkedIn, and LeetCode profiles.
- The website does not show the phone number.
- The downloadable resume lives at `frontend/public/resume.pdf`.
