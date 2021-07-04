import React from "react";
import styled from "styled-components/macro";

const getMessageBackground = (messageType) => {
  const background = {
    error: "#cf3e35",
    success: "#72be6c",
  };
  return background[messageType];
};

export const Wrapper = styled.div`
  width: 325px;
  padding: 15px 20px;
  margin-bottom: 16px;
  border-radius: 5px;
  color: white;
  background: ${(props) => getMessageBackground(props.type)};
`;

export const Title = styled.h4`
  font-size: 15px;
  margin-bottom: 3px;
`;

export const MessageText = styled.p`
  font-size: 14px;
`;

const Message = ({ message }) => {
  const { messageType, title, text } = message;
  return (
    <Wrapper type={messageType}>
      <Title>{title}</Title>
      <MessageText>{text}</MessageText>
    </Wrapper>
  );
};

export default Message;
