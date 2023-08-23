import React from "react";

export function Btn({label}){

  const styleBtn = {
    fontFamily: 'Helvetica',
    width: '6rem',
    margin: '1rem',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#444',
    fontSize: '1rem',
    padding: '1rem 1.5rem',
    border: '2px solid #eee',
    borderRadius: '.5rem',
    cursor: 'pointer',
  }

  return(
    <>
    <Btn style={styleBtn}>{label}</Btn>
    </>
  )
}