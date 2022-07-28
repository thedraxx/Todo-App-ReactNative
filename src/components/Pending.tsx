import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export const Pending = () => {
  const {todos} = useSelector((state: any) => state.todo);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <View>
      {todos.length === 0 ? <Text>No todos</Text> : <Text>Todos</Text>}
    </View>
  );
};
