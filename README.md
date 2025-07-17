# 🔒 Personality Lock

A **full-stack personality quiz app** where your unique personality is “locked” to a custom ID generated from your inputs — **no traditional login required**!

---

## 🎯 Objective

Instead of login/signup, users take a short quiz (Name, DOB, Favorite Color, Lucky Number). A **unique ID** is generated from this data, and the same input will always return the same result.

If it's your first time, you'll get a random personality type like **“Explorer”**, **“Thinker”**, or **“Leader”**, which is stored and retrieved on future visits.

---

## 🧠 Tech Stack

| Layer        | Technology     |
|--------------|----------------|
| Frontend     | React.js       |
| Backend      | Express.js     |
| Database     | MySQL          |

---

## 🧩 Features

✅ Clean and responsive UI  
✅ Quiz with fields: Name, DOB, Favorite Color, Lucky Number  
✅ Deterministic user ID generation using hashing  
✅ Store & retrieve user personality result  
✅ Data persistence using MySQL  
✅ LocalStorage-based session for a seamless user experience  
✅ Fully RESTful API integration

---

## 🧪 API Endpoints

### `POST /generate-id`

Generate a unique user ID using input quiz data.

**Request Body:**
```json
{
  "name": "John",
  "dob": "1995-01-01",
  "color": "Blue",
  "luckyNumber": 7
}
```

**Response:**
```json
{ "userId": "a1b2c3d4e5" }
```

---

### `GET /result?userId=a1b2c3d4e5`

Retrieve the stored result based on user ID.

**Response:**
```json
{ "result": "Thinker" }
```

---

### `POST /result`

Assign and store a new random personality type for a user.

**Request Body:**
```json
{
  "userId": "a1b2c3d4e5",
  "result": "Explorer"
}
```

---

## 📂 Folder Structure

```
personality-lock/
├── frontend/    # React frontend
├── backend/    # Express backend
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/personality-lock.git
cd personality-lock
```

### 2. Setup backend
```bash
cd backend
npm install
node server.js
```

### 3. Setup frontend
```bash
cd frontend
npm install
npm start
```

### 4. Configure MySQL

Make sure MySQL is running and update the `db.js` file in `server/` with your credentials:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'personality_lock'
});
```

---

## 🧠 Personality Types

Your result may be one of the following (randomly assigned):

- 🔍 Thinker  
- 🧭 Explorer  
- 🛡️ Leader
- 💡 Innovator  
- 🌿 Helper

---

## 📦 Future Enhancements

- User customization of personality result  
- Shareable result pages  
- Optional social login (if needed)  
- Personality type descriptions

---

