
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-700 px-6 py-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold">
          Universitas Jayanusa
        </h2>

        <div className="flex flex-wrap gap-5">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>

          <Link to="/pmb" className="hover:text-blue-200">
            PMB
          </Link>

          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
