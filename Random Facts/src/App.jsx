import React from "react";
import { Header, Button, Fact } from "./components";
import { CatContextProvider } from "./Context/CatContextProvider";
import '../style.css'

export function App() {
    return(
        <div className="divContainer">
            <Header />
            <CatContextProvider>
            <Fact />
            <Button tittle='Click meow!' />
            </CatContextProvider>
        </div>
    )
}