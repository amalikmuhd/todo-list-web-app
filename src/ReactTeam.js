import { useState } from "react";

let nextId = 0;
const ReactTeam = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const deleteItem = (id) => {
    setArtists(artists.filter((item) => item.id !== id));
  };
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setName("");
          setArtists([
            {
              id: nextId++,
              name: name,
            },
            ...artists,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }} key={artist.id}>
            <li>
              {artist.name}

              <button onClick={() => deleteItem(artist.id)}>Remove</button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ReactTeam;
