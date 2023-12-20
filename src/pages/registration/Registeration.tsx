import React from 'react'
import Button from '../../library/button/Button'
import Input from '../../library/input/Input'

const Registeration = () => {
  return (
    <div>
      <h1>Registeration page</h1>
      <Button label='Click Me'></Button>
      <Input type='email' name='email' placeholder='Enter Email'></Input>
    </div>
  )
}

export default Registeration
