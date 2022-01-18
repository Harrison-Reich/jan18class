// import Card from "./components/Card"
// import { useState } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


// const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'James Doe', 'Jared Doe']

// const users = [
//   {
//   'Name': 'Harrison',
//   'Username': 'Harrison1',
//   'Email': 'harrison1@gmail.com'
//   },
//   {
//   'Name': 'Oliver',
//   'Username': 'Oliver1',
//   'Email': 'oliver1@gmail.com'
//   },
//   {
//   'Name': 'Abe',
//   'Username': 'Abe1',
//   'Email': 'abe1@gmail.com'
//   }
// ]

// const Userscard = (props) => {
//   return (
//     <div>
//       <h2>{props.users.Name}</h2>
//       <h3>{props.users.Username}</h3>
//       <p>{props.users.Email}</p>
//     </div>
//   )
// }

// const App = () => {

//   const [countState, setCountState] = useState({
//     count:0
//   })

//   const handleIncrementCount = () => {
//     setCountState({ count: countState.count + 1 })
//   }

//   return (
//   <>
//     {/* <h1>Harrison's Page!</h1>
//     <p>Hello! Im using React</p>
//     {users.map(users => <Userscard users={users} />)} */}
//     <h1>Count: {countState.count}</h1>
//     <button onClick={handleIncrementCount}>Click Me</button>
//   </>
//   );
// }

const App = () => {

  const [movieState, setMovieState] = useState({
    title: '',
    director: '',
    release: '',
    movie: {}
  })

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieState.movie.title}`)
      .then(({ data: movie }) => {
        console.log(movie)
        setMovieState({ ...movieState, movie })
      })
      .catch(err => console.error(err))
  }, [])

  const handleInputChange = ({ target: { name, value } }) => {
    setMovieState({ ...movieState, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(movieState)
    setMovieState({
      ...movieState,
      movie: {
        title: movieState.title,
        director: movieState.director,
        release: movieState.release
      },
      title: movieState.title,
      director: movieState.director,
      release: movieState.release
    })
  }

  return (
    <>
      <form>
        <p>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            value={movieState.title}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="director">director</label>
          <input
            type="text"
            name="director"
            value={movieState.director}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="release">release</label>
          <input
            type="text"
            name="release"
            value={movieState.release}
            onChange={handleInputChange} />
        </p>
        <p>
          <button onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      <div>
        <h1>{movieState.movie.title}</h1>
        <h1>{movieState.movie.director}</h1>
        <h1>{movieState.movie.release}</h1>,
        <h1>{movieState.movie.name}</h1>
      </div>
    </>
  )
}

// const App = () => {

//   const [movieState, setMovieState] = useState({
//     movie: {}
//   })

//   useEffect(() => {
//     axios.get('http://www.omdbapi.com/?apikey=trilogy&t=The+Avengers')
//       .then(({ data: movie }) => {
//         console.log(movie)
//         setMovieState({ ...movieState, movie })
//       })
//       .catch(err => console.error(err))
//   }, [])

//   return (
//     <>
//       {
//         movieState.movie.name ? (
//           <>
//             <h1>{movieState.movie.name}</h1>
//             <h1>{movieState.movie.species.name}</h1>
//           </>
//         ) : null
//       }
//     </>
//   )
// }


export default App