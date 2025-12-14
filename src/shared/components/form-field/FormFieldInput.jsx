import React from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

export default function FormFieldInput({label, errors, icon, ...props}) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Input icon={icon}  {...props} />
      <FieldError errors={errors} />
    </Field>
  )
}