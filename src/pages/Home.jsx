import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'

export const Home = () => {

   const [ countries, setCountries ] = useState([])
   const [ countryName, setCountryName ] = useState('')

   useEffect(() => {
      const getdata = async () => {
         try {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            setCountries(res.data)
         } catch (err) {}
      }

      getdata()
   }, [countries])

   const filterCountry = countries.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()))

   return (
      <div className='container mt-5 mb-5'>
         <div className="mb-3">
            <input type="text" className="form-control" value={countryName} onChange={e => setCountryName(e.target.value)} />
         </div>
            <div className='row'>
            {countryName.length === 0 ? (
               countries.map(country => (
                  <div className='col-lg-3 col-md-4 col-sm-6 mb-4' key={country.cca3}>
                     <Link className='card border border-dark rounded shadow text-decoration-none' to={`/country/${country.cca3}`}>
                        <div className='card-img'>
                           <img className='img-fluid w-100 border border-bottom-dark' style={{ height: '180px' }} src={`${country.flags.png}`} alt='flag' />
                        </div>
                        <div className='card-body'>
                           <p className='mb-3 text-dark'><b>Davlat nomi</b>: {country.name.common}</p>
                           <p className='mb-3 text-dark'><b>Davlat aholisi</b>: {country.population.toLocaleString()}</p>
                           <p className='mb-3 text-dark'><b>Davlat poytaxti</b>: {country.capital}</p>
                        </div>
                     </Link>
                  </div>
               ))
               ):(
                  filterCountry.map(country => (
                     <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <Link className='card border border-dark rounded shadow text-decoration-none' to={`/country/${country.cca3}`}>
                           <div className='card-img'>
                              <img className='img-fluid w-100 border border-bottom-dark' style={{ height: '180px' }} src={`${country.flags.png}`} alt='flag' />
                           </div>
                           <div className='card-body'>
                              <p className='mb-3 text-dark'><b>Davlat nomi</b>: {country.name.common}</p>
                              <p className='mb-3 text-dark'><b>Davlat aholisi</b>: {country.population.toLocaleString()}</p>
                              <p className='mb-3 text-dark'><b>Davlat poytaxti</b>: {country.capital}</p>
                           </div>
                        </Link>
                     </div>
                  ))
               )}
         </div>
      </div>
   )
}
