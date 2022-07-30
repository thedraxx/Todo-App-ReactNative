import {removeCompletedTodo} from '../store/slice/TodoSlice';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';
import styled from 'styled-components/native';

export const Completed = () => {
  const {todosCompleted} = useSelector((state: any) => state.todo);

  const dispatch = useDispatch();

  const HandleSelected = (id: number) => {
    dispatch(removeCompletedTodo(id));
  };
  return (
    <ViewCompleted>
      {todosCompleted.length === 0 ? (
        <Text>No hay nada</Text>
      ) : (
        todosCompleted.map((task: any) => {
          return (
            <ViewPendingTasks key={task._id}>
              <BouncyCheckbox
                style={{padding: 10}}
                onPress={() => {
                  HandleSelected(task._id);
                }}
              />
              <MyTextTask>{task.title}</MyTextTask>
            </ViewPendingTasks>
          );
        })
      )}
    </ViewCompleted>
  );
};

export const MyText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const ViewCompleted = styled.View`
  position: relative;
  left: 15px;
  top: 0px;
  padding-top: 2px;
  padding-bottom: 20px;
`;

export const MyTextTask = styled.Text`
  font-size: 15px;
  color: black;
`;
export const ViewPendingTasks = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 15px;
`;
