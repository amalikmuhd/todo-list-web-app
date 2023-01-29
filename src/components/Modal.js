import deletelogo from "../assets/warning.svg";
import "../styles/modal.scss";

export const Modal = ({ setOpen }) => {
  return (
    <div className="Modal-parent-container">
      <div className="Modal-container">
        <img src={deletelogo} alt="delete logo" width={"40"} />
        <h6>Are you sure you want to delete</h6>
        <div className="Button-container">
          <button className="cancel-button" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="confirm-button" onClick={() => setOpen(true)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
