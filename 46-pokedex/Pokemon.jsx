import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = new URLSearchParams(useLocation().search);
  const pokemonName = query.get("name");

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemonName) return;

      try {
        const response = await fetch(
          `https://pokedex.mimo.dev/api/pokemon/${pokemonName}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  if (loading) {
    return <h1>Loading…</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>

          <p>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>

          <p>
            <strong>Types:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>
        </div>
      )}
    </>
  );
};

export default Pokemon;
