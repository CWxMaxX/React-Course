import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import Title from "./Components/Title";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Chamith Wijesooriya");
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bower's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);
  const clickMe = () => {
    setName("CEO of CWx Group");
  };

  const handleClick = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
    console.log(id);
  };
  const handleClose = () => {
    if (showModal === true) {
      setShowModal(false);
    } else if (showModal === false) {
      setShowModal(true);
    }
  };

  return (
    <div className="App">
      {showModal && (
        <Modal handleClose={handleClose}>
          <h1>Chamith Wijesooriya</h1>
          <p>
            kjhasdak ausijdghyalksjdas dsaiujdghaskjbdas disagdkas dasgdadsa diuasdnasdagdasdjhasbd
            nasdbsajnd hajsdsabdgjasdsahjdbasndjsadasdbsalkd asjbdas dbsajbdansbdkjasdmn
            salkjbdk;asmnbdkjasm mdnbasm.db la
          </p>
        </Modal>
      )}

      <Title title="CWx Group, Sri Lanka"></Title>
      <h1>Name = {name} </h1>
      <button type="button" onClick={clickMe}>
        Click Me
      </button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index}-{event.title}
          </h2>
          <button type="button" onClick={() => handleClick(event.id)}>
            {" "}
            Delete{" "}
          </button>
        </div>
      ))}
      <button type="button" onClick={handleClose}>
        Show Modal
      </button>
    </div>
  );
}

export default App;
