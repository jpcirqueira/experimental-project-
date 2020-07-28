import React from 'react';
import { Formik } from 'formik';
import "./styles.css";
import * as Yup from 'yup';

export default function TestFormik(){
//    let yup = require('yup');

    const contactSchema = Yup.object().shape({
      email: Yup
            .string()
            .email()
            .required(),
    })
    return(
        <div className="fundo">
        <Formik
          className="form"
          initialValues={{name:'', email: '', password: '' }}
          validationSchema={contactSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
               <h2>name:</h2>
               <input
               type="text"
               name="name"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.name}
               />
              {errors.name && touched.name && errors.name}
              <h2>email:</h2>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <h2>password:</h2>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              
              <button type="submit" disabled={isSubmitting}>
                ADD
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
}

