import { BookingProps } from "../Bookings/Booking";
import { BookingForm, FormType } from "../Bookings/BookingForm";
import { CustomModalLayout, Modal } from "@wix/design-system";

export type CreateForm = {
    id: FormType.CREATE;
    values: {}
  };
  
  export type EditForm = {
    id: FormType.EDIT;
    values: BookingProps
  };

export type OpenModalActionType = CreateForm | EditForm;

export type FormModalProps = {
    action: OpenModalActionType,
    isOpen: boolean
    openModal: (action:OpenModalActionType) => void,
    closeModal: () => void
}

export const FormModal = (props:FormModalProps) => {

    const renderForm = (action: OpenModalActionType | undefined) => {
        if(!action){
            return;
        }
        switch (action.id) {
            case FormType.CREATE: {
                return (
                    <BookingForm type={action.id}/>
                );
            }
            case FormType.EDIT: {
                return (
                    <BookingForm type={action.id} values={action.values} />
                );
            }
        }
    }
    
    const renderContent = (action: OpenModalActionType | undefined) => {

        return(
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                secondaryButtonOnClick={props.closeModal}
                onCloseButtonClick={props.closeModal}
                title={action?.id || ""}
                content={
                    renderForm(action)
                }
            />
        )

	};

    return(
        <Modal isOpen={props.isOpen}>
            {renderContent(props.action)}
        </Modal>
    )
  }

  