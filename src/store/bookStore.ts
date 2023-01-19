import create from 'zustand';
import { persist } from 'zustand/middleware'

interface IBook {
    amount: number
    title: string,
    updateAmount: (newAmount: number) => void,
    updateTitle: (title: string) => void

}

export const useBookStore = create<IBook>()(
    persist(
        (set, get) => ({
            amount: 0,
            title: "",
            updateAmount: (newAmount: number) => set(prev => ({ ...prev, amount: prev.amount + newAmount })),
            updateTitle: (title: string) => set({ title }),
        }),
        {
            name: 'book',
            serialize: (state) => btoa(JSON.stringify(state)),
            deserialize: (str) => JSON.parse(atob(str)),

        }
    )
);