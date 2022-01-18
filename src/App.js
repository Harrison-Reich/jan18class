import Card from "./components/Card"
import { useState } from 'react'


const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'James Doe', 'Jared Doe']

const users = [
  {
  'Name': 'Harrison',
  'Username': 'Harrison1',
  'Email': 'harrison1@gmail.com'
  },
  {
  'Name': 'Oliver',
  'Username': 'Oliver1',
  'Email': 'oliver1@gmail.com'
  },
  {
  'Name': 'Abe',
  'Username': 'Abe1',
  'Email': 'abe1@gmail.com'
  }
]

const Userscard = (props) => {
  return (
    <div>
      <h2>{props.users.Name}</h2>
      <h3>{props.users.Username}</h3>
      <p>{props.users.Email}</p>
    </div>
  )
}

const App = () => {

  const [countState, setCountState] = useState({
    count:0
  })

  const handleIncrementCount = () => {
    setCountState({ count: countState.count + 1 })
  }

  return (
  <>
    {/* <h1>Harrison's Page!</h1>
    <p>Hello! Im using React</p>
    {users.map(users => <Userscard users={users} />)} */}
    <h1>Count: {countState.count}</h1>
    <button onClick={handleIncrementCount}>Click Me</button>
  </>
  );
}

export default App