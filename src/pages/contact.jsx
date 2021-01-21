import React from "react"
import MainLayout from "@layouts/main_layout"
import Seo from "@components/Seo"

import { useFormik } from "formik"
import * as yup from "yup"

import TextField from "@material-ui/core/TextField"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import { onSave, onSumbit } from "@/store/contactRed"
import { useDispatch, useSelector } from "react-redux"

import Axios from "axios"

const theme_dark = createMuiTheme({
  palette: { error: { main: "#F397A6" } },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "white",
        "&$focused": {
          color: "#E7E7E7",
        },
      },
    },
    MuiInput: {
      root: {
        color: "#DFEEF5",
      },
      underline: {
        "&$error": {
          color: "white",
        },
        "&$focused": {
          borderBottom: "0px solid #D2E9FE",
        },
        "&&&&:before": {
          borderBottom: "1px solid #D2E9FE",
        },
        "&&&&:after": {
          borderBottom: "1px solid #91ACF9",
        },
      },
    },
  },
})

const theme_light = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&$focused": {
          borderBottom: "0",
        },
        "&&&&:before": {
          borderBottom: "1px solid #CCD0D7",
        },
        "&&&&:after": {
          borderBottom: "1px solid #414347",
        },
      },
    },
  },
})

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .max(30, "Name should be of minimum 30 characters length")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
})

const Contact = () => {
  const dispatch = useDispatch()

  const details = useSelector((state) => state.contactReducer.details)
  const saveSuccess = useSelector((state) => state.contactReducer.isSaved)
  const submitSuccess = useSelector((state) => state.contactReducer.isSubmitted)

  const theme = useSelector((state) => state.themeReducer.themeColor[0])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: details.name,
      email: details.email,
      content: details.content,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      resetForm()
      dispatch(onSumbit())
    },
  })

  return (
    <MainLayout>
      <Seo />
      <div className="pt-8 pb-12">
        <div className="max-w-screen-md mx-auto px-8 py-4 bg-white dark:bg-bluegray-800 text-white relative dark-transition">
          {saveSuccess && (
            <div
              className="absolute right-0 top-0 rounded-sm px-6 py-3 shadow-md bg-opacity-80 text-gray-700
            dark:bg-bluegray-700 dark:text-gray-100"
            >
              <p>Saved</p>
            </div>
          )}
          {!submitSuccess ? (
            <MuiThemeProvider
              theme={theme === "light" ? theme_light : theme_dark}
            >
              <form
                name="contact"
                action="https://getform.io/f/3d5276b4-4c80-4596-803b-ebda0111e5b4"
                method="POST"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-8">
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
                <div className="mb-8">
                  <TextField
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
                  className="outline-none focus:outline-none px-3 py-2 resize-none w-full h-64 border-2 border-gray-700 border-opacity-20 dark:bg-bluegray-600 dark-transition text-bluegray-800 dark:text-bluegray-100"
                  required
                  as="textarea"
                  label="Content"
                  name="content"
                  id="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
                <div className="mt-4 flex justify-around">
                  <button
                    type="submit"
                    variant="outlined"
                    disabled={saveSuccess}
                    className="transition-colors select-none focus:outline-none px-6 py-2 
                    shadow-md text-gray-800 opacity-80 hover:opacity-60 dark:text-gray-50 dark:shadow-md dark:hover:opacity-75 dark:bg-bluegray-700 dark-transition"
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    variant="outlined"
                    disabled={saveSuccess}
                    className="transition-colors select-none focus:outline-none px-6 py-2 
                    shadow-md text-gray-800 opacity-80 hover:opacity-60 dark:text-gray-50 dark:shadow-md dark:hover:opacity-75 dark:bg-bluegray-700 dark-transition"
                    onClick={() => dispatch(onSave(formik.values))}
                  >
                    Save
                  </button>
                </div>
              </form>
            </MuiThemeProvider>
          ) : (
            <div className="flex justify-center items-center h-56 text-lg">
              <p className="text-primary tracking-wider">
                Thanks for sending !!
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact
