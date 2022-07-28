import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/slice/TodoSlice';
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

  const handleChange = (name: string, value: string) => {
    setOnChange({...onChange, [name]: value});
  };

  const handleSubmit = () => {
    console.log(onChange);
    dispatch(addTodo(onChange));
  };

  return (
    <View style={{backgroundColor: 'white'}}>
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

      <View>
        <TextTitles>Start time</TextTitles>
        <TextInput
          placeholder="StartTime"
          onChangeText={text => handleChange('StartTime', text)}
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
        <TextTitles>End time</TextTitles>
        <TextInput
          placeholder="EndTime"
          onChangeText={text => handleChange('EndTime', text)}
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
      </View>

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
      <MyButon onPress={handleSubmit}>
        <View>
          <TextButon>Touch Here</TextButon>
        </View>
      </MyButon>
    </View>
  );
};

const TextTitles = styled.Text`
  color: black;
  font-size: 15px;
  left: 25px;
  top: 15px;
`;

const TextButon = styled.Text`
  color: #ffffff;
  font-size: 15px;
`;

const MyButon = styled.TouchableHighlight`
  background-color: #74c190;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 5%;
  border-radius: 30px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MyView = styled.View`
  display: 'inline-block';
`;
