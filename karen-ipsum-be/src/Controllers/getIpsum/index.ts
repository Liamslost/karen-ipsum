import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../Services/databaseConnector";

export async function getIpsum(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
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

    const connection = await connectToDatabase();
    const getIpsum = await connection.collection("karens").findOne(filter);

    if (!getIpsum) {
      return res.status(404).json({ message: "Karen not found" });
    }

    const quotes: string[] = getIpsum?.quotes || [];

    const result: string[] = [];
    for (let i = 0; i < paragraphs; i++) {
      const paragraph: string[] = [];
      for (let j = 0; j < sentences; j++) {
        const random = Math.floor(Math.random() * quotes.length);
        paragraph.push(quotes[random] + " ");
      }
      result.push(paragraph.join(""));
    }

    return res
      .status(200)
      .json({ message: "Successfully retrieved", data: result });
  } catch (error: unknown) {
    next(error);
  }
}
