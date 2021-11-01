import reactDom from "react-dom";
import Overlay from "./Overlay";
import Modal from "./Modal";

const Portal = (props) => {
  const closeModal = (e) => props.setState(false);

  if (!props.open) return null;

  return reactDom.createPortal(
    <>
      <Overlay closeModal={closeModal} />
      <Modal closeModal={closeModal} error={props.error} />
    </>,
    document.getElementById("portal")
  );
};
export default Portal;
