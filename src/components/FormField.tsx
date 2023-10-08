import { HTMLInputTypeAttribute } from 'react'
import { Controller } from "react-hook-form"
import { InputFieldNames } from './Bookings/BookingForm'
import { Cell, Layout, StatusType, FormField as WixFormField } from '@wix/design-system'
import { FormInput } from './FormInput'


export type FormFieldProps = {
    name: InputFieldNames,
    control: any,
    type: HTMLInputTypeAttribute
    label: string,
    disabled?: boolean
    required?: boolean
    errors: any
    value?: any
    onChange?: any
}

export const FormField = (props : FormFieldProps) => {

    const {control, name, label} = props

    const isNotValid = (errors:any) => {
        if(errors[props.name]?.type === 'required'){
            return {statusMessage: errors[props.name].message,status: 'error' as StatusType}
        }
        else{
            return {statusMessage: ''}
        }
    }
    return(
        <Controller 
        name={name}
        control={control}
        rules={{ required: "required field" }}
        render={({field: {onChange, ref, value}}) => {
            return(
                <Layout>
                    <Cell span={12}>
                        <WixFormField label={label} labelPlacement="top" {...isNotValid(props.errors)}>
                            <FormInput {...props} onChange={onChange} value={value}/>
                        </WixFormField>
                    </Cell>
                </Layout>
            )
        }}
        />
    )
}