import {useSelector, useDispatch} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useEffect, useReducer, useState} from 'react';
import styled from 'styled-components/native';
import {addTodoCompleted} from '../store/slice/TodoSlice';

export const Pending = () => {
  const {todos} = useSelector((state: any) => state.todo);

  const [Tasks, setTasks] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  const HandleSelected = (id: number) => {
    dispatch(addTodoCompleted(id));
  };

  useEffect(() => {
    setTasks(todos);
  }, [todos]);

  return (
    <ViewPending>
      {Tasks.length === 0 ? (
        <MyTextTask>No todos</MyTextTask>
      ) : (
        Tasks.map((task: any) => {
          return (
            <ViewPendingTasks key={task._id}>
              <BouncyCheckbox
                unfillColor="#FFFFFF"
                onPress={() => {
                  HandleSelected(task._id);
                }}
              />
              <MyTextTask>{task.title}</MyTextTask>
            </ViewPendingTasks>
          );
        })
      )}
    </ViewPending>
  );
};

export const MyText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const MyTextTask = styled.Text`
  font-size: 15px;
  color: black;
`;

export const ViewPending = styled.View`
  position: relative;
  left: 15px;
  top: 0px;
  padding-top: 2px;
  padding-bottom: 20px;
`;

export const ViewPendingTasks = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 15px;
`;
