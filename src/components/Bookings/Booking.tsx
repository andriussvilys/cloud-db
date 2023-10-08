import { useForm } from "react-hook-form"
import { deleteData, postData } from '../../requests'
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
        const postRes = await postData("http://localhost:5000/bookings", data)
        console.log({postRes})
      }

      const onDelete = async (data:Inputs) => {
        const deleteRes = await deleteData("http://localhost:5000/bookings", data)
        console.log({deleteRes})
      }

      const {name,date,time,tableSize,phone} = props

    return(
            
            <div className="tableRow">

            <EntityField name={"name"} value={name} />
            <EntityField name={"date"} value={date} />
            <EntityField name={"time"} value={time} />
            <EntityField name={"tableSize"} value={tableSize} />
            <EntityField name={"phone"} value={phone} />

            <button className="editButton">Edit</button>
            <button className='deleteButton' onClick={() => onDelete({_id: props._id})}>Delete</button>

            </div>

    )
}
