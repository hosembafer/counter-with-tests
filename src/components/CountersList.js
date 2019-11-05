import React from 'react';
import Counter from "./Counter";
import {computeRandomNumber} from "../helper";

export default function CountersList({
    counters,
    addCounter,
    updateCounter,
}) {
    return <div>
        <button onClick={() => addCounter()} id={'new-counter'}>Add new Counter</button>
        <hr />
        {counters.map((counter, index) => {
            return <Counter
                key={index}
                value={counter}
                onIncrement={() => updateCounter(index, counter + 1)}
                onDecrement={() => updateCounter(index, counter - 1)}
                onRandomize={() => updateCounter(index, computeRandomNumber())}
            />;
        })}
    </div>;
}
