import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../Services/databaseConnector"; // Import your connector

export async function getIpsum(req: Request, res: Response): Promise<void> {
  try {
    // Validate the ID parameter
    const id = req.query.id;
    if (typeof id !== "string" || !ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const karenId = new ObjectId(id);
    const sentences = Number(req.query.sentences) || 5;
    const paragraphs = Number(req.query.paragraphs) || 1;

    const filter = {
      _id: karenId,
    };

    // Connect to the database and fetch the document
    const connection = await connectToDatabase();
    const getIpsum = await connection
      .collection("karens")
      .findOne(filter);

    // Check if the document is found
    if (!getIpsum) {
      return res.status(404).json({ message: "Karen not found" });
    }

    const quotes: string[] = getIpsum?.quotes || [];

    // Generate random ipsum content
    const result: string[][] = [];
    for (let i = 0; i < paragraphs; i++) {
      const paragraph: string[] = [];
      for (let j = 0; j < sentences; j++) {
        const random = Math.floor(Math.random() * quotes.length);
        paragraph.push(quotes[random] + " ");
      }
      result.push(paragraph.join(''));
    }

    // Send response with the generated ipsum content
    res.status(200).json({ message: "Successfully retrieved", data: result });

  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        message: "Unexpected Error",
        data: [],
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unexpected Error",
        data: [],
        error: "Unknown error",
      });
    }
  }
}
