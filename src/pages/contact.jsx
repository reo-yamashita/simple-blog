import React, { useState } from "react"
import MainLayout from "@layouts/main_layout"
import Seo from "@components/Seo"

import { useFormik } from "formik"
import * as yup from "yup"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import { Redirect } from "react-router-dom"

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:after": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
      },
    },
  },
})

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Password is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
})

const Contact = () => {
  const [status, setStatus] = useState(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setStatus(true)
      resetForm()
    },
  })

  if (status) return <Redirect to="/" />
  return (
    <MainLayout>
      <Seo />
      <div className="pt-8 pb-12">
        <div className="max-w-screen-md mx-auto px-8 py-4 bg-white ">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={formik.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <MuiThemeProvider theme={theme}>
              <div className="mb-4">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="mb-6">
                <TextField
                  className="hover:"
                  fullWidth
                  placeholder="near_closer@closer.com"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <textarea
                className="focus:outline-none px-2 py-1 resize-none w-full h-48 border-2 border-gray-700 border-opacity-20"
                required
                as="textarea"
                label="Content"
                name="content"
                id="content"
                value={formik.values.content}
                onChange={formik.handleChange}
              />
              <div className="mt-4 text-center">
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  <Button
                    variant="outlined"
                    type="submit"
                    className="select-none  focus:outline-none"
                  >
                    Submit
                  </Button>
                )}
              </div>
            </MuiThemeProvider>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact
