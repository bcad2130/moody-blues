import styled from 'styledComponents'
import {ReactComponent as logo.svg} from './logo.svg'

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
  justify-content: center;
  padding: 30px;
`
