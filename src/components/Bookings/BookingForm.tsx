import { useContext } from 'react'
import { useForm } from "react-hook-form"
import { FormField } from '../FormField'
import { postData, updateData } from '../../requests'
import { BookingProps } from './Booking'
import { Button, Card } from '@wix/design-system'
import { AppContext } from '../App'

export const dateToFormattedDate = (date:Date) => {
    return date.toLocaleDateString('lt-LT', {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    })
}

export const dateToFormattedTime = (date:Date) => {
    return date.toLocaleTimeString('lt-LT',{hour: "numeric", minute: "numeric"})
}

export enum FormType{
    CREATE="POST",
    EDIT="PUT"
}

export type Inputs = {
    _id?: string,
    name: string,
    date: Date,
    time: Date,
    tableSize: number,
    phone: string
}

export interface BookingFormProps{
    values?: BookingProps,
    disabled?: boolean,
    type: FormType
}

export enum InputFieldNames {
    NAME="name",
    DATE="date",
    TIME="time",
    TABLESIZE="tableSize",
    PHONE="phone",
}

export const BookingForm = (props:BookingFormProps) => {

    const {closeModal, reloadRecords} = useContext(AppContext) 

    const {
        handleSubmit,
        formState: { errors },
        control
      } = useForm<Inputs>({mode: "onSubmit", defaultValues: {
        name:props.values?.name,
        date:props.values?.date ? new Date(props.values.date) : new Date(),
        time:props.values?.time ? new Date(props.values.time) : new Date(),
        tableSize: props.values?.tableSize,
        phone: props.values?.phone

      }})

      const onSubmit = async (data:Inputs) => {
        const reqBody = {
            _id: props.values?._id,
            name: data.name,
            date: new Date(data.date),
            time: new Date((data.time as any).date),
            tableSize: data.tableSize,
            phone: data.phone
        }
        if(props.type === FormType.CREATE){
            await postData(reqBody)
        }
        if(props.type === FormType.EDIT){
            await updateData(reqBody)
            
        }
        reloadRecords()
        closeModal()
      }
      const onError = async (errors:any) => {
        console.log(errors)
      }

    return(
        <Card>
            <Card.Content>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    
                    <div className='tableContainer'>

                        <FormField errors={errors} disabled={props.disabled} name={InputFieldNames.NAME} control={control} type="text" label={"Name"} value={props.values?.name}/>
                        <FormField errors={errors} disabled={props.disabled} name={InputFieldNames.DATE} control={control} type="date" label={"Date"} value={props.values?.date}/>
                        <FormField errors={errors} disabled={props.disabled} name={InputFieldNames.TIME} control={control} type="time" label={"Time"} value={props.values?.time}/>
                        <FormField errors={errors} disabled={props.disabled} name={InputFieldNames.TABLESIZE} control={control} type="number" label={"Table size"} value={props.values?.tableSize}/>
                        <FormField errors={errors} disabled={props.disabled} name={InputFieldNames.PHONE} control={control} type="tel" label={"Phone number"} value={props.values?.phone}/>

                        <Button type={"submit"} >Save</Button>
                    </div>

                </form>
            </Card.Content>
        </Card>
    )
}
