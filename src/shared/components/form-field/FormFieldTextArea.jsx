import React from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Textarea } from '../ui/textarea'

export default function FormFieldTextarea({label, errors, ...props}) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Textarea {...props} />
      <FieldError errors={errors} />
    </Field>
  )
}