import {TaskList, TaskName, TaskTag} from './styledComponents'

const Tasks = props => {
  const {taskDetails} = props
  const {task, option} = taskDetails
  return (
    <TaskList>
      <TaskName>{task}</TaskName>
      <TaskTag>{option}</TaskTag>
    </TaskList>
  )
}
export default Tasks
