import React from "react";
import SpeciesEntry from "./SpeciesEntry";

export default function MakeRegularList(props) {
  function MakePokeListSprite(myList) {
    return myList.map((data, index) => {
      return (
        <SpeciesEntry
          key={index}
          data={data}
          sprite={props.pokemonData.sprite}
          setSpecies={props.setSpecies}
          extended={props.extended}
          setSelectForm={props.setSelectForm}
        />
      );
    });
  }

  return MakePokeListSprite(props.pokemonData.speciesList);
}
