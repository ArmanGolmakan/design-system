import Button from './components/Button';

import './App.css'

function App() {

  return (
    <>
      <section id="center" className='bg-gray-300'>
        <div>
          <p>This is a simple React button from UI Library.</p>
          <Button size='lg' variant='primary'>Click me</Button>
        </div>
      </section>
    </>
  )
}

export default App
