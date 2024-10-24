import { Expense as ExpenseType} from "../../types"
import Expense from "../Expense/Expense"
import "./expensesList.scss"

type Props = {
    expensesList: ExpenseType[]
}

const ExpensesList: React.FC<Props> = ({expensesList}) => {


  return (
    <div className="container-fluid d-flex flex-column overflow-y-scroll expense-list">
      {expensesList.map((expense, index) => (<Expense key={index} {...expense} />))}
    </div>
  )
}

export default ExpensesList
