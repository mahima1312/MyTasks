import {useState} from 'react'

import {v4} from 'uuid'

import {
  AppContainer,
  CreateTaskContainer,
  FormContainer,
  TaskAddContainer,
  Heading,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  AddBtn,
  TagsHeading,
  TaskHeading,
  TagListContainer,
  TasksContainer,
  NoTaskContainer,
  NoTaskText,
} from './styledComponents'

import Tag from '../Tag'
import Tasks from '../Tasks'

const CreateTask = props => {
  const {tagsList} = props
  const [task, setTaskFn] = useState('')
  const [option, setOptionFn] = useState(tagsList[0].displayText)
  const [taskList, setTaskListFn] = useState([])
  const [activeTag, setActiveTagFn] = useState(null)

  const onChangeTask = event => {
    setTaskFn(event.target.value)
  }

  const onChangeOption = event => {
    setOptionFn(event.target.value)
  }

  const onSubmitTask = event => {
    event.preventDefault()
    const taskDetails = {
      id: v4(),
      task,
      option,
    }
    if (taskDetails.task !== '') {
      setTaskListFn(prevTaskList => [...prevTaskList, taskDetails])
      setTaskFn('')
      setOptionFn(tagsList[0].displayText)
      setActiveTagFn(null)
    }
  }

  const onTagClick = tag => {
    setActiveTagFn(prevTag => (prevTag === tag ? null : tag))
  }

  const filteredTasks =
    activeTag === null
      ? taskList
      : taskList.filter(eachTask => eachTask.option === activeTag)

  return (
    <AppContainer>
      <CreateTaskContainer>
        <Heading>Create a task!</Heading>
        <FormContainer onSubmit={onSubmitTask}>
          <InputContainer>
            <Label htmlFor="task">Task</Label>
            <Input
              id="task"
              value={task}
              placeholder="Enter the task here"
              type="text"
              onChange={onChangeTask}
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="tags">Tags</Label>
            <Select id="tags" value={option} onChange={onChangeOption}>
              {tagsList.map(eachOption => (
                <Option
                  value={eachOption.displayText}
                  key={eachOption.optionId}
                >
                  {eachOption.displayText}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <AddBtn type="submit">Add Task</AddBtn>
        </FormContainer>
      </CreateTaskContainer>
      <TaskAddContainer>
        <TagsHeading>Tags</TagsHeading>
        <TagListContainer>
          {tagsList.map(eachTag => (
            <Tag
              key={eachTag.optionId}
              tagDetails={eachTag}
              isActive={activeTag === eachTag.displayText}
              onTagClick={onTagClick}
            />
          ))}
        </TagListContainer>
        <TaskHeading>Tasks</TaskHeading>
        {filteredTasks.length > 0 ? (
          <TasksContainer>
            {filteredTasks.map(eachTask => (
              <Tasks key={eachTask.id} taskDetails={eachTask} />
            ))}
          </TasksContainer>
        ) : (
          <NoTaskContainer>
            <NoTaskText>No Tasks Added Yet</NoTaskText>
          </NoTaskContainer>
        )}
      </TaskAddContainer>
    </AppContainer>
  )
}
export default CreateTask
