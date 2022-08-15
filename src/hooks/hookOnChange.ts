import { useState } from 'react'
import { inputs } from '../interfaces/generalInterfaces'

export const hookOnChange = () => {
  // The form of the inputs to complete
  const [onChange, setOnChange] = useState<inputs>({
    _id: new Date().getTime(),
    title: '',
    deadline: '',
    startTime: '',
    endTime: '',
    Remind: '',
    repeat: ''
  })

  // This manage the state of the input
  const handleChange = (name: string, value: string) => {
    setOnChange({ ...onChange, [name]: value })
  }

  // Return the elements to NewTask.tsx
  return {
    handleChange,
    onChange
  }
}
