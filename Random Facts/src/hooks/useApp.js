import { useCallback, useEffect, useContext } from "react";
import { fetchFact, fetchImg } from "../services/fetch";
import debounce from 'just-debounce-it'
import { CatContext } from "../Context/CatContext";

export const useApp = () =>{
    const context = useContext(CatContext)

  if (!context) {
    throw new Error('This component sould be within a CatContextrovider Component')
  }
  const {
    error,
    setError,
    catFact,
    setCatFact,
    catImg,
    setCatImg,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

    useEffect(() =>{
        if (isFirstTime.current) {
          isFirstTime.current = (catFact === ''); 
        }
    },[catFact])

    const handleBTN = () =>{
        setIsLoading(true)
        getFact()
    }

    const getFact = useCallback(
        debounce(() =>{
          fetchFact().then(newFact =>{
                setCatFact(newFact)
                const newImgText = newFact.split(' ').slice(0, 4).join(' ')
                getImg(newImgText);  
            }).catch(e => setError(e))
        }, 500), [])

    const getImg = useCallback(
        debounce((newImgText) =>{
          fetchImg({newImgText}).then(newImg => setCatImg(newImg))
          .catch(e => setError(e)).finally(() => setIsLoading(false))
        },500), [])

    useEffect(() => {
        console.log('getFact volvió a definirse')
      }, [getFact])
    
      useEffect(() => {
        console.log('getImg volvió a definirse')
      }, [getImg]); 

      return (
        {
          error,
          catImg,
          catFact,
          isLoading,
          isFirstTime,
          handleBTN
        }
      )
}