import { Category, Expense } from "../types";

export const demoExpenses: Expense[] = [
    {
        amount: 23500,
        category: "Food",
        date: '23-03-2024',
        description: "Lunch in Palmas restaurant"
    },
    {
        amount: 40500.33,
        category: "Transport",
        date: '23-03-2023',
        description: "Taxi tickets for airport"
    },
    {
        amount: 15000,
        category: "Food",
        date: '12-12-2024',
        description: "Supermarket purchase at WholeFoods"
    },
    {
        amount: 78500,
        category: "Home",
        date: '23-03-2023',
        description: "Monthly apartment rent"
    },
    {
        amount: 5600.75,
        category: "Food",
        date: '23-03-2023',
        description: "Coffee at Starbucks"
    },
    {
        amount: 4300,
        category: "Transport",
        date: '23-03-2023',
        description: "Parking fees downtown"
    },
    {
        amount: 18999.99,
        category: "Others",
        date: '23-03-2023',
        description: "Purchase of new headphones"
    },
]

export const demoCategories: Category[] = [
    {
        name: "Food"
    },
    {
        name: "Transport"
    },
    { 
        name: "Entertainment",
    },
    { 
        name: "Health",
    },
    { 
        name: "Clothing",
    },
    { 
        name: "Home",
    },
    { 
        name: "Others",
    },
]
