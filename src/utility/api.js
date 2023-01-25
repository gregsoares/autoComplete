import movies from '../assets/data/movieList.json'
import actors from '../assets/data/actorList.json'
import directors from '../assets/data/directorList.json'

const moviePromise = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(movies)
  }, 80)
)

const actorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(actors)
  }, 80)
})

const directorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(directors)
  }, 80)
})

export const getMovies = async () => moviePromise
export const getActors = async () => actorPromise
export const getDirectors = async () => directorPromise
