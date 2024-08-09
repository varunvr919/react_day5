import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Welcome = () => {
  
      var [val, setval] = useState()
 
  const inpt1 = () => {
        setval("React")
      }
  const inpt2 = () => {
        setval("Angular")
      }
  const inpt3 = () => {
        setval("View")

      }

      return (
      <div>
        <Typography variant="h1" gutterBottom>welcome {val}</Typography>
          <Button variant="contained" color='primary' onClick={inpt1}>react</Button>
          <Button variant="contained" color='secondary' onClick={inpt2}>angular</Button>
          <Button variant="contained" color='success' onClick={inpt3}>view</Button>

    </div>
  )
}

export default Welcome