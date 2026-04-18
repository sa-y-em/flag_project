
import { Suspense } from 'react'
import Countries from '../components/countries/Countries'
import './App.css'

const showCountries = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json());

function App() {



  return (
    <>
      <section id="center">
        
        <Suspense fallback= {<h3>Wait ... Data is loading</h3>}>
          <Countries showCountries = {showCountries}></Countries>
        </Suspense>
      </section>

    </>
  )
}

export default App
