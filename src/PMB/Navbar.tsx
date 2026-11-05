
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1rem', 
    backgroundColor: '#3575fe' 
    }}>
      <h2>Universitas Jayanusa</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pmb">PMB</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
