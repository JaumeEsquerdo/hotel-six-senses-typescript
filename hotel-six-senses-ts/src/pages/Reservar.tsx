import { useState } from "react";
import type { FormEvent } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import "@/css/reservar.css"
import { habitaciones } from "@/data/habitaciones";
import { useAppContext } from "@/context/AppContext";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Modal from "@/components/Modal";
import { useLimitGuests } from "@/hooks/useLimitGuests";
import type { Habitacion } from "@/data/habitaciones";
import { useRoomPriceSelected } from "@/hooks/useRoomPriceSelected";
import { FooterBooking } from "@/components/FooterBooking";

const Reservar = () => {
    const { selectedRoom, setSelectedRoom, priceRoom, setPriceRoom } = useAppContext();

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1); // añadir un dia mas (para q sea mañana claro)
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, tomorrow])
    const [checkIn, checkOut] = dateRange;
    const [showModal, setShowModal] = useState(false);
    const [numberGuests, setNumberGuests] = useState<number>(1)
    const [nameGuest, setNameGuest] = useState<string>("")
    const [emailGuest, setEmailGuest] = useState<string>("")
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
    const [showTermsTooltip, setShowTermsTooltip] = useState<boolean>(false)
    const selectedRoomData: Habitacion | undefined = habitaciones.find(hab => hab.id === selectedRoom);
    /*
    en los onChange se pone `onChange={(date: Date | null) => date && setCheckIn(date)}` porque DatePicker puede devolver null si el usuario borra la fecha. Así comprobamos que date no es null antes de llamar a setCheckIn o setCheckOut. Si no lo hacemos, TS nos da error porque setCheckIn y setCheckOut esperan un Date, no un Date | null.
    */

    const getNumberOfDays = (start: Date | null, end: Date | null): number => {
        if (!start || !end) return 0;
        const startDate = new Date(start);
        const endDate = new Date(end);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        const diffTime = endDate.getTime() - startDate.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return Math.round(diffDays)

    };
    const days = getNumberOfDays(checkIn, checkOut);
    const totalPrice = priceRoom && days ? priceRoom * days : 0;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedRoom("")
        setDateRange([today, tomorrow])
        setNumberGuests(1)
        setNameGuest("")
        setEmailGuest("")
        setAcceptTerms(false)
    }

    const handleDateChange = (dates: [Date | null, Date | null]) => setDateRange(dates);

    // Hook: limita el número de huéspedes según la capacidad máxima de la habitación seleccionada.
    useLimitGuests({ selectedRoom, numberGuests, selectedRoomData, setNumberGuests });

    // asingar el precio de la habtacion seleccionada
    useRoomPriceSelected({ setPriceRoom, selectedRoom, selectedRoomData });

    /* reset de scroll para cuando entre en una hab individual no este el scroll bajo */
    useScrollToTop();

    return (
        <>
            <div className="Booking-container">
                <h2 className="Booking-title">reserva tu experiencia en Six Senses Ibiza</h2>
                <form className="Booking-form" onSubmit={handleSubmit}>
                    <label className="Booking-label">nombre completo
                        <input value={nameGuest} onChange={(e) => setNameGuest(e.target.value)} className="Booking-input" type="text" name="name" placeholder="Ana García López"
                            required /></label>

                    <label className="Booking-label">email
                        <input className="Booking-input" value={emailGuest} onChange={(e) => setEmailGuest(e.target.value)} type="email" name="email" placeholder="ejemplo@correo.com" required /></label>

                    <label className="Booking-label">tipo de habitación
                        <select
                            className="Booking-input"
                            value={selectedRoom || ''}
                            onChange={(e) => setSelectedRoom(e.target.value)}
                            required
                        >
                            <option value="">- elige una opción -</option>
                            {habitaciones.map(hab => (
                                <option key={hab.id} value={hab.id}>{hab.name}</option>
                            ))}
                        </select>
                    </label>
                    <label className="Booking-label">fechas de estancia
                        <DatePicker
                            selectsRange
                            startDate={checkIn}
                            endDate={checkOut}
                            dateFormat="dd/MM/yyyy"
                            minDate={today} selected={checkIn} onChange={handleDateChange} className="datepicker Booking-date" />
                    </label>

                    <label className="Booking-label">personas
                        <input className="Booking-input" type="number"
                            value={numberGuests}
                            onChange={(e) => setNumberGuests(e.target.valueAsNumber || 1)
                            }
                            name="guests" min={1} max={selectedRoomData ? selectedRoomData.numeroMaximoPersonas : 10} required /></label>

                    <p className="Booking-text">
                        precio total: <span className="Booking-priceModal">{totalPrice}</span>€
                    </p>
                    <label className="Booking-label Booking-label--terms">
                        <input className="Booking-input Booking-input--terms" type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)
                            }
                            required />
                        Al confirmar la reserva, acepto los <span onMouseEnter={() => setShowTermsTooltip(true)} onMouseLeave={() => setShowTermsTooltip(false)} className={`Booking-terms`}>términos y condiciones
                            {showTermsTooltip && (
                                <div className="Booking-termsTooltip">
                                    <p className="Booking-text">
                                        Al confirmar la reserva, aceptas nuestras políticas de cancelación, privacidad y condiciones de uso. Esto incluye la autorización para procesar tus datos personales, las normas de pago y las posibles modificaciones de horarios o servicios del hotel. Por favor, lee detenidamente estas condiciones antes de continuar con la reserva.
                                    </p>
                                </div>
                            )}
                        </span>.
                    </label>

                    <button className="Booking-btn" type="submit">confirmar reserva</button>
                </form>
                {showModal && (
                    <Modal nameGuest={nameGuest} checkIn={checkIn} checkOut={checkOut} handleCloseModal={handleCloseModal} emailGuest={emailGuest} totalPrice={totalPrice} />
                )}
            </div>

            <FooterBooking />
        </>
    );
}

export default Reservar;