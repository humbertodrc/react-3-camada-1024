import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'


const Product = () => {

  const { id } = useParams()
  
  // Con el id podemos traer la información del producto de una api

  return (
    <Layout>Product con el id {id}</Layout>
  )
}
export default Product