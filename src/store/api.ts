import axios from "axios"
import { Expense } from "../types";

const isProd: boolean = true
const serverUri = isProd ? "https://s1.workify.club/expenses": "http://localhost:3040/expenses"

export const fetchExpenses = () => axios.get(`${serverUri}`);
export const createExpense = (item: Expense) => axios.post(`${serverUri}`, item);
export const updateExpenses = (itemId: number, item: Expense) => axios.patch(`${serverUri}/${itemId}`, item);
export const deleteExpense = (itemId: number) => axios.delete(`${serverUri}/${itemId}`);