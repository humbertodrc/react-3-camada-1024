import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Title from './components/Title'

function App() {

  return (
    <>
      <Navbar />
      <main>
      

      <Title />
      <Button text='text por medio de props' numero={10} />
        <Button text='button 2' numero={12} />
        

      <Button text='otro dato' numero={5} />



      <Card>
       <Button text='button 1' numero={1} />
      </Card>


      </main>
      
    </>
  )
}

export default App
