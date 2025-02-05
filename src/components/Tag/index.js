import {TagItem, TagBtn} from './styledComponents'

const Tag = props => {
  const {tagDetails, onTagClick, isActive} = props
  const {optionId, displayText} = tagDetails

  const onClickTag = () => {
    onTagClick(displayText)
  }

  return (
    <TagItem>
      <TagBtn bgColor={isActive} type="button" onClick={onClickTag}>
        {displayText}
      </TagBtn>
    </TagItem>
  )
}

export default Tag
