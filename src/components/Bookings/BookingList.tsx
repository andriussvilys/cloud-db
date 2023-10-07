import React, { Fragment } from 'react'
import { Booking, BookingProps } from "./Booking"

export type BookingListProps = {
    bookings: BookingProps[]
}

export const BookingList = (props:BookingListProps) => {
    return(
        <Fragment>
            {
            props.bookings.map(booking => {
                return(
                    <Booking {...booking} />
                )
            })
            }
        </Fragment>
    )
}