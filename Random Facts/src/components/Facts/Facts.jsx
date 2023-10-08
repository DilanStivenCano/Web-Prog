import React from "react";
import {useApp} from '../../hooks/useApp'
import './Facts.css'

export function Fact() {
    const{
        catFact, 
        catImg,
        error,
        isLoading,
        isFirstTime
    } = useApp(); 

    if(error){
        return(<p>{error}</p>)
    }

    if (isLoading) {
        return (
            <div>
            <img src="https://media.tenor.com/NjbLQCvQoC8AAAAC/bongo-cat.gif" className="gif"/>
            </div>
        )
      }

    if(isFirstTime.current){
        return(
            <p>Find a meowntastic fact clicking the button!</p>
        )
    }

    return(
        <>
        <div className="factContainer">
        <img className="imgFact" src={catImg}/>
        <p className="textFact">{catFact}</p>
        </div>
        </>
    )

}