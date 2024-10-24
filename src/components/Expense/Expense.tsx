import { Expense as ExpenseType } from "../../types"
import formatCurrency from "../../utils/formatCurrency"
import IconButton from "../IconButton/IconButton"


const Expense: React.FC<ExpenseType> = ({amount, category, date, description}) => {


    const updateExpense = (): void => {
        
    }

    const deleteExpense = (): void => {
        
    }

  return (
    <div className="row d-flex align-items-center fw-bold my-4 flex-wrap">
      <div className="col-4 col-lg-2">{formatCurrency(amount)}</div>
      <div className="col-4 col-lg-2">{category}</div>
      <div className="col-4 col-lg-2 justify-self-end justify-self-lg-start">{`${date.getDay()}-${date.getMonth()+1}-${date.getFullYear()}`}</div>
      <div className="col-8 col-lg-4">{description || ""}</div>
      <div className="col-4 col-lg-2 d-flex gap-3 justify-content-end justify-content-lg-start">
        <IconButton action={updateExpense}><i className="bi bi-pencil-square fs-5 text-black"></i></IconButton>
        <IconButton action={deleteExpense}><i className="bi bi-trash3 fs-5 text-black"></i></IconButton>
      </div>
    </div>
  )
}

export default Expense
