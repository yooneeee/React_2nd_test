import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/todos.js";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title, body, id: uuidv4() }));
    setTitle("");
    setBody("");
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
