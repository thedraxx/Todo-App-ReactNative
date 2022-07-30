import {addTodo} from '../store/slice/TodoSlice';
import {Button, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

interface inputs {
  _id: number;
  title: string;
  deadline: string;
  startTime: string;
  endTime: string;
  Remind: string;
}

export const NewTask = ({navigation}: any) => {
  // Dispatch de redux
  const dispatch = useDispatch();

  const [onChange, setOnChange] = useState<inputs>({
    _id: new Date().getTime(),
    title: '',
    deadline: '',
    startTime: '',
    endTime: '',
    Remind: '',
  });

  let hours = new Date().getTime();

  // DatePicker Init
  const [dateInit, setDateInit] = useState(new Date());
  const [openInit, setOpenInit] = useState(false);

  // DatePicker Fin
  const [dateFinish, setDateFinish] = useState(new Date());
  const [openFinish, setOpenFinish] = useState(false);

  const handleChange = (name: string, value: string) => {
    setOnChange({...onChange, [name]: value});
  };

  const handleSubmit = () => {
    dispatch(addTodo(onChange));
    navigation.navigate('To-Do App');
  };

  // Esto escucha por los cambios en el datePicker
  useEffect(() => {
    handleChange('startTime', dateInit.toLocaleString());
  }, [dateInit]);

  useEffect(() => {
    handleChange('endTime', dateFinish.toLocaleString());
  }, [dateFinish]);

  console.log(onChange);

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
      <TextTitles>Deadline</TextTitles>
      <TextInput
        placeholder="2021-02-28"
        onChangeText={text => handleChange('deadline', text)}
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
            console.log('fecha inicio', date);
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
            console.log('fecha fin', date);
          }}
          onCancel={() => {
            setOpenFinish(false);
          }}
        />
      </ViewTime>

      <TextTitles>Remind</TextTitles>
      <TextInput
        placeholder="Remind"
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
        placeholder="Remind"
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

// GeneralView
const GeneralView = styled.View`
  flex: 1;
  background-color: #ededed;
  width: 100%;
`;

const TextTitles = styled.Text`
  color: #000000;
  font-size: 15px;
  left: 25px;
  top: 15px;
  font-weight: bold;
`;

const TextButon = styled.Text`
  color: #ffffff;
  font-size: 15px;
`;

const MyButon = styled.TouchableHighlight`
  align-items: center;
  background-color: #66c689;
  border-radius: 15px;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 3%;
  width: 80%;
`;

const ButtonTime = styled.TouchableHighlight`
  align-items: center;
  background-color: #ededed;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  width: 30%;
`;

const ViewTime = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
`;

const CustomView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  margin-bottom: 5px;
`;

const TextTime = styled.Text`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const TextTimeInput = styled.Text`
  color: #7c7c7c;
  font-size: 15px;
`;
