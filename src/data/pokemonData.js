import { getRandomNumbers } from '../helpers/getRandomNumbers'
export const pokemonsData = (cant = 8) => {
  const pokemonsIds = getRandomNumbers(cant)
  const pokeData = pokemonsIds.map((id, index) => ({ id: index + 1, name: '', imgId: id }))
  return pokeData
}
