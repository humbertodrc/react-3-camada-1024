import { Outlet, useNavigate } from 'react-router-dom'

const Dashborad = () => {

  const navigate = useNavigate()

  const goToStats = () => {
    navigate('/dashboard/stats')
  }

  return (
    <>
      <h1>Dashborad</h1>
      {/* PLaceholder */}
      <Outlet />
      <button onClick={goToStats}>Go to stats</button>
    </>
  )
}
export default Dashborad