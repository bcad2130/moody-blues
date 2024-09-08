import React from 'react'
import * as Yup from 'yup'
import {Formik, Field, useField} from 'formik' 
import {Input, Label, Error, Submit, StyledField, Row, FormContainer, FlexContainer, TicketSelector} from './styles'
import {P} from '../../styles'

const InputComponent = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  )
}

const FormComponent = ({handleSuccess, cartTix, setCartTix}) => {
  const schema = Yup.object().shape({
    cartTix: Yup.number()
  })

  return (
    <Formik
      initialValues={{
        cartTix: 1
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <FormContainer>
          <Label>Select quantity:</Label>
          <TicketSelector>
            <StyledField as="select" name="tickets" value={cartTix} onChange={(event) => (setCartTix(event.target.value))} >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option value={num} key={num}>
                  {num} Ticket{num > 1 && 's'}
                </option>
              ))}
            </StyledField>

            <FlexContainer>
              <Row>
                <P>
                  <Label>Subtotal:</Label>
                </P>
                <P>
                  ${cartTix * 12}.00
                </P>
              </Row>

              <Row>
                <P>
                  <Label>Fees:</Label>
                </P>
                <P>
                  $5.00
                </P>
              </Row>

              <Row>
                <P>
                  <Label>Total:</Label>
                </P>
                <P>
                  ${cartTix * 12 + 5}.00
                </P>
              </Row>
            </FlexContainer>


            <Submit type="submit">Add to cart</Submit>
          </TicketSelector>
        </FormContainer>
      )}
    </Formik>
  )
}

export default FormComponent
  