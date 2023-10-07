import { Fragment, HTMLInputTypeAttribute } from 'react'
import { Controller } from "react-hook-form"
import { InputFieldNames } from './Bookings/Booking-create'


type ForlFieldProps = {
    name: InputFieldNames,
    control: any,
    type: HTMLInputTypeAttribute
    label: string,
    field?: any,
    disabled?: boolean
}

export const FormField = (props : ForlFieldProps) => {
    const {control, name, type, label, disabled} = props
    return(
        <Controller 
        name={name}
        control={control}
        render={({field}) => {
            return(
                <Fragment>
                    <label htmlFor={name}>{label}:</label>
                    <input 
                    type={type}
                    id={name} 
                    {...field}
                    disabled={disabled}
                    />
                </Fragment>
            )
        }}
        />
    )
}