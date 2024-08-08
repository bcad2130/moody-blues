import React, {useState} from 'react'
import {ColorInput, InputContainer, Panel, Arrow} from './styles'


const ColorPicker = ({wrapperColor, setWrapperColor, textColor, setTextColor}) =>  {

  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <Panel $showColorPicker={showColorPicker} $backgroundColor={wrapperColor} >
      <Arrow $showColorPicker={showColorPicker} $textColor={textColor} onClick={() => (setShowColorPicker(!showColorPicker))} />
      <InputContainer $textColor={textColor} >
        <p>Background: </p>
        <ColorInput type="color" value={wrapperColor} onChange={(event) => (setWrapperColor(event.target.value))}/>
        <p>Text: </p>
        <ColorInput type="color" value={textColor} onChange={(event) => (setTextColor(event.target.value))}/>
      </InputContainer>
    </Panel>
  )
}

export default ColorPicker