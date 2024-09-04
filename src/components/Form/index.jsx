import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, useField} from 'formik' 
import {Input, Label, Error, Submit} from './styles'

const InputComponent = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  )
}

const FormComponent = ({handleSuccess}) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string()
              .email('Must be a valid email address')
              .required('Required field')
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: ''
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <InputComponent name="name" type="type" label="Name" autoComplete="off" />
          <InputComponent name="email" type="email" label="Email" autoComplete="off" />

          <Submit type="submit">Submit</Submit>
        </Form>
      )}
    </Formik>
  )
}



          // <label>Name: </label>
          // <Field name="name" type="text" autoComplete="off" />
          // {touched.name && errors && <div>{errors.name}</div>}
          
          // <label>Email address: </label>
          // <Field name="email" type="email" autoComplete="off" />
          // {touched.email && errors && <div>{errors.email}</div>}

          // <button type="submit">Submit</button>




          //{props && <p>prooops</p>}
//
          // <InputComponent name="name" type="type" label="Name" />
          // <InputComponent name="name" type="type" label="Name" />
          //{props.touched.name && props.errors && <div>{props.errors.name}</div>}
          //{props.touched.email && props.errors && <div>{props.errors.email}</div>}

          // {touched.name && errors && <div>{errors.name}</div>}
          // {touched.email && errors && <div>{errors.email}</div>}


export default FormComponent
  