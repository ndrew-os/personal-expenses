export interface Expense {
    amount: number,
    category: string,
    date: Date,
    description?: string
}

export interface ButtonProps {
    action: () => void,
    text?: string,
    children?: React.ReactNode
}