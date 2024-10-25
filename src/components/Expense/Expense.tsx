import { useDispatch } from "react-redux"
import { Expense as ExpenseType } from "../../types"
import formatCurrency from "../../utils/formatCurrency"
import IconButton from "../IconButton/IconButton"
import "./expense.scss"
import { AppDispatch } from "../../store/store"
import { editItem, setModal } from "../../store/slices/expenseSlice"
import ExpenseForm from "../ExpenseForm/ExpenseForm"


const Expense: React.FC<ExpenseType> = ({ id, amount, category, date, description }) => {

  const dispatch = useDispatch<AppDispatch>()

  const updateExpense = (): void => {
    dispatch(setModal({
      title: "Update Expense",
      isForm: true,
      content: (<ExpenseForm value={{ amount, category, date, description }} handler={(expense: ExpenseType): void => {
        if (id) dispatch(editItem({ itemId: id, item: expense }))
      }} />)
    }))
  }

  const deleteExpense = (): void => {

  }

  return (
    <div className="row d-flex align-items-center fw-bold my-4 flex-wrap expense">
      <div className="col-4 col-lg-2">{formatCurrency(amount)}</div>
      <div className="col-4 col-lg-2">{category}</div>
      <div className="col-4 col-lg-2 justify-self-end justify-self-lg-start">{date}</div>
      <div className="col-8 col-lg-4">{description || ""}</div>
      <div className="col-4 col-lg-2 d-flex gap-3 justify-content-end justify-content-lg-start">
        <IconButton triggerModal={true} targetModal="#formModal" action={updateExpense}><i className="bi bi-pencil-square fs-5 text-black"></i></IconButton>
        <IconButton action={deleteExpense}><i className="bi bi-trash3 fs-5 text-black"></i></IconButton>
      </div>
    </div>
  )
}

export default Expense
