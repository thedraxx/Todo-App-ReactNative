import {inputs} from '../interfaces/generalInterfaces.d';
import {addTodo} from '../store/slice/TodoSlice';
import {TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import React, {useEffect, useState} from 'react';
import {
  ButtonDeadline,
  ButtonTime,
  CustomView,
  GeneralView,
  MyButon,
  TextButon,
  TextDeadLine,
  TextTime,
  TextTimeInput,
  TextTitles,
  ViewTime,
} from '../styles/styles';

export const NewTask = ({navigation}: any) => {
  // Dispatch redux
  const dispatch = useDispatch();

  // The form of the inputs to complete
  const [onChange, setOnChange] = useState<inputs>({
    _id: new Date().getTime(),
    title: '',
    deadline: '',
    startTime: '',
    endTime: '',
    Remind: '',
  });

  // This manage the state of the input
  const handleChange = (name: string, value: string) => {
    setOnChange({...onChange, [name]: value});
  };

  // Deadline Picker
  const [dateDeadline, setDeadline] = useState(new Date());
  const [openDateDeadline, setOpenDateDeadline] = useState(false);

  // DatePicker Init
  const [dateInit, setDateInit] = useState(new Date());
  const [openInit, setOpenInit] = useState(false);

  // DatePicker Fin
  const [dateFinish, setDateFinish] = useState(new Date());
  const [openFinish, setOpenFinish] = useState(false);

  //  When the user press the button to add a new task
  const handleSubmit = () => {
    dispatch(addTodo(onChange));
    navigation.navigate('To-Do App');
  };

  // UseEffect Listen the changes of the DatePickers
  useEffect(() => {
    handleChange('startTime', dateInit.toLocaleString());
    handleChange('endTime', dateFinish.toLocaleString());
    handleChange('deadline', dateDeadline.toLocaleString());
  }, [dateInit, dateFinish, dateDeadline]);

  return (
    <GeneralView style={{backgroundColor: 'white'}}>
      <TextTitles>Title</TextTitles>
      <TextInput
        placeholder="Design team meeting"
        onChangeText={text => handleChange('title', text)}
        style={{
          borderColor: 'white',
          backgroundColor: '#ededed',
          color: 'black',
          borderWidth: 1,
          padding: 15,
          margin: 20,
          borderRadius: 10,
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
          onConfirm={date => {
            setOpenDateDeadline(false);
            setDeadline(date);
          }}
          onCancel={() => {
            setOpenDateDeadline(false);
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
          onConfirm={date => {
            setOpenInit(false);
            setDateInit(date);
          }}
          onCancel={() => {
            setOpenFinish(false);
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
          onConfirm={date => {
            setOpenFinish(false);
            setDateFinish(date);
          }}
          onCancel={() => {
            setOpenFinish(false);
          }}
        />
      </ViewTime>

      <TextTitles>Remind</TextTitles>
      <TextInput
        placeholder="10 minutes early"
        onChangeText={text => handleChange('Remind', text)}
        style={{
          borderColor: 'white',
          backgroundColor: '#ededed',
          color: 'black',
          borderWidth: 1,
          padding: 15,
          margin: 20,
          borderRadius: 10,
        }}
      />
      <TextTitles>Repeat</TextTitles>
      <TextInput
        placeholder="Weekly"
        onChangeText={text => handleChange('Remind', text)}
        style={{
          borderColor: 'white',
          backgroundColor: '#ededed',
          color: 'black',
          borderWidth: 1,
          padding: 15,
          margin: 20,
          borderRadius: 10,
        }}
      />
      <MyButon onPress={handleSubmit}>
        <View>
          <TextButon>Create a Task</TextButon>
        </View>
      </MyButon>
    </GeneralView>
  );
};
