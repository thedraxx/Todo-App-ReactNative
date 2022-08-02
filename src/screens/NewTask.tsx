import { TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-native-date-picker'
import React, { useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { hooksPickers } from '../hooks/hooksPickers'
import { hookOnChange } from '../hooks/hookOnChange'
import { addTodo } from '../store/slice/TodoSlice'
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

export function NewTask ({ navigation }: any) {
  // Dispatch redux
  const dispatch = useDispatch()

  // Pickers from Time and Dropdown
  const {
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
  } = hooksPickers()

  // This manage the state of the input
  const { handleChange, onChange } = hookOnChange()

  //  When the user press the button to add a new task
  const handleSubmit = () => {
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
