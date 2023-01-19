import React from 'react'
import { useBookStore } from './store/bookStore'
import shallow from 'zustand/shallow'
import Amount from './component/Amount'
import Input from './component/Input'

export default function App() {
  const { amount, title, updateAmount } = useBookStore(
    (state) => ({ amount: state.amount, title: state.title, updateAmount: state.updateAmount }),
    shallow
  )


  return (
    <div>
      <h1>{title}</h1>
      <Input />

      <Amount />
      <button onClick={() => updateAmount(2)}>Update Amount</button>

    </div>
  )
}
