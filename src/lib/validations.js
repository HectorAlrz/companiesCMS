import * as Yup from 'yup'

export const companySchema = Yup.object({
    name: Yup.string()
      .min(2,'Este campo debe contener al menos 5 caracteres')
      .max(25,'Este campo debe contener como máximo')
      .required('Este campo es obligatorio'),
  })