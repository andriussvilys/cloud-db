import { useEffect, useState, createContext } from 'react';
import { BookingProps } from './Bookings/Booking';
import { BookingList } from './Bookings/BookingList';
import { Card, WixDesignSystemProvider } from '@wix/design-system';
import "@wix/design-system/styles.global.css";
import { FormModal, OpenModalActionType } from './Modal/FormModal';

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
    fetch("http://localhost:5000/bookings", {method: "GET"})
    .then(res => {
      return res.text()
    })
    .then((res:any) => {
      setBookings(JSON.parse(res))
    })
  }

  useEffect(()=>{
    reloadRecords()
  }, [])

  return (
    <WixDesignSystemProvider>
        <AppContext.Provider value={{reloadRecords, openModal, closeModal}}>
          {/* <ModalContextProvider> */}
            <Card showShadow>
              <Card.Content>
                <BookingList bookings={bookings} />
              </Card.Content>
            </Card>
            <FormModal isOpen={isModalOpen} action={modalAction} openModal={openModal} closeModal={closeModal} />
          {/* </ModalContextProvider> */}
        </AppContext.Provider>
    </WixDesignSystemProvider>
  )
}

export default App;
