export interface Expense {
    id?: number,
    amount: number,
    category: string,
    date: string,
    description?: string
}

export interface ButtonProps {
    action: () => void,
    triggerModal?: boolean,
    targetModal?: string,
    children?: React.ReactNode
}

export interface ModalInfo {
    title: string,
    isForm: boolean,
    content: React.ReactNode,
    resetText?: string,
    handlerText?: string,
    reset?: (any) => void,
    handler?: (any) => void,
}

export interface Category {
    name: string,
}