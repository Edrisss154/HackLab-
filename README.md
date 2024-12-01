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

