"use client";
import React from "react";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import FormFieldInput from "../form-field/FormFieldInput";
import { Mail, User } from "lucide-react";
import FormFieldTextarea from "../form-field/FormFieldTextArea";


export default function BookViewingForm() {
  return (
    <div className="min-w-90">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Schedule a Property Viewing</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <div className="grid grid-cols-2 gap-4">
                <FormFieldInput label={"Your Name"} icon={<User size={18}/>}/>
                
                <FormFieldInput label={"Email Address"} icon={<Mail size={18} />}/>
            </div>
                <FormFieldInput label={"Phone Number"}/>
                <FormFieldTextarea label={"Additional Messages"} />
           
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )};