import { db } from "../services/firebase.js";

// CREATE - criar tarefa
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(req.body)

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = {
      title,
      description,
      completed: false,
      // userId: userId || null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    
    const docRef = await db.collection("todos").add(todo);
    
    return res.status(201).json({
      id: docRef.id,
      ...todo
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

