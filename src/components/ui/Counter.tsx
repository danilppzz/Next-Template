'use client'
import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <div className='flex gap-2 items-center'>
                <button className='w-8 h-8 p-auto text-white/40 rounded-lg bg-c-300' onClick={decrease}>-</button>
                <button className='w-14 h-8 p-auto text-white/40 rounded-lg bg-c-300' onClick={increment}>{count}</button>
                <button className='w-8 h-8 p-auto text-white/40 rounded-lg bg-c-300' onClick={increment}>+</button>
                <button className='min-w-8 h-8 p-auto px-3 text-white/40 rounded-lg bg-c-300 hover:bg-c-400/65 transition-all ease-in-out duration-200' onClick={reset}>reset</button>
            </div>
        </div>
    );
};

export default Counter;
