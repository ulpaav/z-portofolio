# Troubleshooting Backend Issues

## Masalah yang Sering Terjadi

### 1. Data tidak muncul di domain
**Penyebab:** 
- API routes tidak terkonfigurasi dengan benar
- CORS issues
- Data tidak ter-export dengan benar

**Solusi:**
- Pastikan semua API files (`api/education.js`, `api/skills.js`, `api/project.js`) sudah memiliki data yang benar
- Periksa CORS headers di `utils/cors.js`
- Test API endpoints secara manual

### 2. Backend tidak berjalan
**Penyebab:**
- Dependencies tidak terinstall
- Port sudah digunakan
- Environment variables tidak set

**Solusi:**
```bash
# Install dependencies
npm run install:all

# Start backend
npm run dev:backend

# Test API
node test-api.js
```

### 3. Frontend tidak bisa connect ke backend
**Penyebab:**
- Base URL tidak dikonfigurasi
- Backend tidak berjalan
- CORS issues

**Solusi:**
- Pastikan backend berjalan di port 3000
- Periksa axios configuration di `frontend/src/main.js`
- Test dengan browser developer tools

## Cara Testing

### 1. Test Backend API
```bash
# Start backend
cd backend
npm run dev

# Test API endpoints
node ../test-api.js
```

### 2. Test Frontend
```bash
# Start frontend
cd frontend
npm run dev

# Buka browser dan periksa console untuk error
```

### 3. Test Production (Vercel)
```bash
# Deploy ke Vercel
vercel --prod

# Test API endpoints di production
curl https://your-domain.vercel.app/api/education
curl https://your-domain.vercel.app/api/skills
curl https://your-domain.vercel.app/api/project
```

## Debug Checklist

- [ ] Backend berjalan di port 3000
- [ ] API endpoints return data yang benar
- [ ] CORS headers sudah set
- [ ] Frontend axios configuration sudah benar
- [ ] Vercel deployment sudah update
- [ ] Environment variables sudah set (jika diperlukan)

## Common Error Messages

### "Cannot connect to API"
- Periksa apakah backend berjalan
- Periksa port yang digunakan
- Periksa firewall settings

### "CORS error"
- Periksa CORS headers di `utils/cors.js`
- Pastikan origin yang benar

### "Data is undefined"
- Periksa apakah data sudah ter-export dengan benar
- Periksa response format dari API

## Production Deployment

1. **Vercel Configuration:**
   - Pastikan `vercel.json` sudah benar
   - API routes sudah terkonfigurasi

2. **Environment Variables:**
   - Set `VITE_API_URL` untuk production
   - Pastikan base URL sesuai dengan domain

3. **Testing Production:**
   - Test semua API endpoints
   - Periksa console untuk errors
   - Test di berbagai browser 