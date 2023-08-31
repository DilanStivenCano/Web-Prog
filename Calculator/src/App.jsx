import React, {useState} from "react";
import {Header, Button, Counter,} from "./components";

export function App(){
    const [counterValue, setValue] = useState(0);

    function counterNV(algo){
        const newValue = counterValue + algo;
        if (newValue >= 0) {
            setValue(newValue)
        }
    }
    return(
        <>
            <Header />
            <Counter value={counterValue}/>
            <Button type='substract' label='-' onClick={() => counterNV(-1)}/>
            <Button type='add' label='+' onClick={() => counterNV(+1)}/>
        </>
    )
}