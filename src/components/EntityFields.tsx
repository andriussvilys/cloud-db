import '../style.css'

export type EntityFieldProps = {
    name?: string,
    value: any
}

export const EntityField = (props:EntityFieldProps) => {
    return(
        <div className="entityField">
            {/* <span className="entityField_name">{props.name}</span> */}
            <span className="entityField_value">{props.value}</span>
        </div>
    )
}