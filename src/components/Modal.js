import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deletelogo from "../assets/warning.svg";
import { createlistAction } from "../store/actions/todoActions";
import "../styles/modal.scss";

export const Modal = ({ setOpen, userId }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const readList = useSelector((state) => state.todoReducers.readList);
  const removeItems = () => {
    readList?.map(
      (item) => item.id === userId && dispatch(createlistAction(readList.filter((item) => item.id !== userId)))
    );
  };

  return (
    <div className="Modal-parent-container">
      <div className="Modal-container">
        <img src={deletelogo} alt="delete logo" width={"40"} />
        <h6>Are you sure you want to delete</h6>
        <div className="Button-container">
          <button className="cancel-button" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button
            className="confirm-button"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                removeItems();
                setOpen(false);
                setLoading(false);
              }, 1000);
            }}
          >
            {!loading ? "Delete" : "loading"}
          </button>
        </div>
      </div>
    </div>
  );
};
