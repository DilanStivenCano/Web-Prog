import React from "react";
import '../style.css'

export function App() {
    return (
        <>
            <header>
                <h1>To Do List</h1>
                <input type="text" placeholder="Add your task" />
                <button>Add</button>
            </header>
            
            <main>
                <ul className="List">
                    <li className="Item-List">
                        <input type="checkbox" name="" id="" />
                        <h3>Taks name</h3>
                        <button>Delete</button>
                    </li>
                    <li className="Item-List">
                        <input type="checkbox" name="" id="" />
                        <h3>Taks name</h3>
                        <button>Delete</button>
                    </li>
                    <li className="Item-List">
                        <input type="checkbox" name="" id="" />
                        <h3>Taks name</h3>
                        <button>Delete</button>
                    </li>
                    <li className="Item-List">
                        <input type="checkbox" name="" id="" />
                        <h3>Taks name</h3>
                        <button>Delete</button>
                    </li>
                    <li className="Item-List">
                        <input type="checkbox" name="" id="" />
                        <h3>Taks name</h3>
                        <button>Delete</button>
                    </li>
                </ul>
            </main>
            

        </>
    )
}