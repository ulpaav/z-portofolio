### NAMA : ZULFA MEYDITA RAHMA
### NIM : 23.11.5512
### KELAS : 23 IF 03


# 🎨 Portfolio Website

Ini adalah project website portfolio untuk saya sebagai mahasiswa Informatika, yang menampilkan riwayat pendidikan, project, dan keahlian yang saya miliki. 
Dibangun menggunakan **SPA** modern berbasis **Vue.js 3**, dengan backend **Express.js** + database **PostgreSQL** di **Neon**, *deployed* serverless via **Vercel**.


## 🚀 Fitur Utama

- SPA (Single Page Application) dengan Vue 3
- Routing halaman menggunakan Vue Router
- Animasi scroll dengan AOS
- Styling modern dengan Tailwind CSS
- Ikon profesional dengan Font Awesome
- Support animasi delay (`tailwindcss-animation-delay`)
- API custom (Node.js + Express)  
- DB Neon PostgreSQL — connection pooling ready  
- Deploy serverless di Vercel dengan rewrites & headers custom  
- Fully responsive + SEO ready
- Linter & Formatter otomatis (ESLint + Prettier)


- ## 📦 Tech Stack
  
Framework       | [Vue.js 3.5.17](https://vuejs.org/)                                                     | Frontend SPA utama
Router          | [Vue Router 4.5.1](https://router.vuejs.org/)                                           | Routing antar halaman
Build Tool      | [Vite 7](https://vitejs.dev/)                                                           | Dev server & bundler cepat
CSS Framework   | [Tailwind CSS 3.4.17](https://tailwindcss.com/)                                         | Styling utility-first
Icon Library    | [Font Awesome 6](https://fontawesome.com/)                                              | Library ikon profesional
HTTP Client     | [Axios 1.10.0](https://axios-http.com/)                                                 | Fetch data ke API backend
Scroll Animasi  | [AOS 2.3.4](https://michalsnik.github.io/aos/)                                          | Animasi scroll
Utility Plugin  | [tailwindcss-animation-delay](https://github.com/jenselme/tailwindcss-animation-delay)  | Delay animasi kustom
Developer Tools | vite-plugin-vue-devtools                                                                | Devtools Vue di Vite
Lint & Format	  | ESLint 9, Prettier 3.5	                                                                | Linter & formatter otomatis
Backend	        | Node.js 18 + Express 5	                                                                | Server API custom
Database	      | Neon PostgreSQL	                                                                        | DB serverless + pooling
Serverless	    | Vercel	                                                                                | Hosting Frontend + API Functions
Misc	          | cors	                                                                                  | Middleware CORS untuk API
Runtime	        | Vercel Functions	                                                                      | API auto serverless
Seeder	        | seed.js	                                                                                | Script seed data ke DB
Monitoring	    | monitor-deployment.js	                                                                  | Monitor status deployment


## 🗂️ Struktur Folder

```
📦 MY-PORTO (root)
 ┣ api/ # API routes (Serverless Functions di Vercel)
 ┃ ┣ 📜 education.js           # Endpoint data riwayat pendidikan
 ┃ ┣ 📜 project.js             # Endpoint data project / portofolio
 ┃ ┣ 📜 skills.js              # Endpoint data keahlian / skillset
 ┃ ┗ 📜 init-db.js             # Endpoint untuk inisialisasi DB (optional)
 ┣ 📂 backend/                 # Backend tradisional (Express.js server & data seed)
 ┃ ┣ 📜 index.js               # Entry point Express.js server
 ┃ ┣ 📜 data.js                # Data statis atau schema DB helper
 ┃ ┣ 📜 seed.js                # Seeder untuk generate data awal ke DB Neon
 ┃ ┣ 📜 package.json           # Config npm backend (Express, nodemon)
 ┃ ┗ 📜 package-lock.json      # Lockfile backend
 ┣ 📂 frontend/                # SPA Frontend dengan Vue.js
 ┃ ┣ 📂 src/
 ┃ ┃ ┣ 📂 components/          # Komponen UI (Navbar, Footer, Sections)
 ┃ ┃ ┣ 📂 directives/          # Custom directive (ex: AnimateOnScroll)
 ┃ ┃ ┣ 📂 router/              # Konfigurasi Vue Router
 ┃ ┃ ┣ 📂 views/               # Halaman utama (Home, About, Project, Contact)
 ┃ ┃ ┣ 📜 App.vue              # Root component Vue
 ┃ ┃ ┗ 📜 main.js              # Entry point SPA
 ┃ ┣ 📜 index.html             # HTML template utama
 ┃ ┣ 📜 vite.config.js         # Konfigurasi Vite + alias + plugin devtools
 ┃ ┣ 📜 tailwind.config.js     # Konfigurasi Tailwind + animasi custom
 ┃ ┣ 📜 package.json           # Config npm frontend (Vue, plugins, scripts)
 ┃ ┗ 📜 package-lock.json      # Lockfile frontend
 ┣ 📂 utils/                   # Utility helper
 ┃ ┣ 📜 cors.js                # Middleware CORS untuk API
 ┃ ┗ 📜 database.js            # Setup koneksi Neon PostgreSQL
 ┣ 📜 .env.development.local   # File env lokal (DB URL, keys, secrets)
 ┣ 📜 vercel.json              # Konfigurasi deploy Vercel (rewrites, headers, runtime)
 ┣ 📜 deploy.md                # Catatan atau guide deploy manual ke Vercel
 ┣ 📜 monitor-deployment.js    # Script monitoring status deployment
 ┣ 📜 debug-api.js             # Debug helper untuk test API lokal
 ┣ 📜 .gitignore               # Ignore file (node_modules, env, dll)
 ┗ 📜 README.md                # Dokumentasi project ini (you’re reading it!)
dll;
```


## ⚙️ Setup Development

### 1. Clone Repository
```bash
git clone https://github.com/ulpaav/z-portofolio.git
cd z-portofolio
```


## 🧑‍💻 Pengembangan
- **Install Dependencies**:
  1. Frontend
      ```bash
      cd frontend
      npm install
      ```
  2. Backend
      ```bash
      cd backend
      npm install
      ```
- **Jalankan Project**:  
  ```bash
  npm run dev
  ```
- **Linting**:  
  ```bash
  npm run lint
  ```
- **Format kode**:  
  ```bash
  npm run format
  ```
- **Build production**:  
  ```bash
  npm run build
  ```
- **Preview Build**:
  ```bash
  npm run preview
  ```
- **Seed DB**:
  ```bash
  node backend/seed.js
  ```
- **Init DB**:
  ```bash
  node api/init-db.js
  ```

### 🔗 Rewrites & API Routing
  ```bash
    /api/education
    /api/project
    /api/skills
  ```

### 🗄️ Database
- Neon PostgreSQL, connection pooling & non-pooling URL ready.
- Connection helper: utils/database.js.

### 🌐 Deploy ke Vercel
- Jalankan vercel di root folder.
- Pastikan vercel.json ada:
- Serverless functions di api/
- Rewrites ke frontend/
- CORS header di-setup otomatis
- Set DATABASE_URL & var lain di Vercel Dashboard → Project Settings → Environment Variables.


### 📄 Lisensi
Project ini dibuat untuk keperluan pembelajaran dan pengembangan pribadi. Gunakan dengan bebas, modifikasi sesuai kebutuhan.
