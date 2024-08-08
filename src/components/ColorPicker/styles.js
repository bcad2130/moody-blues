import styled from 'styled-components'
import {ReactComponent as ArrowSVG} from './picker-arrow.svg'

export const Panel = styled.div.attrs(({$backgroundColor}) => ({
  style: {
    backgroundColor: `${$backgroundColor}`
  }
}))`
  display: flex;
  z-index: 5;
  box-shadow: rgb(0, 0, 0) 0 0 20px;
  right: 0;
  top: 60px;
  padding: 5px 10px;
  position: fixed;
  color: #000;
  right: ${({$showColorPicker}) => ($showColorPicker ? '0' : '-250px')};

  @media (max-width: 700px) {
    top: unset;
    bottom: 66px;
  }
`

export const ColorInput = styled.input`
  border-radius: 100%;
  height: 25px;
  width: 25px;
  border: 1px solid #000;
  margin-left: 10px;

  ::-webkit-color-swatch {
    border: 1px solid #000;
    border-radius: 100%;
  }
`

export const InputContainer = styled.div.attrs(({$textColor}) => ({
  style: {
    color: `${$textColor}`
  }
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
`

export const Arrow = styled(ArrowSVG).attrs(({$showColorPicker, $textColor}) => ({
  style: { 
    fill: `${$textColor}`
  }  
}))`
  transform: ${($showColorPicker) => ($showColorPicker ? 'rotate(0.5turn)' : 'none' )};
  padding: 20px 10px;
  cursor: pointer;

  path {
    fill: inherit;
  }  
`
