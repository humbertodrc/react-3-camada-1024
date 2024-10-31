import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // let counter = 0
  
  const handleAddCart = () => {
    setCounter(counter + 1)
    // counter++
    // console.log(counter);
  }
  
  const handleRemoveCart = () => {
    setCounter(counter - 1)
    // counter--
    // console.log(counter);
  }

  return (
    <>
      <button onClick={handleAddCart}>+</button>
      <span>{counter}</span>
      <button onClick={handleRemoveCart}>-</button>
    </>
  )
}
export default Counter