import React from 'react'
import { MuiTelInput } from 'mui-tel-input'

export const PhoneInput = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return <MuiTelInput size='small' label="Phone" fullWidth value={value} onChange={handleChange} defaultCountry="AR" sx={{mb:3}}/>
}