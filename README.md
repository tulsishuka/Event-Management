# 🎉 Event Management System
```
A full-stack **Event Management** web application built with **Next.js**, **Apollo GraphQL**, and **MongoDB**.  
It allows users to create, view, and manage event details easily through a modern and responsive interface.

```

## 🚀 Features
```
- 📅 Create, view, and update events  
- 🧠 GraphQL API using Apollo Server  
- 🧰 MongoDB integration for data storage  
- ⚡ Dynamic Next.js pages for employee/event details  
- 🌐 Fully deployed on Render (frontend + backend)  
- 🔒 Environment variable-based configuration  
```


## 🏗️ Tech Stack
```
**Frontend:**
- Next.js 15 (React Framework)
- Apollo Client
- Tailwind CSS

**Backend:**
- Node.js
- Apollo Server (GraphQL)
- MongoDB

**Deployment:**
- Render (for both backend & frontend)

```

## 📂 Folder Structure
```
Event-Management/
│
├── backend/
│ ├── server.js # Apollo Server setup
│ ├── db.js # MongoDB connection
│ ├── schema.js # TypeDefs & resolvers
│ └── package.json
│
└── frontend/
├── pages/
│ ├── index.js
│ ├── employee/[id].js
│ └── ...
├── lib/
│ └── apolloClient.js
├── components/
├── package.json
├── next.config.js
└── ...
```

## ⚙️ Installation & Setup (Local)
```
1. **Clone the repository**
   ```bash
   git clone https://github.com/tulsishuka/Event-Management.git
   cd Event-Management
Backend Setup
cd backend
npm install
Create a .env file inside /backend:

MONGO_URI=your_mongodb_connection_string
PORT=4000
Run the backend:
node server.js
It will start at: http://localhost:4000/graphql

Frontend Setup

cd ../frontend
npm install
Create a .env.local file:
bash
Copy code

Run the frontend:
npm run dev

```
