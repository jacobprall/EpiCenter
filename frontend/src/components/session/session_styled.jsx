import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`


`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Inputs = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Input = styled.input`
  height: 1.2rem;
  outline-color: #696969;
  padding: 0rem 0.3rem 0rem 0.3rem;
  placeholder
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const LoginAndSignup = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  width: 7rem;
  font-weight: 350;
  text-align: center;
  background-color: #708090;
  border-radius: 0.2rem;
  &:hover {
    background-color: #36454f;
    transition: 0.3s;
    cursor: pointer;
  }
`;