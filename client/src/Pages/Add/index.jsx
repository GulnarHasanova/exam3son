import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import '../Common/navbar.scss';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  img: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
});

function Index() {


  return (
    <>
    <h1 style={{display:'flex',justifyContent:'center'}}>Signup</h1>
    <div style={{display:'flex',justifyContent:'center'}}>
  
    <Formik
      initialValues={{
        name: '',
        img: '',
        price: 0,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values,{resetForm} )=> {

        const arr = 
          {name:values.name,
           img:values.img,
           price:values.price

          }

          axios.post("http://localhost:4000/pros",arr)
          alert("data is added")


        
        
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <br/>
          <Field name="img" />
          {errors.img && touched.img ? (
            <div>{errors.img}</div>
          ) : null}
           <br/>
          <Field name="price"/>
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <br/>
          <button className='btn btn-primary' type="submit" style={{marginLeft:60,marginTop:20}}>Add</button>
        </Form>
      )}
    </Formik>
  </div>
  </>
   
  )
}

export default Index