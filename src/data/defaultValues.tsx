import { Category, Expense, ModalInfo } from "../types";
import { dateString } from "../utils/formatDate";

export const defaultModalInfo: ModalInfo = {
    title: '',
    isForm: false,
    content: (<></>)
}

export const defaultExpense: Expense = {
    amount: 0,
    category: '',
    date: dateString(new Date()),
    description: ''
}