import React from 'react'
import { useBookStore } from '../store/bookStore'
import shallow from 'zustand/shallow'

export default function Input() {
    const { title, updateTitle } = useBookStore(
        (state) => ({ title: state.title, updateTitle: state.updateTitle }),
        shallow
    )
    return (
        <div>
            <input value={title} onChange={(e) => updateTitle(e.target.value)} />
        </div>
    )
}
