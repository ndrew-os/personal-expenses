import { useEffect, useState } from "react"
import "./home.scss"
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import Button from "../../components/Button/Button";
import { defaultExpense, defaultModalInfo } from '../../data/defaultValues';
import { Expense } from '../../types';
import Modal from "../../components/Modal/Modal";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addItem, getItems, setModal } from "../../store/slices/expenseSlice";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    //const [expenses, setExpenses] = useState(demoExpenses)
    const expenses = useSelector((state: RootState) => state.expenses.expenses)
    const isLoading = useSelector((state: RootState) => state.expenses.isLoading)
    const error = useSelector((state: RootState) => state.expenses.error)
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

    return (
        <div className="container-fluid position-relative">
            <div className="container-xl">
                <header className="row d-flex justify-content-between align-items-center mt-5">
                    <div className="col-10 d-flex align-items-center gap-4">
                        <i className="home__icon bi bi-coin text-black"></i>
                        <h1 className="fw-bold fs-2 text-black lh-1">EKOS FINANCE MANAGER</h1>
                    </div>
                    <div className="col-2 d-none d-md-flex justify-content-end">
                        <Button triggerModal={true} targetModal="#formModal" action={newExpense}>New</Button>
                    </div>
                    <div className="d-inline-block d-md-none position-fixed home__create">
                        <Button action={newExpense}><i className="bi bi-plus-lg"></i></Button>
                    </div>
                </header>
                <div className="row d-flex">
                    <div className="col-12 col-lg-4"></div>
                    <div className="col-12 col-lg-8 d-flex flex-column pt-5 mb-5">
                        <div></div>
                        <ExpensesList expensesList={expenses} />
                    </div>
                </div>
            </div>
            <Modal {...modalInfo} />
        </div>
    )
}

export default Home
