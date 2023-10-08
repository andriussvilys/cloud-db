import { Fragment, HTMLInputTypeAttribute } from 'react'
import { Controller } from "react-hook-form"
import { InputFieldNames } from './Bookings/BookingForm'


type ForlFieldProps = {
    name: InputFieldNames,
    control: any,
    type: HTMLInputTypeAttribute
    label: string,
    field?: any,
    disabled?: boolean
    required?: boolean
}

export const FormField = (props : ForlFieldProps) => {
    const {control, name, type, label, disabled, required} = props
    return(
        <Controller 
        name={name}
        control={control}
        render={({field}) => {
            return(
                <Fragment>
                    <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                        <label htmlFor={name}>{label}:</label>
                        <input 
                        type={type}
                        id={name} 
                        {...field}
                        disabled={disabled}
                        required={required}
                        />
                    </div>
                </Fragment>
            )
        }}
        />
    )
}