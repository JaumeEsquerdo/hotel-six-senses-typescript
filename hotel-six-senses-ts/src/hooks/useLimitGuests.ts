import { useEffect } from "react";
import type { Habitacion } from "@/data/habitaciones";
// Hook: limita el número de huéspedes según la capacidad máxima de la habitación seleccionada.

interface useLimitGuestsProps {
  selectedRoom: string | null;
  numberGuests: number;
  selectedRoomData?: Habitacion;
  setNumberGuests: (value: number) => void;
}
export const useLimitGuests = ({
  selectedRoom,
  numberGuests,
  selectedRoomData,
  setNumberGuests,
}: useLimitGuestsProps): void => {
  // limitar el numero de personas al maximo permitido por habitacion
  useEffect(() => {
    if (!selectedRoomData) return;

    if (
      selectedRoomData.numeroMaximoPersonas &&
      numberGuests > selectedRoomData.numeroMaximoPersonas
    ) {
      setNumberGuests(selectedRoomData.numeroMaximoPersonas);
    }
  }, [selectedRoom, numberGuests, selectedRoomData, setNumberGuests]);
};
