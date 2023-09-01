import axios from "axios";
export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const editTask = (taskId, newName) => ({
  type: EDIT_TASK,
  payload: { taskId, newName },
});

export const fetchLimitedPokemons = (numPages) => async (dispatch) => {
  try {
    let allPokemons = [];
    let nextUrl = "https://pokeapi.co/api/v2/pokemon/";
    let pagesFetched = 0;

    while (nextUrl && pagesFetched < numPages) {
      const response = await axios.get(nextUrl);
      const pokemons = response.data.results;

      const detailedPokemons = await Promise.all(
        pokemons.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url);
          const index = pokemon.url.split("/")[6];
          return { ...detailResponse.data, index };
        })
      );

      allPokemons = allPokemons.concat(detailedPokemons);
      nextUrl = response.data.next;
      pagesFetched++;
    }

    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: allPokemons });
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }
};
