import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : items.length ? (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  ) : (
    <div className="noCards">
      No character with that name has had a role in the Breaking Bad series.<br />
      At least not one worth mentioning.
    </div>
  );
};

export default CharacterGrid;
