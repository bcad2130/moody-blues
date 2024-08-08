import React from 'react'
import {Logo, Header} from './styles'

const HeaderComponent = ({textColor}) => (
  <Header>
    <Logo title="Moody Blue Logo" $textColor={textColor} />
  </Header>
)

export default HeaderComponent