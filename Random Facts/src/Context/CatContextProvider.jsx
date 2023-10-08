import { CatContext } from './CatContext'
import React, { useState, useRef } from 'react'

export function CatContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [catImg, setCatImg] = useState('')
  const [catFact, setCatFact] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const isFirstTime = useRef(true)

  return (
    <CatContext.Provider value={{
      error,
      setError,
      catFact,
      setCatFact,
      catImg,
      setCatImg,
      isLoading,
      setIsLoading,
      isFirstTime
    }}
    >
      {children}
    </CatContext.Provider>
  )
}