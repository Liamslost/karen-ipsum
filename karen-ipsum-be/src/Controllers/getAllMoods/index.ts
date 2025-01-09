import { getDatabase } from "../../Services/databaseConnector";
import { Request, Response } from "express";

export async function getAllMoods(req: Request, res: Response): Promise<void> {
  try {
    const connection = await getDatabase();
    if (!connection) {
      throw new Error("Database connection failed");
    }

    const getMoods = await connection
      .db("karen-ipsum")
      .collection("karens")
      .find({})
      .project({ _id: 1, name: "$style" })
      .toArray();

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
