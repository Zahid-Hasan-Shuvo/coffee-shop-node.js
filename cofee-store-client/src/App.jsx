import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeCard from './components/CoffeCard';

function App() {
const lodedCoffees= useLoaderData();
const [coffees, setCoffees]=useState(lodedCoffees)
  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-purple-600 text-center' ></h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
        coffees.map(coffee=><CoffeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeCard>)
      }
     </div>
      
    </div>
  )
}

export default App
