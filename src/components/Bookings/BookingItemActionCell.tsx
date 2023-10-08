import { TableActionCell } from "@wix/design-system"
import { Delete, Edit } from "@wix/wix-ui-icons-common"
import { deleteData } from "../../requests"
import { useContext } from "react"
import { FormType } from "./BookingForm"
import { AppContext } from "../App"

export const BookingItemActionCell = (props) => {

    const {openModal} = useContext(AppContext)
    const {reloadRecords} = useContext(AppContext)


    return(
    <TableActionCell
    secondaryActions={[
    {
        text: 'Edit',
        icon: <Edit />,
        onClick: () => {openModal({id:FormType.EDIT, values: props})},
    },
    {
        text: 'Delete',
        icon: <Delete />,
        onClick: async () => {
            await deleteData(props); 
            reloadRecords()}
    },
    ]}
    alwaysShowSecondaryActions
    numOfVisibleSecondaryActions={2}
    />)
}