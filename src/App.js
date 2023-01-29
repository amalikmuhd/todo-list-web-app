import "./App.css";
import { useState } from "react";
import { Modal } from "./components/Modal";

let nextId = 0;

function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const addItems = () => {
    setTitle("");
    return setList([{ id: nextId++, title: title }, ...list]);
  };

  const removeItems = (id) => {
    return setList(list.filter((item) => item.id !== id));
  };
  // const updateItems = (id) => {
  //   return setList(
  //     list.map((item) => {
  //       if (item.id === id) {
  //         return (item.title = "Kudus");
  //       } else {
  //         return item.title;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Parent-container">
          <h1>TODO LIST APP</h1>
          <div className="Add-items">
            <input className="Add-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="Add-button" onClick={() => addItems()}>
              Add List
            </button>
          </div>
          <div className="List-items">
            {list.length > 0 ? (
              list?.map((item, index) => {
                return (
                  <ul
                    key={index}
                    style={{
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px auto 20px",
                    }}
                  >
                    <li>{item.title}</li>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button className="Edit-button" onClick={() => setEditMode(!editMode)}>
                        Edit
                      </button>
                      <button className="Delete-button" onClick={() => removeItems(item.id)}>
                        Delete
                      </button>
                    </div>
                  </ul>
                );
              })
            ) : (
              <p style={{ textAlign: "center", marginTop: "10px" }}>Please add a task</p>
            )}
          </div>
        </div>
        {editMode && <Modal setOpen={setEditMode} />}
      </header>
    </div>
  );
}

export default App;
