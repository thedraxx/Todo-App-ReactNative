import { TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-native-date-picker'
import React, { useEffect, useState } from 'react'
import { addTodo } from '../store/slice/TodoSlice'
import { inputs } from '../interfaces/generalInterfaces.d'
import {
  ButtonDeadline,
  ButtonTime,
  CustomView,
  GeneralView,
  MyButon,
  TextButon,
  TextDeadLine,
  TextDreopdown,
  TextTime,
  TextTimeInput,
  TextTitles,
  ViewPicker,
  ViewTime,
  ViewPickerRemind,
  ViewPickerRepeat
} from '../styles/styles'
import DropDownPicker from 'react-native-dropdown-picker'

export function NewTask ({ navigation }: any) {
  // Dispatch redux
  const dispatch = useDispatch()

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

  //  When the user press the button to add a new task
  const handleSubmit = () => {
    console.log(onChange)
    dispatch(addTodo(onChange))
    navigation.navigate('To-Do App')
  }

  // UseEffect Listen the changes of the deadline
  useEffect(() => {
    handleChange('deadline', dateDeadline.toLocaleString())
  }, [openDateDeadline])

  // UseEffect Listen the changes of the start time
  useEffect(() => {
    handleChange('startTime', dateFinish.toLocaleString())
  }, [openInit])

  // UseEffect Listen the changes of the end time
  useEffect(() => {
    handleChange('endTime', dateInit.toLocaleString())
  }, [openFinish])

  // UseEffect Listen the changes of the Dropdown Picker remind
  useEffect(() => {
    handleChange('Remind', valueRemind)
  }, [openRemind])

  // UseEffect Listen the changes of the Dropdown Picker repeat
  useEffect(() => {
    handleChange('repeat', valueRepeat)
  }, [openRepeat])

  return (
    <GeneralView style={{ backgroundColor: 'white' }}>
      <TextTitles>Title</TextTitles>
      <TextInput
        placeholder="Design team meeting"
        onChangeText={(text) => handleChange('title', text)}
        style={{
          borderColor: 'white',
          backgroundColor: '#ededed',
          color: 'black',
          borderWidth: 1,
          padding: 15,
          margin: 20,
          borderRadius: 10
        }}
      />

      <TextDeadLine>Deadline</TextDeadLine>
      <ViewTime>
        <ButtonDeadline onPress={() => setOpenDateDeadline(true)}>
          <View>
            <TextTimeInput>{` ${dateDeadline.getMonth()} - ${dateDeadline.getDate()} - ${dateDeadline.getFullYear()}`}</TextTimeInput>
          </View>
        </ButtonDeadline>
        <DatePicker
          mode="date"
          locale="en-US"
          modal
          open={openDateDeadline}
          date={dateDeadline}
          onConfirm={(date) => {
            setOpenDateDeadline(false)
            setDeadline(date)
          }}
          onCancel={() => {
            setOpenDateDeadline(false)
          }}
        />
      </ViewTime>
      <CustomView>
        <TextTime>Start time</TextTime>
        <TextTime>End time</TextTime>
      </CustomView>

      <ViewTime>
        <ButtonTime onPress={() => setOpenInit(true)}>
          <View>
            <TextTimeInput>{`${dateInit.getHours()} : ${dateInit.getMinutes()}`}</TextTimeInput>
          </View>
        </ButtonTime>
        <DatePicker
          mode="time"
          locale="en-US"
          modal
          open={openInit}
          date={dateInit}
          onConfirm={(date) => {
            setOpenInit(false)
            setDateInit(date)
          }}
          onCancel={() => {
            setOpenFinish(false)
          }}
        />

        <ButtonTime onPress={() => setOpenFinish(true)}>
          <View>
            <TextTimeInput>{`${dateFinish.getHours()} : ${dateFinish.getMinutes()}`}</TextTimeInput>
          </View>
        </ButtonTime>
        <DatePicker
          mode="time"
          locale="en-US"
          modal
          open={openFinish}
          date={dateFinish}
          onConfirm={(date) => {
            setOpenFinish(false)
            setDateFinish(date)
          }}
          onCancel={() => {
            setOpenFinish(false)
          }}
        />
      </ViewTime>
      {/* Dropdown */}
      <ViewPicker>
        <ViewPickerRemind>

        <TextDreopdown>Remind</TextDreopdown>
        <DropDownPicker
        open={openRemind}
        value={valueRemind}
        items={itemsRemind}
        setOpen={setOpenRemind}
        setValue={setValueRemind}
        setItems={setItemsRemind}
      />
        </ViewPickerRemind>
        <ViewPickerRepeat>

      <TextDreopdown>Repeat</TextDreopdown>
        <DropDownPicker
        open={openRepeat}
        value={valueRepeat}
        items={itemsRepeat}
        setOpen={setOpenRepeat}
        setValue={setValueRepeat}
        setItems={setItemsRepeat}
      />
              </ViewPickerRepeat>
      </ViewPicker>

      <MyButon onPress={handleSubmit}>
        <View>
          <TextButon>Create a Task</TextButon>
        </View>
      </MyButon>
    </GeneralView>
  )
}
