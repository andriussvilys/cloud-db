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
