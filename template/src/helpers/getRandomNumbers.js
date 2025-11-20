export const getRandomNumbers = (cant) => {
  const arrNumbers = []
  for (let i = 0; i < cant; i++) {
    let numberRandom = Math.floor(Math.random() * 898)
    const existNumber = arrNumbers.find((num) => num === numberRandom)
    if (!existNumber && numberRandom !== 0) {
      arrNumbers.push(numberRandom)
    }
  }
  return arrNumbers
}
