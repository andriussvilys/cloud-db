import { useEffect, useState, createContext } from 'react';
import { BookingProps } from './Bookings/Booking';
import { BookingList } from './Bookings/BookingList';
import { Card, WixDesignSystemProvider } from '@wix/design-system';
import "@wix/design-system/styles.global.css";
import { FormModal, OpenModalActionType } from './Modal/FormModal';
import { getData } from '../requests';

type AppContextProps = {
  reloadRecords: () => void,
  openModal: (action:OpenModalActionType) => void,
  closeModal: () => void
}
const appContextProps:AppContextProps = {
  reloadRecords: () => null,
  openModal: (action:OpenModalActionType) => null,
  closeModal: () => null
}

export const AppContext = createContext(appContextProps)

export const App = () => {

  const [bookings, setBookings] = useState<BookingProps[]>([])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalAction, setModalAction] = useState<OpenModalActionType>()

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openModal = (action:OpenModalActionType) => {
    setModalAction(action)
    setIsModalOpen(true)
  }

  const reloadRecords = async () => {
    console.log("reload records")
    const response = await getData()
    console.log(response)
    setBookings(response)
  }

  useEffect(()=>{
    reloadRecords()
  }, [])

  return (
    <WixDesignSystemProvider>
        <AppContext.Provider value={{reloadRecords, openModal, closeModal}}>
            <Card showShadow>
              <Card.Content>
                <BookingList bookings={bookings} />
              </Card.Content>
            </Card>
            <FormModal isOpen={isModalOpen} action={modalAction} openModal={openModal} closeModal={closeModal} />
        </AppContext.Provider>
    </WixDesignSystemProvider>
  )
}

export default App;
