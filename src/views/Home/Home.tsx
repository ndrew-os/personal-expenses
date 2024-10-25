import { useEffect } from "react"
import "./home.scss"
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import Button from "../../components/Button/Button";
import { defaultExpense } from '../../data/defaultValues';
import { Expense } from '../../types';
import Modal from "../../components/Modal/Modal";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addItem, getItems, setModal } from "../../store/slices/expenseSlice";
import Totals from "../../components/Total/Totals";
import CustomPieChart from '../../components/CustomBarChart/CustomBarChart';
import noData from "./../../assets/img/nodata.avif"

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    //const [expenses, setExpenses] = useState(demoExpenses)
    const expenses = useSelector((state: RootState) => state.expenses.expenses)
    const modalInfo = useSelector((state: RootState) => state.expenses.modal)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    const newExpense = (): void => {
        dispatch(setModal({
            title: "Create Expense",
            isForm: true,
            content: (<ExpenseForm value={defaultExpense} handler={(expense: Expense): void => {
                dispatch(addItem(expense))
            }} />)
        }))
    }

    const aggregateExpensesByCategory = (expenses: Expense[]) => {
        return expenses.reduce((acc, expense) => {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount * 1;
            return acc;
        }, {} as Record<string, number>);
    };


    const aggregatedData = Object.entries(aggregateExpensesByCategory(expenses)).map(([category, amount]) => ({
        category,
        amount,
    }));

    return (
        <div className="container-fluid position-relative mb-5 mb-lg-0">
            <div className="container-xl">
                <header className="row d-flex justify-content-between align-items-center mt-5">
                    <div className="col-10 d-flex align-items-center gap-4">
                        <i className="home__icon bi bi-coin text-black"></i>
                        <h1 className="fw-bold fs-2 text-black lh-1">EKOS FINANCE MANAGER</h1>
                    </div>
                    <div className="col-2 d-none d-md-flex justify-content-end">
                        <Button triggerModal={true} targetModal="#formModal" action={newExpense}>New</Button>
                    </div>
                </header>
                <div className="row d-flex mt-5">
                    <div className="col-12 col-lg-4 d-flex flex-column gap-3">
                        <div className="w-100">
                            <Totals amount={expenses.reduce((prev, next) => prev + next.amount * 1, 0)} text="Total Expenses" />
                        </div>
                        <div className="">
                            {expenses.length > 0 && (<CustomPieChart data={aggregatedData} />)}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-column mb-5">
                        <div></div>
                        {expenses.length > 0 ? (<ExpensesList expensesList={expenses} />) : (<div className="d-flex flex-column justify-content-center align-items-center"><img className="w-75" src={noData} alt="" /><span className="fs-2">Your expenses list is empty</span></div>)}
                    </div>
                </div>
            </div>
            <div className="d-inline-block d-md-none position-fixed home__create">
                <Button triggerModal={true} targetModal="#formModal" action={newExpense}><i className="bi bi-plus-lg"></i></Button>
            </div>
            <Modal {...modalInfo} />
        </div>
    )
}

export default Home
