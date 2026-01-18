# 💬 Slack Clone — Real-Time Chat & Collaboration Platform

A **full-stack, production-ready Slack-like collaboration platform** that enables users to communicate in real time through channels and direct messages, with support for user presence, video calls, and secure authentication.

This project is inspired by the **Slack Clone tutorial from Codesistency (YouTube)** and extended with real-world best practices, proper authentication flow, and robust state handling.

Built using **React (Vite)**, **Node.js (Express)**, **Stream Chat**, **Clerk Authentication**, and **Inngest**, the app demonstrates modern full-stack engineering patterns.

---

## 🚀 Key Features

### 👤 Authentication & User Management
- Secure authentication using **Clerk**
- Protected backend APIs with Clerk JWT validation
- Automatic user sync between:
  - Clerk
  - Database (MongoDB)
  - Stream Chat
- User profile & session management

---

### 💬 Real-Time Chat
- Real-time messaging powered by **Stream Chat SDK**
- Public channels & direct messages
- Create, join, and switch channels
- Message threads support
- Read/unread message counts

---

### 🟢 Presence & User Status
- Online / offline indicators
- Active user list
- Real-time updates on user availability

---

### 🎥 Video Calling
- One-to-one and group video calls
- Handles reconnects after call end
- Safe Stream re-initialization to avoid channel errors

---

### 🔁 Real-Time Sync & Reliability
- Auto reconnect support
- Safe rendering guards to prevent race conditions
- Error-resilient channel loading
- Smooth UX after network or call interruptions

---

## 🧱 Tech Stack

### Frontend
- **React (Vite)**
- **React Router**
- **Stream Chat React**
- **@tanstack/react-query**
- **Tailwind CSS**
- **lucide-react (icons)**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Inngest** (background jobs & event handling)

### Authentication
- **Clerk Authentication**
- Secure JWT-based API protection
- Session-aware frontend hooks

### Real-Time Communication
- **Stream Chat API**
- Server-generated Stream tokens
- User & channel lifecycle management

---

## ⚙️ Environment Variables

# Backend (`backend/.env`)
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
MONGODB_URI=your_mongodb_connection_string

# Frontend (`frontend/.env`)

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
VITE_STREAM_API_KEY=your_stream_api_key  
VITE_API_BASE_URL=http://localhost:5001  

---

## 🧪 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/slack-clone.git
cd slack-clone
```

---

### 2️⃣ Install Dependencies

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd ../frontend
npm install
```

---

### 3️⃣ Run the Application

**Start Backend**

```bash
cd backend
npm run dev
```

**Start Frontend**

```bash
dd frontend 
npm run dev  
```
> Open 👉 [http://localhost:5173](http://localhost:5173)


