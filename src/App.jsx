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
  return (
    <div>
      <h2>{ title }</h2>
    </div>
  )
}

// Latest way of creating Class Components - 2 (using arrow function)
const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      {/* Using Card Components */}
      <Card title="Star Wars" rating={5} isCool={true} actors={[{ name: 'Actors' }]} /> {/* Passing props (properties) to component - need to be received by the components as arguments */}
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  )
}

export default App
