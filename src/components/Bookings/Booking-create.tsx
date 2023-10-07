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

type BookingCreateProps = {
    values: Inputs
}

export enum InputFieldNames {
    NAME="name",
    DATE="date",
    TIME="time",
    TABLESIZE="tableSize",
    PHONE="phone",
}

export const BookingCreate = (props:BookingCreateProps) => {

    const {
        handleSubmit,
        formState: { errors },
        control
      } = useForm<Inputs>({values: props.values})

      const onSubmit = async (data:Inputs) => {
        const postDataRes = await postData("http://localhost:5000/bookings", data)
        console.log({postDataRes})
      }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div style={{display: "flex", flexDirection:"column", width:"60ch"}}>

                <FormField name={InputFieldNames.NAME} control={control} type="text" label={"Name"} field={{value: "Andrius"}}/>

                <FormField name={InputFieldNames.DATE} control={control} type="date" label={"Date"}/>

                <FormField name={InputFieldNames.TIME} control={control} type="time" label={"Time"}/>

                <FormField name={InputFieldNames.TABLESIZE} control={control} type="number" label={"Table size"}/>

                <FormField name={InputFieldNames.PHONE} control={control} type="tel" label={"Phone number"}/>

            </div>

            <input type="submit" />

        </form>
    )
}
