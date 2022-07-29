import React from 'react';
import styled from 'styled-components/native';

export const Completed = () => {
  return <ViewCompleted></ViewCompleted>;
};

export const MyText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const ViewCompleted = styled.View`
  position: relative;
  left: 15px;
  top: 5px;
`;
