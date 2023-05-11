import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <nav className='text-center bg-purple-400 p-3'>
        <Link to='/' className='mx-2 p-2 font-medium'>Home</Link>
        <Link to='/addCoffee' className='mx-2 p-2 font-medium'>Add Coffee</Link>
        <Link to='/updateCoffee' className='mx-2 p-2 font-medium'>Update Coffee</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
