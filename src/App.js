const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'James Doe', 'Jared Doe']

const App = () => {
  return (
    <ul>
      {names.map(name => <li>{name}</li>)}
    </ul>
  )
}

export default App
