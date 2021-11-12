import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

function FeaturedRooms() {
  const context = useContext(RoomContext);
  const { loading, featuredRooms } = context;

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => <Room key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
}

export default FeaturedRooms;
