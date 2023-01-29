import { useState } from "react";
import { Modal } from "./components/Modal";
import { createlistAction } from "./store/actions/todoActions";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

let nextId = 0;

function App() {
  const dispatch = useDispatch();

  const readList = useSelector((state) => state.todoReducers.readList);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [editMode, setEditMode] = useState(false);

  const addItems = () => {
    setTitle("");
    dispatch(createlistAction([{ id: nextId++, title: title }, ...readList]));
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
            {readList.length > 0 ? (
              readList?.map((item, index) => {
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
                      <button
                        className="Delete-button"
                        onClick={() => {
                          setEditMode(!editMode);
                          setId(item.id);
                        }}
                      >
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
        {editMode && <Modal setOpen={setEditMode} userId={id} />}
      </header>
    </div>
  );
}

export default App;
