import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/slice/TodoSlice';

interface inputs {
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
    console.warn(onChange);
  };

  return (
    <View>
      <Text>Add Task</Text>
      <Text>Title</Text>
      <TextInput
        placeholder="Title"
        onChangeText={text => handleChange('title', text)}
      />
      <Text>Deadline</Text>
      <TextInput
        placeholder="Deadline"
        onChangeText={text => handleChange('deadline', text)}
      />
      <Text>StartTime</Text>
      <TextInput
        placeholder="StartTime"
        onChangeText={text => handleChange('StartTime', text)}
      />
      <Text>EndTime</Text>
      <TextInput
        placeholder="EndTime"
        onChangeText={text => handleChange('EndTime', text)}
      />
      <Text>Remind</Text>
      <TextInput
        placeholder="Remind"
        onChangeText={text => handleChange('Remind', text)}
      />
      <Button title="Create a Task" onPress={handleSubmit} />
    </View>
  );
};
