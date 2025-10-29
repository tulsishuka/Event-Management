import { connectDB } from "./db.js";

async function seed() {
  const db = await connectDB();
  await db.collection("employees").insertMany([
    { id: "1", name: "Alice", position: "Developer", department: "IT", salary: 5000 },
    { id: "2", name: "Bob", position: "Manager", department: "HR", salary: 7000 },
    { id: "3", name: "Charlie", position: "Designer", department: "Design", salary: 4500 },
    { id: "4", name: "David", position: "QA", department: "IT", salary: 4000 },
    { id: "5", name: "Eve", position: "Support", department: "Support", salary: 3500 },
  ]);
  console.log("Data seeded");
  process.exit();
}

seed();
