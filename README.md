
<p align="center">
  <img src="gittisak%20go%20w.png" alt="gittisak go logo" width="300"/>
</p>

<h1 align="center">🎙️ gittisak go Podcast</h1>

<p align="center">
  <a href="#">หน้าแรก</a> • 
  <a href="#">เกี่ยวกับ</a> • 
  <a href="#">ตอนล่าสุด</a> • 
  <a href="#">ติดต่อ</a>
</p>

---

## 📱 เกี่ยวกับโครงการ โปรดทราบเนื้อหาในที่เก็บนี้เป็นส่วนตัว
โครงการ **gittisak go** คือพอดแคสต์ที่เล่าด้วยมุมมองของนักพัฒนาและผู้สร้างสรรค์  
สร้างขึ้นเพื่อแชร์ความรู้ แรงบันดาลใจ และแนวคิดใหม่ ๆ อย่างเป็นกันเอง  

## ⚡ เทคโนโลยีที่ใช้
- 🎧 HTML + TailwindCSS (ผ่าน CDN)
- ☁️ รองรับการขยายเป็น Next.js / Firebase / Supabase
- 🧠 เตรียมเชื่อมต่อ OpenAI API ในอนาคต

## 🛠️ เริ่มต้นโปรเจกต์
```bash
git clone https://github.com/gittisak-go/gittisak-go-Podcast.git
cd gittisak-go-Podcast
# เปิด index.html ด้วย Live Server หรือเบราเซอร์

```
## 🎨 ธีม

-ธีมเข้ม 4 สี (dark mode):

-แดง: #ff3b30

-ส้ม: #ff9500

-เขียว: #34c759

-ม่วง: #5e5ce6


gittisak-go-Podcast/
├── README.md
├── special.html
├── index.html
├── gittisak go w.png
├── /public
│   ├── favicon.ico
│   └── manifest.json
├── /src
│   ├── /assets
│   │   └── (ถ้ามีภาพอื่น เช่น cover.jpg, banner.png)
│   ├── /components
│   │   └── player.js          # ตัวเล่นเสียง (เพิ่มภายหลังได้)
│   ├── /pages
│   │   ├── about.html         # หน้าเกี่ยวกับ (เพิ่มภายหลัง)
│   │   ├── episodes.html      # หน้าแสดงตอน (เพิ่มภายหลัง)
│   │   └── contact.html       # หน้า “ติดต่อเรา”
│   └── /styles
│       └── main.css           # เฉพาะถ้ามี custom CSS เพิ่มเติม
├── package.json               # เฉพาะถ้าจะใช้ระบบ build (Next.js/Vite)
└── tailwind.config.js         # ถ้าใช้ Tailwind local (ตอนนี้ใช้ CDN ได้เลย)

