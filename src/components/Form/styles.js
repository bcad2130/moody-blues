import styled from 'styled-components'
import {Field, Form} from 'formik' 

export const TicketSelector = styled.div`
  flex-grow: 2;

  @media (max-width: 700px) {
    margin-top: 10px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled(Form)`
  display: flex;
  gap: 100px;
  margin-top: 48px;

  @media (max-width: 700px) {
    display: block;
    margin-top: 24px;
    width: 220px;
  }
`

export const Row = styled.div`
  color: gray;
  display: flex;
  justify-content: space-between;
  width: 75%;
`

export const StyledField = styled(Field)`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 16px;
  padding 4px;
  width: 75%;
  margin-bottom: 8px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`

export const Input = styled.input`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding 12px;
  width: 100%;

  &:focus {
    border-color: #0519ce;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`

export const Label = styled.label`
  font-weight: 600;
`

export const Error = styled.span`
  color: #e26e2d;
`

export const Submit = styled.button`
  background: none;
  border: 2px solid #0519ce;
  color: #0519ce;
  cursor: pointer;
  float: right;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`
