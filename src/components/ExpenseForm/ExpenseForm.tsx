import { useEffect, useState } from "react"
import { Expense, Category } from '../../types';
import { demoCategories } from "../../data/demoData"
import { dateString, dateToInput, inputToDate } from "../../utils/formatDate";
import "./expenseForm.scss"
import { defaultExpense } from "../../data/defaultValues";

const ExpenseForm: React.FC<{ value: Expense, handler: (expense: Expense) => void, discard?: () => void }> = ({ value, handler, discard }) => {

    const [data, setData] = useState(defaultExpense)

    useEffect(() => {
        setData(value)
    }, [value])

    const setAtt = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, att: string): void => {
        const value = e.target.value
        setData(prev => ({ ...prev, [att]: att != 'date' ? value : inputToDate(value) }))
    }

    const handlePriceFormat = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: any = e.target.value.replace(/^0+/, '')
        setData(prev => ({ ...prev, amount: newValue }))
    }

    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        handler(data)
        const closeBtn: HTMLButtonElement | null = document.querySelector('#close-form')
        if (closeBtn) closeBtn.click()
    }

    const dismiss = (): void => {
        setData(defaultExpense)
        if (discard) discard()
    }

    return (
        <form onSubmit={submit} className="needs-validation">
            <div className="mb-3">
                <label htmlFor="amountInput" className="form-label">Amount</label>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend">$</span>
                    <input type="number" className="form-control" aria-describedby="inputGroupPrepend" id="amountInput" value={data.amount} onChange={handlePriceFormat} required min={1} />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="categoryInput" className="form-label">Category</label>
                <select className="form-select" id="categoryInput" onChange={e => setAtt(e, 'category')} value={data.category} required>
                    <option disabled value="">Choose...</option>
                    {demoCategories.map((item: Category, index: number) => (<option key={index} value={item.name}>{item.name}</option>))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="dateInput" className="form-label">Date</label>
                <input type="date" id="dateInput" className="form-control" value={dateToInput(data.date)} onChange={e => setAtt(e, 'date')} required max={dateToInput(dateString(new Date()))} />
            </div>
            <div className="mb-3">
                <label htmlFor="descriptionInput">Description</label>
                <input type="text" id="descriptionInput" value={data.description} onChange={e => setAtt(e, 'description')} className="form-control" />
            </div>
            <div className="mb-3 d-flex gap-2 justify-content-lg-end">
                <button type="submit" className="btn bg-black text-white">Save</button>
                <button id="close-form" type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={dismiss}>Discard</button>
            </div>


        </form>
    )
}

export default ExpenseForm
