import React from "react";
import {useApp} from '../../hooks/useApp'
import './Button.css'

export function Button({tittle}) {
    const{
        isLoading,
        handleBTN
    } = useApp()

    return(
        <>
        <div>
            <button className='btn' onClick={handleBTN}>{tittle}</button>
        </div>
        </>
    )
}