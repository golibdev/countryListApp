import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export const CountryDetailpage = () => {
   const [ country, setCountry ] = useState([])
   const code = useParams().code

   useEffect(() => {
      const getCountry = async () => {
         try {
            const res = await axios(`https://restcountries.com/v3.1/alpha/${code}`)

            setCountry(res.data)
         } catch(err){}
      }

      getCountry()
   }, [code])
   return (
      <div className='container mt-5'>
         <Link to="/" className="btn btn-success mb-4 rounded shadow">Orqaga</Link>
         {country.map(c => (
         <div className="row" key={c.cca3}>
               <div className="col-lg-5 col-md-5 col-12">
                  <div className="card">
                     <div className="card-image">
                        <img src={`${c.flags.png}`} style={{ height: '250px' }} className='img-fluid w-100' alt="flag" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-7 col-md-7 col-12">
                  <div className="card" style={{ height: '250px' }}>
                     <div className="card-body">
                        <p className='mb-3 text-dark'><b>Qaysi qit'ada joylashgan</b>: {c.continents}</p>
                        <p className='mb-3 text-dark'><b>Davlat nomi</b>: {c.name.common}</p>
                        <p className='mb-3 text-dark'><b>Davlatning rasmiy nomi</b>: {c.name.official}</p>
                        <p className='mb-3 text-dark'><b>Davlat aholisi</b>: {c.population.toLocaleString()}</p>
                        <p className='mb-3 text-dark'><b>Davlat poytaxti</b>: {c.capital}</p>
                        <p className='mb-3 text-dark'><b>Davlat maydoni</b>: {c.area}</p>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}
