import { getMovies, getActors, getDirectors } from './api'
//TODO: Add signal parameter for aborting fetch call

export const fetchData = async () => {
  // Order in array matters so categories are saved in the same order in state
  const allData = [
    getActors().then(res => res),
    getMovies().then(res => res),
    getDirectors().then(res => res),
  ]

  return await Promise.all(allData)
}
