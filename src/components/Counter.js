import React from 'react';

export default function Counter({
    value,
    onIncrement,
    onDecrement,
    onRandomize,
}) {
    return <div className={'Counter'}>
        Counter:
        <div>{value}</div>
        <button onClick={() => onIncrement()} className={'increment'}>Increment</button>
        <button onClick={() => onDecrement()} className={'decrement'}>Decrement</button>
        <button onClick={() => onRandomize()} className={'randomize'}>Randomize</button>
    </div>;
}
