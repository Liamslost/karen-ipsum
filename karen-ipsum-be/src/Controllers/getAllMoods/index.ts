import { Request, Response } from "express";
import { connectToDatabase } from "../../Services/databaseConnector";

export async function getAllMoods(req: Request, res: Response): Promise<void> {
  try {
    const db = await connectToDatabase(); // Get the db object
    const moodsCollection = db.collection("karens"); // Access the collection

    const getMoods = await moodsCollection
      .find({})
      .project({ _id: 1, name: "$style" }) // Project the fields
      .toArray(); // Convert the result to an array

    console.log("Retrieved Moods:", getMoods);

    res.status(200).json({
      message: "Successfully retrieved all Karen moods",
      data: getMoods,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error retrieving moods:", error.stack);
      res.status(500).json({
        message: "Unexpected Error",
        data: [],
        error: error.message,
      });
    } else {
      console.error("Unexpected error:", error);
      res.status(500).json({
        message: "Unexpected Error",
        data: [],
        error: "An unknown error occurred",
      });
    }
  }
}
