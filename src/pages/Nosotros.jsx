import React, { useState } from 'react'


const Nosotros = () => {
    const[cuenta, setCuenta]=useState(10)
    function incrementar(){
        setCuenta(cuenta + 1)
       
    }
  return (
    <>
        
    <h3 className='text-center py-4'>Nosotros</h3>
    <div className='text-center py-4'>
        <button onClick={()=>incrementar()} className='btn btn-info'>contador</button>
        <h1 className='py-4'>{cuenta}</h1>
    </div>
    </>
    
  )
}

export default Nosotros