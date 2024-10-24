import { render, screen } from '@testing-library/react';
import ExpensesList from './ExpensesList';
import { demoExpenses } from '../../utils/demoData';
import formatCurrency from '../../utils/formatCurrency';

describe('Expenses List Component', () => {
    test('Renders all expenses with correctly formatted information', () => {
        render(<ExpensesList expensesList={demoExpenses} />);

        demoExpenses.forEach(({amount, category, date, description }) => {

            expect(screen.getAllByText((content) => content.includes(formatCurrency(amount).replace("$", "").trim())
            ).length).toBeGreaterThan(0)
            expect(screen.getAllByText(category).length).toBeGreaterThan(0)
            expect(screen.getAllByText(`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`).length).toBeGreaterThan(0)
            if (description) expect(screen.getAllByText(description).length).toBeGreaterThan(0)

        })
    })
})
