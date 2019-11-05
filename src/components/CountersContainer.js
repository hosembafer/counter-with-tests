import React, {useState, useEffect, useCallback} from 'react';
import SomeService from "../services/SomeService";
import CountersList from "./CountersList";

export default function CountersContainer() {
    const [counters, setCounters] = useState([]);

    const addCounter = useCallback(async () => {
        const {data} = await SomeService.getNumber();
        setCounters(counters => ([
            ...counters,
            data,
        ]));
    }, [setCounters]);

    const updateCounter = useCallback((index, value) => {
        setCounters(counters => counters.map((counterValue, counterIndex) => counterIndex === index ? value : counterValue));
    }, [setCounters]);

    useEffect(() => {
        addCounter();
    }, [addCounter]);

    return <CountersList
        counters={counters}
        addCounter={addCounter}
        updateCounter={updateCounter}
    />;
}
