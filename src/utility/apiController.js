import { getMovies, getActors, getDirectors } from './api'
export const fetchData = async () => {
  //TODO: Add signal parameter for aborting fetch call
  // Order in array matters so categories are saved in the same order in state
  const allData = [
    getActors().then(res => res),
    getMovies().then(res => res),
    getDirectors().then(res => res),
  ]

  return await Promise.all(allData)
}
