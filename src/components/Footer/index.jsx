import React from 'react'
import {Footer, H2, H2Middle} from './styles'

const FooterComponent = ({textColor}) => (
  <Footer $textColor={textColor} >
    <H2>Jun 12</H2>
    <H2Middle $textColor={textColor} >World Tour</H2Middle>
    <H2>Aug 17</H2>
  </Footer>
)

export default FooterComponent