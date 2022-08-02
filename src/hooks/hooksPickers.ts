import { useState } from 'react'

export const hooksPickers = () => {
  // Deadline Picker
  const [dateDeadline, setDeadline] = useState(new Date())
  const [openDateDeadline, setOpenDateDeadline] = useState(false)

  // DatePicker Init
  const [dateInit, setDateInit] = useState(new Date())
  const [openInit, setOpenInit] = useState(false)

  // DatePicker Fin
  const [dateFinish, setDateFinish] = useState(new Date())
  const [openFinish, setOpenFinish] = useState(false)

  // Dropdown Picker Remind
  const [openRemind, setOpenRemind] = useState(false)
  const [valueRemind, setValueRemind] = useState('')
  const [itemsRemind, setItemsRemind] = useState([
    { label: '10 minutes early', value: '10 minutes early' },
    { label: '30 minutes early', value: '30 minutes early' }
  ])

  // Dropdown Picker Repeat
  const [openRepeat, setOpenRepeat] = useState(false)
  const [valueRepeat, setValueRepeat] = useState('')
  const [itemsRepeat, setItemsRepeat] = useState([
    { label: 'daily', value: 'daily' },
    { label: 'weekly', value: 'weekly' },
    { label: 'monthly', value: 'monthly' }
  ])

  return {
    dateDeadline,
    setDeadline,
    openDateDeadline,
    setOpenDateDeadline,
    dateInit,
    setDateInit,
    openInit,
    setOpenInit,
    dateFinish,
    setDateFinish,
    openFinish,
    setOpenFinish,
    openRemind,
    setOpenRemind,
    valueRemind,
    setValueRemind,
    itemsRemind,
    setItemsRemind,
    openRepeat,
    setOpenRepeat,
    valueRepeat,
    setValueRepeat,
    itemsRepeat,
    setItemsRepeat
  }
}
