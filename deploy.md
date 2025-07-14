# Deployment Guide untuk Vercel

## Langkah-langkah Deploy

### 1. Install Vercel CLI (jika belum)
```bash
npm install -g vercel
```

### 2. Login ke Vercel
```bash
vercel login
```

### 3. Deploy ke Production
```bash
vercel --prod
```

### 4. Test API Endpoints
Setelah deploy, test endpoint berikut:
- `https://your-domain.vercel.app/api/education`
- `https://your-domain.vercel.app/api/skills`
- `https://your-domain.vercel.app/api/project`

## Troubleshooting

### Jika API tidak berfungsi:
1. Cek Vercel dashboard → Functions → Logs
2. Pastikan file di folder `api/` sudah benar
3. Test endpoint secara manual di browser

### Jika frontend tidak load data:
1. Buka browser developer tools
2. Cek Network tab untuk error API calls
3. Cek Console tab untuk error JavaScript

## Struktur yang Benar untuk Vercel

```
my-porto/
├── api/                    # Vercel API Routes
│   ├── education.js
│   ├── skills.js
│   └── project.js
├── frontend/              # Vue.js frontend
│   ├── src/
│   └── package.json
├── utils/                 # Shared utilities
│   └── cors.js
└── vercel.json           # Vercel configuration
```

## Environment Variables (jika diperlukan)
Di Vercel dashboard, set environment variables jika diperlukan.

## Monitoring
- Cek Vercel dashboard untuk logs
- Monitor API performance
- Cek error rates 