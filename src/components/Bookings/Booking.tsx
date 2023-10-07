import { useForm } from "react-hook-form"
import { postData } from '../../requests'
import { EntityField } from '../EntityFields'
import "../../style.css"

export type Inputs = {
    _id: string,
    name?: string,
    date?: string,
    time?: string,
    tableSize?: number,
    phone?: string
}

export type BookingProps = {
    _id: string,
    name: string,
    date: string,
    time: string,
    tableSize: number,
    phone: string
}

export enum InputFieldNames {
    NAME="name",
    DATE="date",
    TIME="time",
    TABLESIZE="tableSize",
    PHONE="phone",
}

export const Booking = (props:BookingProps) => {

    const {
        handleSubmit,
      } = useForm<Inputs>({values: props})

      const onSubmit = async (data:Inputs) => {
        const postDataRes = await postData("http://localhost:5000/bookings", data)
        console.log({postDataRes})
      }

      const {name,date,time,tableSize,phone} = props

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div style={{display: "flex"}}>

            <EntityField name={"name"} value={name} />
            <EntityField name={"date"} value={date} />
            <EntityField name={"time"} value={time} />
            <EntityField name={"tableSize"} value={tableSize} />
            <EntityField name={"phone"} value={phone} />

            <button className="editButton">Edit</button>
            <button className='deleteButton'>Delete</button>

            </div>


        </form>
    )
}
