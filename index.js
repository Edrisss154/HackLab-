const express = require('express');

const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 50001;

const db = mysql.createConnection({
    host: 'localhost', // یا آی‌پی سرور MySQL
    user: 'root',      // یوزر MySQL
    password: '',      // رمز عبور MySQL
    database: 'hacklab' // نام دیتابیس
});


// اتصال به دیتابیس
db.connect((err) => {
    if (err) {
        console.error('خطا در اتصال به دیتابیس:', err.message);
        process.exit(1);
    } else {
        console.log('اتصال به MySQL برقرار شد.');

        const createTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(50) NOT NULL
            );
        `;
        db.query(createTable, (err) => {
            if (err) console.error('خطا در ایجاد جدول:', err.message);
            else {
                console.log('جدول کاربران ایجاد شد یا قبلاً وجود داشته است.');

                // بررسی و وارد کردن داده‌ها فقط در صورت خالی بودن جدول
                db.query('SELECT COUNT(*) AS count FROM users', (err, result) => {
                    if (err) {
                        console.error('خطا در بررسی جدول:', err.message);
                    } else if (result[0].count === 0) {
                        const insertData = `
                            INSERT INTO users (username, password) 
                            VALUES ('admin', 'admin123'), ('Nextlevel', '/danger');
                        `;
                        db.query(insertData, (err) => {
                            if (err) console.error('خطا در وارد کردن داده‌ها:', err.message);
                            else console.log('داده‌های پیش‌فرض اضافه شدند.');
                        });
                    } else {
                        console.log('جدول از قبل دارای داده است، نیازی به وارد کردن نیست.');
                    }
                });
            }
        });
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'views')));


// Middleware برای مسدود کردن دسترسی به همه‌ی فایل‌های استاتیک به‌جز مسیر خاص
app.use('/js/script.js', (req, res, next) => {
    // بررسی اینکه کاربر از مسیر `/special-access` وارد شده باشد
    if (req.headers.referer && req.headers.referer.includes('/level2')) {
        next(); // اجازه دسترسی به فایل JavaScript
    } else {
        res.status(403).send("Access Denied"); // مسدود کردن دسترسی
    }
});
app.use('/css/style.css', (req, res, next) => {
    // بررسی اینکه کاربر از مسیر `/special-access` وارد شده باشد
    if (req.headers.referer && req.headers.referer.includes('/')) {
        next(); // اجازه دسترسی به فایل JavaScript
    } else {
        res.status(403).send("Access Denied"); // مسدود کردن دسترسی
    }
});
// ارائه فایل‌های استاتیک
app.use(express.static('public'));
// Middleware برای مسدود کردن دسترسی به فایل‌های استاتیک


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index1.html');
    app.use('/js/level2.js', (req, res, next) => {
      
       
            res.status(403).send("Access Denied"); // مسدود کردن دسترسی
        
    });
});
app.get('/level1', (req, res) => {
    res.sendFile(__dirname + '/public/index2.html');
});
app.get('/level2', (req, res) => {
    res.sendFile(__dirname + '/public/index3.html');
    app.use('/js/script.js', (req, res, next) => {
        // بررسی اینکه کاربر از مسیر `/special-access` وارد شده باشد
        if (req.headers.referer && req.headers.referer.includes('/level2')) {
            next(); // اجازه دسترسی به فایل JavaScript
        } else {
            res.status(403).send("Access Denied"); // مسدود کردن دسترسی
        }
    });
});
app.get('/kbkwsihnuy', (req, res) => {
    res.sendFile(__dirname + '/public/index4.html');
    app.use('/js', (req, res, next) => {
        // بررسی اینکه کاربر از مسیر `/special-access` وارد شده باشد
        if (req.headers.referer && req.headers.referer.includes('/kbkwsihnuy')) {
            next(); // اجازه دسترسی به فایل JavaScript
        } else {
            res.status(403).send("Access Denied"); // مسدود کردن دسترسی
        }
    });
});

app.get('/sama', (req, res) => {
    res.sendFile(__dirname + '/public/index5.html');
   
});
app.post('/sama', (req, res) => {
    res.sendFile(__dirname + '/public/index5copy.html');
   
});


app.get('/barare', (req, res) => {
    res.sendFile(__dirname + '/public/index6.html');
   
});
app.post('/barare', (req, res) => {
    res.sendFile(__dirname + '/public/index7.html');
   
});
app.get('/mikdu', (req, res) => {
    res.sendFile(__dirname + '/public/index8.html');
    app.use('/js/scripts.js', (req, res, next) => {
        // بررسی اینکه کاربر از مسیر `/special-access` وارد شده باشد
        if (req.headers.referer && req.headers.referer.includes('/mikdu')) {
            next(); // اجازه دسترسی به فایل JavaScript
        } else {
            res.status(403).send("Access Denied"); // مسدود کردن دسترسی
        }
    });
   
});
app.put('/mikdu', (req, res) => {
   
    const responseData = { message: "NextLevel:/kjmoije" }; // ارسال پاسخ JSON res.json(responseData); });
    res.json(responseData)
    console.log("mamad")
   
});

app.get('/kjmoije', (req, res) => {
    res.sendFile(__dirname + '/public/index9.html');
    res.cookie('NextLevel', 'level8sd', {
        maxAge: 24 * 60 * 60 * 1000, // اعتبار کوکی برای یک روز
        httpOnly: true,              // فقط از طریق HTTP قابل دسترسی است (نه جاوااسکریپت)
        secure: false                // برای سرورهای HTTPS باید true باشد
    });

   
});


app.get('/level8sd', (req, res) => {
    res.sendFile(__dirname + '/public/index10.html');
});

app.post('/level8sd',(req, res)=>{
    const username = req.body.username;
    // کوئری آسیب‌پذیر به SQL Injection
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    console.log("Executed Query:", query);

    db.query(query, (err, results) => {
        if (err) {
            console.error('خطا در اجرای کوئری:', err.message);
            res.send('خطایی رخ داده است.');
        } else if (results.length > 0) {
            res.send(`کاربران پیدا شده: <pre>${JSON.stringify(results, null, 2)}</pre>`);
        } else {
            res.send('هیچ کاربری پیدا نشد.');
        }
    });
})



app.get('/danger', (req, res) => {
    res.sendFile(__dirname + '/public/index11.html');
});
// مسیر جستجو برای فلگ
app.post('/danger', (req, res) => {
    const username = req.body.username;
    const key = req.body.key || ''; // کلید برای دسترسی به فلگ

    // کوئری جستجوی کاربران
    let query = `
        SELECT id, name 
        FROM users1 
        WHERE name LIKE '%${username}%' AND LENGTH(name) > 3
    `;

    // اگر کلید خاص ارسال شده باشد، فلگ را نیز جستجو کن
    if (key === 'my_secret_key') {
        query = `
            SELECT id, name, URL 
            FROM users1 
            WHERE name LIKE '%${username}%' AND LENGTH(name) > 3
        `;
    }

    console.log("Executed Query:", query);

    db.query(query, (err, results) => {
        if (err) {
            console.error('خطا در اجرای کوئری:', err.message);
            res.send('خطایی رخ داده است.');
        } else if (results.length > 0) {
            res.send(`نتایج پیدا شده: <pre>${JSON.stringify(results, null, 2)}</pre>`);
        } else {
            res.send('هیچ نتیجه‌ای پیدا نشد.');
        }
    });
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
