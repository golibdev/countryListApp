import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-light bg-white rounded shadow-sm">
            <div className="container">
               <Link className="navbar-brand fw-bold" to="/">
                  CountriesApp
               </Link>
            </div>
         </nav>
      </div>
   )
}
