import { useState } from "react";
import type { FormEvent } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import "@/css/reservar.css"
import { habitaciones } from "@/data/habitaciones";
import { useAppContext } from "@/context/AppContext";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Reservar = () => {
    const { selectedRoom, setSelectedRoom } = useAppContext();

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1); // añadir un dia mas (para q sea mañana claro)
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, tomorrow])
    const [checkIn, checkOut] = dateRange;
    const [showModal, setShowModal] = useState(false);
    const [numberGuests, setNumberGuests] = useState<number>(1)
    const [nameGuest, setNameGuest] = useState<string>("")
    const [emailGuest, setEmailGuest] = useState<string>("")
    /*
        en los onChange se pone `onChange={(date: Date | null) => date && setCheckIn(date)}` porque DatePicker puede devolver null si el usuario borra la fecha. Así comprobamos que date no es null antes de llamar a setCheckIn o setCheckOut. Si no lo hacemos, TS nos da error porque setCheckIn y setCheckOut esperan un Date, no un Date | null.
     */


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

    }
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
                            minDate={today} selected={checkIn} onChange={(update: [Date | null, Date | null]) => setDateRange(update)} className="datepicker Booking-date" />
                    </label>

                    <label className="Booking-label">personas
                        <input className="Booking-input" type="number"
                            value={numberGuests}
                            onChange={(e) => setNumberGuests(e.target.valueAsNumber || 1)
                            }
                            name="guests" min="1" max="10" required /></label>

                    <button className="Booking-btn" type="submit">confirmar reserva</button>
                </form>
                {showModal && (
                    <div className="Booking-modal">
                        <h2 className="Booking-titleModal">¡Enhorabuena {nameGuest}, has completado tu reserva en Six Senses!</h2>
                        <p className="Booking-textModal">Fechas de la reserva del <span className="Booking-dateModal">{checkIn?.toLocaleDateString()}</span> al <span className="Booking-dateModal">{checkOut?.toLocaleDateString()}</span></p>
                        <p className="Booking-textModal">Te hemos enviado los datos de confirmación a {emailGuest}</p>
                        <button className="Booking-btn" onClick={handleCloseModal}>Cerrar</button>


                    </div>
                )}
            </div>

            <div className="Booking-info">
                <div className="Booking-infoTextos">

                    <h3>sobre el hotel</h3>
                    <p>
                        Six Senses Ibiza es un santuario en la costa norte de la isla, donde el lujo se encuentra con la sostenibilidad.
                        nuestro equipo está disponible todos los días y a todas horas para ayudarte con cualquier detalle de tu estancia.
                    </p>
                    <h3>contacto</h3>
                    <p className="Booking-infoTexto">
                        <span className="material-symbols-outlined">location_on</span>
                        Cala Xarraca, Ibiza<br />
                        <span className="material-symbols-outlined">call</span>
                        +34 871 008 875<br />
                        <span className="material-symbols-outlined">mail</span>
                        reservations-ibiza@sixsenses.com
                    </p>

                </div>
            </div>


        </>
    );
}

export default Reservar;