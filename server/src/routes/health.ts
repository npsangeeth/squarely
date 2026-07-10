import { Router } from "express";
import prisma from "../config/prisma";

const router = Router();

router.get("/", async (_req, res) => {

  const data = await prisma.user.findMany();
  res.send(data);
});

export default router;
