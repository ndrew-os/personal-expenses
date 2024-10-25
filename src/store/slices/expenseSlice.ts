import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Expense, ModalInfo } from '../../types';
import { createExpense, deleteExpense, fetchExpenses, updateExpenses } from '../api';
import { defaultModalInfo } from '../../data/defaultValues';

interface ExpenseState {
    expenses: Expense[],
    isLoading: boolean,
    error: string | null,
    modal: ModalInfo
}

const initialState: ExpenseState = {
    expenses: [],
    isLoading: false,
    error: null,
    modal: defaultModalInfo
};

export const getItems = createAsyncThunk('expenses/getExpenses', async () => {
    const response = await fetchExpenses();
    return response.data;
});

export const addItem = createAsyncThunk('expenses/addExpense', async (item: Expense) => {
    const response = await createExpense(item);
    return response.data;
});

export const editItem = createAsyncThunk('expenses/editExpense', async ({ itemId, item }: { itemId: number; item: Expense }) => {
    const response = await updateExpenses(itemId, item);
    return response.data;
});

export const removeItem = createAsyncThunk('items/removeItem', async (itemId: number) => {
    await deleteExpense(itemId);
    return itemId;
});

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.expenses = action.payload;
            })
            .addCase(getItems.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch expenses';
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.expenses = [action.payload, ...state.expenses];
            })
            .addCase(editItem.fulfilled, (state, action) => {
                const index = state.expenses.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.expenses[index] = action.payload;
                }
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.expenses = state.expenses.filter(item => item.id !== action.payload);
            });
    }
});

export const { setModal } = expenseSlice.actions
export default expenseSlice.reducer;
