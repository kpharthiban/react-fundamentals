import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Class Components - can create multiple components and reuse them multiple times
// Traditional way of declaring Class Components
// class ClassComponent extends React.Component {
//   render() {
//     return <h2>Class Component</h2>
//   }
// }

// Latest way of creating Class Components - 1
// function App() {}

// Creating Card Component
const Card = ({ title }) => {
  // Creating State - using Hook (useState)
  const [hasLiked, setHasLiked] = useState(false); // const [params] = useState(initialState?)

  return (
    <div className='card'>
      <h2>{ title }</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
          {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

// Latest way of creating Class Components - 2 (using arrow function)
const App = () => {
  return (
    <div className='card-container'>
      {/* Using Card Components */}
      <Card title="Star Wars" rating={5} isCool={true} actors={[{ name: 'Actors' }]} /> {/* Passing props (properties) to component - need to be received by the components as arguments */}
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  )
}

export default App
