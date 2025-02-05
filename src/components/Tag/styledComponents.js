import styled from 'styled-components'

export const TagItem = styled.li`
  margin-right: 10px;
`

export const TagBtn = styled.button`
  color: ${props => (props.bgColor ? '#323f4b' : '#ffffff')};
  background-color: ${props => (props.bgColor ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
`
