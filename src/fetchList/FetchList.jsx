import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLimitedPokemons } from "../redux/actions/actions";
import CardDisplay from "../cardDisplay/CardDisplay";
import "./fetchlist.css";

const FetchList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoBack = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  useEffect(() => {
    dispatch(fetchLimitedPokemons(10)); // Fetch limited pages
  }, [dispatch]);

  const startIndex = (currentPage - 1) * limit;
  const displayedPokemons = pokemons.slice(startIndex, startIndex + limit);

  return (
    <div className="fetchListContainer">
      {displayedPokemons.map((pokemon, index) => (
        <div className="fetchListItem">
          <CardDisplay
            key={index}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            indexPokedex={pokemon.index}
            additionalInfo={pokemon}
          ></CardDisplay>
        </div>
      ))}
      <button
        onClick={handleGoBack}
        disabled={currentPage === 1}
        className="buttonPrev"
      >
        Go Back
      </button>
      <button onClick={handleLoadMore} className="buttonNext">
        Load More
      </button>
    </div>
  );
};

export default FetchList;
