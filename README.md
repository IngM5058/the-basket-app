## **เข้าใจโครงสร้างของ Quasar Framework**
Quasar เป็น **Vue.js Framework** ที่ช่วยให้เราสร้าง Web App, Mobile App (ผ่าน Capacitor/Cordova), และ Desktop App (ผ่าน Electron) ได้จากโค้ดเดียวกัน 🚀  

### **📂 โครงสร้างโฟลเดอร์หลักของโปรเจ็กต์ Quasar**
```
the-basket-app/
│── src/                 # โค้ดหลักของแอป
│   ├── assets/          # ไฟล์รูปภาพ, ไอคอน, CSS
│   ├── boot/            # โหลด Plugin (เช่น Axios, Pinia)
│   ├── components/      # คอมโพเนนต์ที่ใช้ซ้ำในหลายหน้า
│   ├── layouts/         # Layout ของหน้าเว็บ เช่น Header, Sidebar
│   ├── pages/           # ไฟล์ Vue ของแต่ละหน้า (เช่น HomePage.vue)
│   ├── router/          # การกำหนดเส้นทางของแอป
│   ├── stores/          # จัดการ State ด้วย Pinia (ถ้าใช้)
│   ├── App.vue          # ไฟล์หลักของแอป
│   ├── main.js          # จุดเริ่มต้นของแอป
│── public/              # ไฟล์ที่เข้าถึงได้จาก URL โดยตรง
│── quasar.config.js     # ตั้งค่า Quasar และ Vite
│── package.json         # รายการ dependencies และสคริปต์ต่างๆ
```
---

📌 รันแอป **(ถ้ายังไม่รัน)**
```sh
quasar dev
```


