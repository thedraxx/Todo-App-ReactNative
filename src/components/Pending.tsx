import { useSelector, useDispatch } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, { useEffect, useState } from 'react';
import { addTodoCompleted } from '../store/slice/TodoSlice';
import {
  MyTextTask,
  MyTextTaskPending,
  ViewCompletedTasks,
  ViewPending,
} from '../styles/styles';

export const Pending = () => {
  const { todos } = useSelector((state: any) => state.todo);

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
            <ViewCompletedTasks key={task._id}>
              <BouncyCheckbox
                isChecked={false}
                style={{ padding: 10 }}
                onPress={() => {
                  HandleSelected(task._id);
                }}
              />
              <MyTextTask>{task.title}</MyTextTask>
            </ViewCompletedTasks>
          );
        })
      )}
    </ViewPending>
  );
};
