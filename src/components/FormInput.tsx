import { DatePicker, Input, NumberInput, TimeInput } from "@wix/design-system"
import { FormFieldProps } from "./FormField"


export const FormInput = (props:FormFieldProps) => {
    
    switch(props.type){
        case "date":{
            return <DatePicker 
            onChange={props.onChange} 
            value={new Date(props.value)} 
            />
        }
        case "tel":{
            return <Input 
            value={props.value} 
            onChange={props.onChange} 
            />
        }
        case "text":{
            return <Input 
            value={props.value} 
            onChange={props.onChange} 
            />
        }
        case "time":{
            return <TimeInput 
            value={new Date(props.value)}
            onChange={props.onChange}
            filterTime={(date) => {
                if(date.getHours() > 11 && date.getHours() < 23){
                    return true
                }
                return false
            }}
            step={30}
            locale="lt"
            />
        }
        case "number":{
            return <NumberInput 
            value={props.value} 
            onChange={props.onChange} 
            />
        }
    }
}