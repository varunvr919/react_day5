import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
          <Typography variant='h6'>myapp</Typography>
          <Link to='signup'>
            <Button variant="contained">signup</Button></Link>
          
          <Link to='/l'>
            <Button variant="contained">Login</Button></Link>
          <Link to='/sb'>
            <Button variant="contained">HOME PAGE</Button></Link>
          <Link to='/Wl'>
            <Button variant="contained">WELCOME</Button></Link>

          <Link to='/a'>
        <Button variant="contained">Api</Button></Link>
              </Toolbar>
          </AppBar>  
          <br /><br /><br /><br />
    </div>
  )
}

export default Navbar