import { EntityField } from "../EntityFields"

export const BookingHeader = () => {
    return(
        <div className="tableRow">
            <EntityField value={"name"}></EntityField>
            <EntityField value={"date"}></EntityField>
            <EntityField value={"time"}></EntityField>
            <EntityField value={"tableSize"}></EntityField>
            <EntityField value={"phone"}></EntityField>
        </div>
    )
}
