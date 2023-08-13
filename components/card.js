import React from 'react'

const card = ({apikey,rate}) => {
  return (
    <div className='h-screen flex items-center justify-center'>
        
        <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">ApiKey:{apikey}</h2>
    <h2 className='text-bold text-xl'>Rate:{rate}/30</h2>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
    </div>
  )
}

export default card