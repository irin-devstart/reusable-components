import React from 'react'
import TextField from './components/TextField'

const App = () => {
  return (
    <div className='flex justify-center  items-center flex-col gap-2'>
      <TextField label='Name' />
      <TextField label='Email' />
      <TextField label='Email' />
      <TextField label='Email' />

    </div>
  )
}

export default App