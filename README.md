# 🎮 Top-Up Game Platform

> ⚠️ **Status: Dalam Pengembangan (Work in Progress)**  
> Proyek ini masih dalam tahap pengembangan aktif. Beberapa fitur mungkin belum lengkap atau masih dalam proses penyempurnaan.

## 📖 Tentang Proyek

**Top-Up Game Platform** adalah aplikasi web modern untuk layanan top-up game dan voucher digital. Platform ini dibangun dengan Next.js 16 dan dirancang dengan antarmuka yang responsif dan user-friendly untuk memudahkan pengguna dalam melakukan pembelian diamond, koin, voucher game, dan layanan digital lainnya.

### 🎯 Tujuan Proyek

- Menyediakan platform top-up game yang cepat, aman, dan mudah digunakan
- Memberikan pengalaman pengguna yang modern dengan UI/UX yang menarik
- Mendukung berbagai metode pembayaran dan game populer
- Menyediakan sistem yang scalable dan mudah di-maintain

## ✨ Fitur Utama

- 🎮 **Top-Up Multi Game** - Mendukung berbagai game populer seperti Mobile Legends, Free Fire, PUBG, dan lainnya
- 🔐 **Top-Up Via Login** - Opsi top-up langsung melalui login akun game
- 🎫 **Voucher Digital** - Pembelian voucher game dan aplikasi
- 💎 **Akun Premium** - Layanan pembelian akun premium berbagai platform
- 🌓 **Dark/Light Mode** - Tema yang dapat disesuaikan dengan preferensi pengguna
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Dibangun dengan Next.js 16 untuk performa maksimal

## 🛠️ Teknologi Stack

### Frontend Framework
- **Next.js 16.1.0** - React framework dengan App Router
- **React 19.2.3** - Library UI terbaru
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Komponen UI primitif yang accessible
- **Lucide React** - Icon library modern
- **next-themes** - Dark mode support
- **Swiper** - Touch slider untuk carousel
- **tw-animate-css** - Animasi CSS dengan Tailwind

### Utilities
- **class-variance-authority** - Variant management untuk komponen
- **clsx & tailwind-merge** - Utility untuk class names
- **Sonner** - Toast notifications yang elegant

## 🚀 Cara Clone & Instalasi

### Prasyarat

Pastikan Anda telah menginstall:
- **Node.js** versi 20 atau lebih tinggi
- **npm**, **yarn**, **pnpm**, atau **bun** sebagai package manager
- **Git** untuk cloning repository

### Langkah-langkah Instalasi

1. **Clone Repository**

```bash
git clone https://github.com/username/top-up.git
# Ganti 'username' dengan username GitHub Anda
```

2. **Masuk ke Direktori Proyek**

```bash
cd top-up
```

3. **Install Dependencies**

Pilih salah satu package manager:

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install

# Atau menggunakan pnpm
pnpm install

# Atau menggunakan bun
bun install
```

4. **Setup Environment Variables** (Opsional)

Jika ada file `.env.example`, copy dan rename menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian sesuaikan konfigurasi di file `.env` sesuai kebutuhan.

5. **Jalankan Development Server**

```bash
# Menggunakan npm
npm run dev

# Atau menggunakan yarn
yarn dev

# Atau menggunakan pnpm
pnpm dev

# Atau menggunakan bun
bun dev
```

6. **Buka di Browser**

Akses aplikasi di [http://localhost:3000](http://localhost:3000)

## 📂 Struktur Proyek

```
top-up/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components (Radix UI)
│   ├── CardHome.tsx      # Card komponen untuk game
│   ├── Navbar.tsx        # Navigation bar
│   └── TogelDrak.tsx     # Dark mode toggle
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🔧 Available Scripts

```bash
# Development mode
npm run dev

# Build untuk production
npm run build

# Jalankan production build
npm start

# Linting
npm run lint
```

## 🎨 Customization

Proyek ini menggunakan Tailwind CSS 4 dan mendukung kustomisasi tema. Anda dapat mengubah:

- **Colors & Theme** - Edit di `app/globals.css`
- **Components** - Modifikasi komponen di folder `components/`
- **Fonts** - Konfigurasi di `app/layout.tsx`

## 📝 Roadmap

- [ ] Integrasi payment gateway
- [ ] Sistem autentikasi pengguna
- [ ] Dashboard admin
- [ ] Riwayat transaksi
- [ ] Notifikasi real-time
- [ ] Multi-language support
- [ ] API integration dengan provider game

## 🤝 Kontribusi

Proyek ini masih dalam pengembangan. Kontribusi, saran, dan feedback sangat diterima!

## 📄 Lisensi

Proyek ini bersifat private. Hubungi owner untuk informasi lisensi.

## 📞 Kontak

Untuk pertanyaan atau dukungan, silakan hubungi developer.

---

**Built with ❤️ using Next.js**
