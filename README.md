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
- `.hacklab.sql` - تعریف دیتابیس و داده‌های پیش‌فرض.
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
  
4. اطلاعات دیتابیس را در فایل `index.js` ویرایش کنید:
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

# HackLab - Educational Bug Hunting Challenge  

HackLab is an educational platform designed to help users understand common web vulnerabilities. By exploring multiple levels of challenges, participants can identify and fix security issues while learning how to prevent them in real-world applications.  

---

## 🚀 **Features**  
- **SQL Injection:** Simulate and resolve SQL vulnerabilities.  
- **Unauthorized Access:** Learn how attackers bypass file access restrictions.  
- **Cross-Site Scripting (XSS):** Identify and mitigate harmful scripts.  
- **Authentication and Cookies:** Analyze security flaws in session handling.  
- **Unsafe HTTP Requests:** Practice detecting and preventing POST, GET, and PUT vulnerabilities.  
- **Custom Challenges:** Test your hacking skills across multiple stages.  

---

## 📂 **Project Structure**
```plaintext
HackLab/
├── public/          # Static files (HTML, CSS, JavaScript for challenges)
├── index.js         # Main server file
├── .hacklab.sql     # Database schema and preloaded data
├── README.md        # Project documentation
```

---

## ⚙️ **Prerequisites**  
- **Node.js** (v14 or later)  
- **MySQL Server**  
- **npm** (Node.js package manager)  

---

## 🛠️ **Setup and Run**

### 1. Clone the Repository  
```bash
git clone https://github.com/Edrisss154/HackLab-.git
cd HackLab-
```

### 2. Install Dependencies  
```bash
npm install
```

### 3. Set Up the Database  
- Create a database named `hacklab`.  
```bash
CREATE DATABASE hacklab;
USE hacklab;
```
- Update the database credentials in `index.js`:  
```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hacklab'
});
```
- Import the `.hacklab.sql` file to initialize tables:  
```bash
mysql -u root -p hacklab < .hacklab.sql
```

### 4. Start the Server  
```bash
node index.js
```
Access the project on `http://localhost:5000`.

---

## 🔒 **Challenge Levels**  

### **Level 1: Basic Access**
- Goal: Find hidden information in the `/level1` page.  

### **Level 2: Unauthorized File Access**
- Goal: Exploit directory traversal or file inclusion vulnerabilities.  

### **Level 3: SQL Injection**  
- Goal: Retrieve sensitive data using malicious SQL queries.  

### **Level 4: Cookie Exploitation**
- Goal: Access restricted areas by tampering with session cookies.  

### **Final Challenge: Hidden Flag**
- Goal: Submit the final flag located at `/danger`.  

---

## 📄 **Examples of Vulnerabilities**

### 1. **SQL Injection**  
Use payloads like:  
```sql
' OR '1'='1
```

### 2. **Directory Traversal**  
**2. Bypassing Access Restrictions**  
You can access restricted files by modifying the `Referer` header in your HTTP request. This involves simulating a request as if it originates from an authorized page. Tools like browser developer tools, cURL, or applications like Burp Suite can be used to make such changes effectively.  

For example, altering the `Referer` value to the URL of a trusted or authorized page may trick the server into providing access to otherwise restricted resources.  

This is a practical learning scenario to understand how servers verify `Referer` headers and why relying solely on them for access control is insecure.

---

## ✉️ **Contact**  
For questions or bug reports, feel free to reach out:  
- **Email:** [edrisss14@gmail.com](mailto:edrisss14@gmail.com)  
- **GitHub:** [Edrisss154](https://github.com/Edrisss154)  

---

## ⚠️ **Disclaimer**  
This project is for **educational purposes only** and should be tested in isolated environments. Any misuse of the tools or techniques demonstrated may result in legal consequences.  

---

## ✨ **How to Contribute**  
We welcome contributions! Feel free to submit a Pull Request or open an Issue if you’d like to expand or improve this project.  

---

### **Please star this repository ⭐ if you find it helpful!**  

