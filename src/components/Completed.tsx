import React from 'react';
import styled from 'styled-components/native';

export const Completed = () => {
  return (
    <ViewCompleted>
      <MyText>Completed Tasks</MyText>
    </ViewCompleted>
  );
};

export const MyText = styled.Text`
  font-size: 15;
  color: black;
`;

export const ViewCompleted = styled.View`
  position: relative;
  left: 15;
  top: 5;
`;
