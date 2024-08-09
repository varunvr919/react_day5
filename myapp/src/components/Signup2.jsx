import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
      <div>
          <TextField variant='outlined' label='name' /> 
          <TextField variant='outlined' label='age' />
          <TextField variant='outlined' label='number' />
          <TextField variant='outlined' label='password'/><br />
          <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup2