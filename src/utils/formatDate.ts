export const dateString = (date: Date): string => {
    const day = (date.getDate()).toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}-${month}-${year}`
}

export const inputToDate = (str: string): Date => {
    const partialDate = new Date(str)
    partialDate.setDate(partialDate.getDate() + 1)
    return partialDate
}

export const dateToInput = (date: Date, validation: boolean = false): string => {
    const day = (date.getDate() + (validation ? 0 : 1)).toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${year}-${month}-${day}`
}