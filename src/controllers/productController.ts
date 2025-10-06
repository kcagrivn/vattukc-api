import { Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Béc cánh đập 1 tia", price: 19999 },
    { id: 2, name: "Bộ béc tưới phun sương 10m dây 10 béc", price: 89900 },
  ]);
};

