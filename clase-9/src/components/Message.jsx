import { useEffect } from 'react'

const Message = () => {

  const onMouseMove = (event) => {
    console.log(event);
   }

  useEffect(() => {
    // console.log('Se montó el componente Message');
    window.addEventListener('mousemove', onMouseMove)
  

    return () => {
      // console.log('Se desmontó el componente Message');
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <p>Usuario ya existe</p>
  )
}
export default Message