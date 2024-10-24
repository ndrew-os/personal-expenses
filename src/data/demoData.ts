import { Category, Expense } from "../types";

export const demoExpenses: Expense[] = [
    {
        amount: 23500,
        category: "Food",
        date: new Date(),
        description: "Lunch in Palmas restaurant"
    },
    {
        amount: 40500.33,
        category: "Transport",
        date: new Date(),
        description: "Taxi tickets for airport"
    },
    {
        amount: 15000,
        category: "Food",
        date: new Date(),
        description: "Supermarket purchase at WholeFoods"
    },
    {
        amount: 78500,
        category: "Home",
        date: new Date(),
        description: "Monthly apartment rent"
    },
    {
        amount: 5600.75,
        category: "Food",
        date: new Date(),
        description: "Coffee at Starbucks"
    },
    {
        amount: 4300,
        category: "Transport",
        date: new Date(),
        description: "Parking fees downtown"
    },
    {
        amount: 18999.99,
        category: "Others",
        date: new Date(),
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
