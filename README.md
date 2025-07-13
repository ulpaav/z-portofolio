# 🎨 Portfolio Website

Ini adalah project website portfolio untuk saya sebagai mahasiswa Informatika, yang menampilkan riwayat pendidikan, project, dan keahlian yang saya miliki. 
Dibangun menggunakan **Vue.js 3**, **Tailwind CSS**, dan tools modern berbasis Vite.


## 🚀 Fitur Utama

- SPA (Single Page Application) dengan Vue 3
- Routing halaman menggunakan Vue Router
- Animasi scroll dengan AOS
- Styling modern dengan Tailwind CSS
- Ikon profesional dengan Font Awesome
- Timeline animasi edukasi
- Responsif untuk mobile & desktop
- Support animasi delay (`tailwindcss-animation-delay`)
- Linter & Formatter otomatis (ESLint + Prettier)

- ## 📦 Tech Stack
  
Framework       | [Vue.js 3.5.17](https://vuejs.org/)              
Router          | [Vue Router 4.5.1](https://router.vuejs.org/)    
Build Tool      | [Vite 7](https://vitejs.dev/)                    
CSS Framework   | [Tailwind CSS 3.4.17](https://tailwindcss.com/)  
Icon Library    | [Font Awesome 6](https://fontawesome.com/)       
HTTP Client     | [Axios 1.10.0](https://axios-http.com/)          
Scroll Animasi  | [AOS 2.3.4](https://michalsnik.github.io/aos/)   
Utility Plugin  | [tailwindcss-animation-delay](https://github.com/jenselme/tailwindcss-animation-delay) 
Developer Tools | vite-plugin-vue-devtools                         


## ⚙️ Setup Development

### 1. Clone Repository
```bash
git clone https://github.com/ulpaav/z-portofolio.git
cd z-portofolio
```

## 🗂️ Struktur Folder

```
src/
  assets/           # Image, Icon, bg, main.css
  components/       # Komponen UI (about, contact, home, layouts, dsb)
  directives/       # AnimateOnScroll
  router/           # Konfigurasi vue-router
  views/            # Halaman utama (Home, About, Project dan Contact)
  App.vue           # Root component
  main.js           # Entry point
```

## 🧑‍💻 Pengembangan
- **Install Dependencies**:  
  ```bash
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
  

### 📄 Lisensi
Project ini dibuat untuk keperluan pembelajaran dan pengembangan pribadi. Gunakan dengan bebas, modifikasi sesuai kebutuhan.

