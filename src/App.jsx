import movies from './assets/data/movieList.json'
import actors from './assets/data/actorList.json'
import directors from './assets/data/directorList.json'
import AutoComplete from './Pages/AutoComplete/AutoComplete'
/** TODO:
 *
 * -- Call the API to get the data (from json files) :
 * -- Load all the data into the state
 * -- Pass the data to the components
 *
 *
 */
function App() {
  const data = { movies, actors, directors }
  return (
    <div className='bg-slate-300 min-h-screen '>
      Info: {data.movies.length} movies, {data.actors.length} actors,{' '}
      {data.directors.length} directors
      <section className='p-6 border'>
        <AutoComplete
          actors={data.actors.flat()}
          movies={data.movies.flat()}
          directors={data.directors.flat()}
        />
      </section>
    </div>
  )
}

export default App
