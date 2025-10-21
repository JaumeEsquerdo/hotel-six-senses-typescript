interface ModalProps {
    nameGuest: string;
    checkIn: Date | null;
    checkOut: Date | null;
    handleCloseModal: () => void;
    emailGuest: string;
    totalPrice?: number;

}

const Modal = ({ nameGuest, checkIn, checkOut, handleCloseModal, emailGuest, totalPrice }: ModalProps) => {
    return (
        <div className="Booking-modal">
            <h2 className="Booking-titleModal">¡Enhorabuena {nameGuest}, has completado tu reserva en Six Senses!</h2>
            <p className="Booking-textModal">Fechas de la reserva del <span className="Booking-dateModal">{checkIn?.toLocaleDateString()}</span> al <span className="Booking-dateModal">{checkOut?.toLocaleDateString()}</span></p>
            <p className="Booking-textModal">Precio total de la reserva: <span className="Booking-priceModal">{totalPrice}€</span></p>
            <p className="Booking-textModal">Te hemos enviado los datos de confirmación a <span className="Booking-emailModal">{emailGuest}</span></p>
            <button className="Booking-btn" onClick={handleCloseModal}>Cerrar</button>
        </div>
    );
}

export default Modal;