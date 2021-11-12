import React, { useContext } from "react";
import RoomsFilter from "./filter/RoomFilter";
import RoomsList from "./filter/RoomList";
import { RoomContext } from "../Context";
import Loading from "./Loading";

export default function RoomContainer() {
  const context = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
