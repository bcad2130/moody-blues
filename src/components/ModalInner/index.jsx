import React, {useState} from 'react'
import {Container, H3, H4, Socials, SuccessContainer} from './styles'
import {P} from '../../styles'
import Form from '../Form'
import {ReactComponent as Happy} from './happy_face.svg'
import {ReactComponent as Instagram} from './icon_instagram.svg'
import {ReactComponent as Facebook} from './icon_facebook.svg'
import {ReactComponent as Twitter} from './icon_twitter.svg'

const Input = ({handleSuccess, cartTix, setCartTix}) => (
  <Container>
    <H3>Purchase tickets</H3>
    <P>Tickets for our first ever world tour are now on sale. Get em before they sell out!</P>
    <Form handleSuccess={handleSuccess} cartTix={cartTix} setCartTix={setCartTix} />
  </Container>
)

const Success = ({cartTix}) => (
  <SuccessContainer>
    <Happy />
    <H4>Congratulations!</H4>
    <P>You just added {cartTix} ticket{cartTix > 1 && 's'} to your cart.</P>
  </SuccessContainer>
)

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [cartTix, setCartTix] = useState(1)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return showSuccess ? <Success cartTix={cartTix} /> : <Input handleSuccess={handleSuccess} cartTix={cartTix} setCartTix={setCartTix} />
}

export default ModalInner