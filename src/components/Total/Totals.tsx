import formatCurrency from "../../utils/formatCurrency"

const Totals: React.FC<{ amount: number, text: string }> = ({ amount, text }) => {
    return (
        <div className="w-100 bg-black text-white d-flex flex-column p-4 rounded">
            <span className="fs-1">{formatCurrency(amount)}</span>
            <span>{text}</span>
        </div>
    )
}

export default Totals
