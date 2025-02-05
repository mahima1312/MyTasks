import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
`

export const CreateTaskContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131213;
  width: 40%;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  text-align: center;
`

export const FormContainer = styled.form`
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
  align-self: flex-start;
`

export const Input = styled.input`
  color: #64748b;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  font-weight: 500;
  font-size: 15px;
  outline: none;
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  cursor: pointer;
`

export const Option = styled.option`
  color: #1a171d;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`

export const AddBtn = styled.button`
  margin-top: 20px;
  background-color: #f3aa4e;
  color: #ffffff;
  border: none;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  cursor: pointer;
  outline: none;
`

export const TaskAddContainer = styled.div`
  background-color: #000000;
  padding: 20px;
  width: 60%;
`

export const TagsHeading = styled.h1`
  color: #ffffff;
  padding-top: 30px;
`
export const TagListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
`

export const TaskHeading = styled(TagsHeading)``

export const TasksContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const NoTaskContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoTaskText = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`
