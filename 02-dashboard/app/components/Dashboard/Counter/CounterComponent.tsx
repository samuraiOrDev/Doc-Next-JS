"use client"
import React, { useState } from 'react'

export const CounterComponent = () => {
  const [count, setCount] = useState(10)
  const addCount = () => setCount(count + 1)
  const removeCount = () => setCount(count - 1)
  return (
    <div className='flex items-center mt-2'>
      <button className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2' onClick={removeCount}>-1</button>
      <span className='text-9xl'>{count}</span>
      <button className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2' onClick={addCount}>+1</button>
    </div>
  )
}
