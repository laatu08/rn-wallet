import express from "express"
import { sql } from "../src/config/db.js";
import {createTransaction, deleteTransaction, getSummary, getTransactionByUserId} from "../src/controller/transactionController.js";

const router=express.Router();


router.post("/",createTransaction)

router.get("/:userId",getTransactionByUserId)

router.delete("/:id",deleteTransaction)

router.get("/summary/:userId",getSummary)

export default router;