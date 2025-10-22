import { useEffect } from "react";
import type { AppContextType } from "@/context/AppContext";
import type { Habitacion } from "@/data/habitaciones";
// asingar el precio de la habtacion seleccionada

type useRoomPriceSelectedPropos = Pick<
  AppContextType,
  "setPriceRoom" | "selectedRoom"
> & { selectedRoomData: Habitacion | undefined };

export const useRoomPriceSelected = ({
  setPriceRoom,
  selectedRoom,
  selectedRoomData,
}: useRoomPriceSelectedPropos): void => {
  useEffect(() => {
    if (!selectedRoomData) {
      setPriceRoom(0);
      return;
    }
    setPriceRoom(selectedRoomData.price);
  }, [selectedRoom, selectedRoomData, setPriceRoom]);
};
