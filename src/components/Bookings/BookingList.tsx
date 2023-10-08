import { useContext} from 'react'
import "../../style.css"
import { Button, Table, TableToolbar } from '@wix/design-system'
import { BookingProps } from './Booking'
import { Add,} from '@wix/wix-ui-icons-common';
import { BookingItemActionCell } from './BookingItemActionCell';
import { FormType, dateToFormattedDate, dateToFormattedTime } from './BookingForm';
import { AppContext } from '../App';

export type BookingListProps = {
    bookings: BookingProps[]
}

export const BookingList = (props:BookingListProps) => {

    const {openModal} = useContext(AppContext)

    const columns = [
        {title: "name", render: (row:any) => {return row.name}},
        {title: "date", render: (row:any) => dateToFormattedDate(new Date(row.date))},
        {title: "time", render: (row:any) => dateToFormattedTime(new Date(row.time))},
        {title: "tableSize", render: (row:any) => row.tableSize},
        {title: "phone", render: (row:any) => row.phone},
        {
          title: "",
            render: (row) => {
              return(
                <BookingItemActionCell {...row}/>
            )
          },
          },
    ]

    return(
        <Table
            data={props.bookings}
            columns={columns}
        >
          <TableToolbar>
            <TableToolbar.Title>Bookings</TableToolbar.Title>
            <TableToolbar.ItemGroup>
              <TableToolbar.Item>
                <Button size="large" prefixIcon={<Add />} onClick={() => {openModal({id:FormType.CREATE, values:{}})}}>
                  Add
                </Button>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
            <Table.Content/>
        </Table>
    )
}