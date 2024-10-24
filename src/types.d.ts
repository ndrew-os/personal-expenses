export interface Expense {
    amount: number,
    category: string,
    date: Date,
    description?: string
}

export interface ButtonProps {
    action: () => void,
    children?: React.ReactNode
}

export interface ModalInfo {
    title: string,
    isForm: boolean,
    content: React.ReactNode
    reset?: (any) => void,
    handler?: (any) => void,
}

export interface Category {
    name: string,
}