import React from 'react'
import { useBookStore } from '../store/bookStore'
import shallow from 'zustand/shallow'

export default function Component() {
    const { amount } = useBookStore(
        (state) => ({ amount: state.amount }),
        shallow
    )
    return (
        <h1>{amount}</h1>
    )
}
