import React from 'react'
import { useForm } from "react-hook-form"
import { FormField } from '../FormField'
import { postData } from '../../requests'

export const timestampToFormattedDate = (timestamp:number|undefined) => {
    if(timestamp){
        return new Date(timestamp).toLocaleDateString('lt-LT', {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        })
    }
}

export const timestampToFormattedTime = (timestamp:number|undefined) => {
    if(timestamp){
        return new Date(timestamp).toLocaleTimeString('lt-LT',{hour: "numeric", minute: "numeric"})
    }
}

type Inputs = {
    name?: string,
    date?: string,
    time?: string,
    tableSize?: number,
    phone?: string
}

type BookingFormProps = {
    values: Inputs,
    disabled?: boolean
}

export enum InputFieldNames {
    NAME="name",
    DATE="date",
    TIME="time",
    TABLESIZE="tableSize",
    PHONE="phone",
}

export const BookingForm = (props:BookingFormProps) => {

    const {
        name,
        date,
        time,
        tableSize,
        phone
    } = props.values;

    const {
        handleSubmit,
        formState: { errors },
        control
      } = useForm<Inputs>()

      const onSubmit = async (data:Inputs) => {
        const postDataRes = await postData("http://localhost:5000/bookings", data)
        console.log({postDataRes})
      }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className='tableContainer'>

                <FormField disabled={props.disabled} required={true} name={InputFieldNames.NAME} control={control} type="text" label={"Name"} field={{value: name}}/>
                <FormField disabled={props.disabled} required={true} name={InputFieldNames.DATE} control={control} type="date" label={"Date"} field={{value: date}}/>
                <FormField disabled={props.disabled} required={true} name={InputFieldNames.TIME} control={control} type="time" label={"Time"} field={{value: time}}/>
                <FormField disabled={props.disabled} required={true} name={InputFieldNames.TABLESIZE} control={control} type="number" label={"Table size"} field={{value:tableSize}}/>
                <FormField disabled={props.disabled} required={true} name={InputFieldNames.PHONE} control={control} type="tel" label={"Phone number"} field={{value:phone}}/>

                <button  onSubmit={handleSubmit(onSubmit)} >Save</button>
            </div>


        </form>
    )
}
