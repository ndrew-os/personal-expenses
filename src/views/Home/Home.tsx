import { useState } from "react"
import "./home.scss"
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import { demoExpenses } from '../../data/demoData';
import Button from "../../components/Button/Button";
import { defaultExpense, defaultModalInfo } from '../../data/defaultValues';
import { Expense, ModalInfo } from '../../types';
import Modal from "../../components/Modal/Modal";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";

const Home = () => {

    const [expenses, setExpenses] = useState(demoExpenses)
    const [modalInfo, setModalInfo] = useState(defaultModalInfo)

    const newExpense = (): void => {
        setModalInfo({
            title: "Create Expense",
            isForm: true,
            content: (<ExpenseForm handler={(expense: Expense): void => {
                setExpenses(prev => [expense, ...prev])
            }}/>)
        })
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
                        <Button action={newExpense}>New</Button>
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
