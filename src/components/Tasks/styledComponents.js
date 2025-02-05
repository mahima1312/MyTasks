import styled from 'styled-components'

export const TaskList = styled.li`
  background-color: #1a171d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const TaskName = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`

export const TaskTag = styled.p`
  color: #323f4b;
  font-weight: bold;
  font-size: 16px;
  border-radius: 20px;
  outline: none;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  height: 30px;
  background-color: #f3aa4e;
`
