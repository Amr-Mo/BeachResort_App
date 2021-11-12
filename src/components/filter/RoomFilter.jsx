import React, { useContext } from "react";
import { RoomContext } from "../../Context";
import Title from "../Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  // Identify Data
  // get unique types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique people
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // Identify Data

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}

        {/* select type */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end select type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* End room price */}
        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End of Size */}
        {/* CheckBox */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* End of CheckBox */}
      </form>
    </section>
  );
}
