# SMST API

## Deploy ke VPS dengan PM2

Pastikan VPS memiliki Node.js yang kompatibel dengan versi proyek, akses ke database MySQL, dan PM2.

```bash
git clone <url-repository>
cd smst-api
npm ci --omit=dev
cp .env.example .env
nano .env
```

Isi `.env` dengan kredensial database VPS yang benar. Jangan commit atau membagikan file `.env`.

Jalankan aplikasi dengan PM2:

```bash
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

Jalankan perintah `sudo` yang dicetak oleh `pm2 startup` agar proses otomatis aktif kembali setelah VPS reboot.

Aplikasi mendengarkan di `127.0.0.1:3005`. Gunakan reverse proxy seperti Nginx untuk menerima trafik publik dan meneruskannya ke alamat tersebut; jangan membuka port aplikasi ke internet secara langsung.

### Operasional

```bash
pm2 status
pm2 logs smst-api
pm2 restart smst-api
```

Saat deploy versi baru:

```bash
git pull
npm ci --omit=dev
pm2 restart smst-api
pm2 save
```

Dokumentasi API tersedia melalui `/api-docs` di belakang reverse proxy.
