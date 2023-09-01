import express from "express";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/store", async (req, res) => {
  try {
    const { name, email, subject, msg } = req.body;

    // Check if the user with the same email already exists in the database.
    const user = await UserModel.findOne({ email });

    // If user is already registered, return a response.
    if (user) {
      // console.log("DataStored!");
      return res.json({ message: "Response already present" });
    }

    // Create a new entry with similar schema.
    const newUser = new UserModel({ name, email, subject, msg });

    // Save the new user to the database.
    await newUser.save();

    return res.json({ message: "Thanks! Our team will help you for sure" });
  } catch (error) {
    console.error("Error:", error);
    return res.json({ message: "Internal Server Error" });
  }
});

export { router as sendFile };
