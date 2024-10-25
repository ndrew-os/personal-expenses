export const dateString = (date: Date): string => {
    const day = (date.getDate()).toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}-${month}-${year}`
}

export const inputToDate = (str: string): string => {
    const partialDate = new Date(str)
    partialDate.setDate(partialDate.getDate() + 1)
    return dateString(partialDate)
}

export const dateToInput = (dateStr: string): string => {
    const dayParts = dateStr.split('-')
    return `${dayParts[2]}-${dayParts[1]}-${dayParts[0]}`
}