import React from 'react'
import { Booking, BookingProps } from "./Booking"
import "../../style.css"
import { BookingHeader } from './Booking-header'
import { BookingForm } from './BookingForm'

export type BookingListProps = {
    bookings: BookingProps[]
}

export const BookingList = (props:BookingListProps) => {
    return(
        <div className='tableContainer'>
            <BookingHeader/>
            {
            props.bookings.map(booking => {
                return(
                    <Booking key={booking._id} {...booking} />
                )
            })
            }
            <BookingForm values={{}}/>
        </div>
    )
}