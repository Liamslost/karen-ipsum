import { getDatabase } from "../../Services/databaseConnector";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

export async function getIpsum(req: Request, res: Response): Promise<void> {
  try {
    const id = req.query.id;
    if (typeof id !== "string" || !ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid ID" });
      return;
    }
    const karenId = new ObjectId(id);

    const sentences = Number(req.query.sentences) || 5;
    const parragraphs = Number(req.query.parragraphs) || 1;

    const filter = {
      _id: karenId,
    };

    const connection = await getDatabase();
    const getIpsum = await connection
      .db("karen-ipsum")
      .collection("karens")
      .findOne(filter);

    if (!getIpsum) {
      res.status(404).json({ message: "Karen not found" });
      return;
    }

    const quotes: string[] = getIpsum?.quotes || [];

    const result: string[][] = [];

    for (let i = 0; i < parragraphs; i++) {
      const parragraph: string[] = [];
      for (let j = 0; j < sentences; j++) {
        const random = Math.floor(Math.random() * quotes.length);
        parragraph.push(quotes[random] + " ");
      }
      result.push(parragraph);
    }

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
