# HackLab-
### پیشنهاد README برای پروژه شما (آموزش باگ‌های امنیتی)

```markdown
# HackLab - چالش آموزش باگ‌های امنیتی

**HackLab** یک پروژه آموزشی برای آشنایی با انواع باگ‌ها و آسیب‌پذیری‌های امنیتی در وب است. این پروژه شامل چندین مرحله (Level) طراحی شده است که کاربران با بررسی کدها و اجرای آزمایشات می‌توانند مشکلات امنیتی را پیدا کرده و یاد بگیرند چگونه از آنها اجتناب کنند.

---

## 🚀 ویژگی‌ها
- **آموزش SQL Injection:** شبیه‌سازی آسیب‌پذیری‌های مربوط به تزریق SQL.
- **آسیب‌پذیری مسیرهای غیرمجاز:** بررسی نحوه دسترسی غیرمجاز به فایل‌های استاتیک.
- **بررسی XSS (Cross-Site Scripting):** شناسایی و رفع مشکلات مربوط به اسکریپت‌های مخرب.
- **احراز هویت و کوکی‌ها:** بررسی مشکلات مربوط به مدیریت کوکی‌ها.
- **تست درخواست‌های ناامن:** شبیه‌سازی حملات مربوط به درخواست‌های POST، GET، و PUT.
- **چالش‌های مختلف:** مراحل طراحی شده برای تست مهارت‌های هک و یادگیری امنیت.

---

## 📂 ساختار پروژه

- `public/` - شامل فایل‌های استاتیک HTML، CSS، و JavaScript برای مراحل مختلف.
- `app.js` - سرور اصلی برنامه که با **Node.js** و **Express** نوشته شده است.
- `database.sql` - تعریف دیتابیس و داده‌های پیش‌فرض.
- `README.md` - فایل توضیحات پروژه (این فایل).

---

## ⚙️ پیش‌نیازها

قبل از اجرای پروژه، باید ابزارهای زیر را نصب کنید:

1. **Node.js** (نسخه 14 یا بالاتر)
2. **MySQL Server** (برای مدیریت دیتابیس)
3. **npm** (مدیر پکیج Node.js)

---


```
## 🛠️ نصب و اجرا

### 1. کلون کردن پروژه:
```bash
git clone https://github.com/Edrisss154/HackLab-.git
cd HackLab-
```

### 2. نصب پکیج‌های مورد نیاز:

```bash
npm install
```

### 3. تنظیم دیتابیس:
1. یک دیتابیس با نام `hacklab` ایجاد کنید.
 ```bash
   CREATE DATABASE hacklab;
  USE hacklab;
```
  
4. اطلاعات دیتابیس را در فایل `app.js` ویرایش کنید:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'hacklab'
   });
   ```
   
5. اسکریپت ساخت جدول و داده‌های پیش‌فرض به صورت خودکار اجرا می‌شود.
   
6. ایمپورت فایل SQL:
فایل SQL ارائه‌شده را در دیتابیس ایمپورت کنید. روش‌های مختلف:

phpMyAdmin:
وارد phpMyAdmin شوید.
دیتابیس hacklab را انتخاب کنید.
به تب Import بروید و فایل SQL را آپلود کنید.

* اگر از خط فرمان استفاده می‌کنید:
```bash

mysql -u root -p hacklab < your_file.sql
```

### 4. اجرای سرور:
```bash
node index.js
```

سرور روی `http://localhost:50001` اجرا خواهد شد.

---

## 🔒 مراحل امنیتی (Challenges)

### 1. **مرحله اول (Level 1):**
   - دسترسی به صفحه `/level1` و پیدا کردن اطلاعات درون صفحه.

### 2. **مرحله دوم (Level 2):**
   - تلاش برای دور زدن دسترسی محدود به فایل‌های استاتیک.

### 3. **مرحله سوم (SQL Injection):**
   - در صفحه `/danger` با تزریق کد SQL، اطلاعات کاربران را پیدا کنید.

### 4. **مرحله چهارم (کوکی‌ها):**
   - شناسایی کوکی تنظیم شده در مسیر `/kjmoije` و استفاده از آن برای دسترسی به صفحه‌های دیگر.

### 5. **مرحله پایانی (فلگ مخفی):**
   - تلاش برای پیدا کردن فلگ نهایی با ارسال درخواست به `/danger`.

---

## 📄 مثال‌هایی از آسیب‌پذیری‌ها

### 1. **SQL Injection:**
در صفحه `/level8sd`:
```sql
' OR '1'='1
```

### 2. **Bypass محدودیت دسترسی:**
با تغییر `Referer`، می‌توانید فایل‌های خاص را باز کنید.

---

## 📧 تماس با ما
در صورت وجود هرگونه سوال یا گزارش باگ، می‌توانید از طریق [ایمیل](mailto:edrisss154@gmail.com) یا ایجاد **Issue** در این مخزن با ما در ارتباط باشید.

---

## ⚠️ توجه
این پروژه صرفاً برای اهداف آموزشی و آزمایش در محیط‌های ایزوله طراحی شده است. استفاده نادرست از این ابزارها می‌تواند مشکلات حقوقی ایجاد کند.

---

## 🛡️ راهکارهای امنیتی
برای یادگیری بهتر، بعد از شناسایی آسیب‌پذیری‌ها، راهکارهای زیر را بررسی کنید:
1. **استفاده از کوئری‌های پارامتری** برای جلوگیری از SQL Injection.
2. **محدود کردن دسترسی فایل‌ها** بر اساس احراز هویت کاربران.
3. **اعتبارسنجی داده‌های ورودی** از کاربران.

---

## ✨ مشارکت
اگر علاقه‌مند به گسترش این پروژه هستید، خوشحال می‌شویم Pull Request ارسال کنید.


### توضیحات:
این README شامل تمام بخش‌های ضروری برای ارائه پروژه شماست. اگر بخشی نیاز به تغییر یا سفارشی‌سازی دارد، بگویید تا اصلاح کنم. 😊

## **ارتباط با من**
- **ایمیل:** [edrisss14@gmail.com](mailto:your-email@example.com)
- **گیت‌هاب:** [Edrisss154](https://github.com/Edrisss154)



### **لطفاً ستاره بدهید ⭐️ اگر این پروژه برای شما مفید بود!**
