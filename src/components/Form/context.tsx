import React, { useContext } from 'react'

export const FormContext = React.createContext<any>({
  form: {},
  handleFormChange: () => {},
})

export const useFormField = (name) => {
  const { form, handleChange } = useContext(FormContext)

  return {
    value: form[name],
    onChange: (value) => handleChange(name, value)
  }
}
