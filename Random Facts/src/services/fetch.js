const factURL = 'https://catfact.ninja/fact'
const ImgURL = 'https://cataas.com/cat/says/'

export const fetchFact = async () => {
  return fetch(factURL)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from Fact API')
      }
      return res.json()
    })
    .then((data) => {
      const newFact = data.fact
      return newFact
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}

export const fetchImg = async ({ newImgText }) => {
  return fetch(`${ImgURL}${newImgText}?json=true`) 
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from Image API')
      }
      return res.json()
    })
    .then((data) => {
      const newImg = 'https://cataas.com' + data.url
      return newImg
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}