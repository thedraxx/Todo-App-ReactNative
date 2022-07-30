import {useSelector, useDispatch} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useEffect, useState} from 'react';
import {addTodoCompleted} from '../store/slice/TodoSlice';
import {
  MyTextTask,
  MyTextTaskPending,
  ViewPending,
  ViewPendingTasks,
} from '../styles/styles';

export const Pending = () => {
  const {todos} = useSelector((state: any) => state.todo);

  const [Tasks, setTasks] = useState([]);

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
        <MyTextTaskPending>All Clear!</MyTextTaskPending>
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
