import { useState } from "react"
import "./home.scss"
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import { demoExpenses } from '../../utils/demoData';

const Home = () => {

    const [expenses, setExpenses] = useState(demoExpenses)

    return (
        <div className="container-fluid">
            <div className="container-xl">
                <header className="row d-flex justify-content-between mt-5">
                    <div className="col-10 d-flex align-items-center gap-4">
                        <i className="home__icon bi bi-coin text-black"></i>
                        <h1 className="fw-bold fs-2 text-black lh-1">EKOS FINANCE MANAGER</h1>
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
        </div>
    )
}

export default Home
