import * as Yup from 'yup'

export const companySchema = Yup.object({
    name: Yup.string()
      .min(2,'The company must have at least 2 characters.')
      .max(30,'No more than 30 characters.')
      .required('This field is required.'),
      description: Yup.string()
      .min(20,'Description must contain at least 20 characters.')
      .max(300,'Desription must contain no more than 150 characters.')
      .required('This field is required.'),
      email: Yup.string()
        .email('Must be a valid email.')
        .required('This field is required.'),
      logo_url: Yup.string()
        .required('This field is required.'),
  })