import movies from '../assets/data/movieList.json'
import actors from '../assets/data/actorList.json'
import directors from '../assets/data/directorList.json'

//High timeouts to simulate lag

const moviePromise = new Promise((resolve, reject) =>
  setTimeout(() => {
    console.log('Resolving: directorPromise ')
    resolve(movies)
  }, 80)
)

const actorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Resolving: actorPromise ')
    resolve(actors)
  }, 200)
})

const directorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Resolving: moviePromise ')
    resolve(directors)
  }, 3000)
})

export const getMovies = async () => moviePromise
export const getActors = async () => actorPromise
export const getDirectors = async () => directorPromise
