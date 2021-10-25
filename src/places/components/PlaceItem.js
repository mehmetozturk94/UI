import React, { useState, useContext } from "react";
import Card from "../../ui/components/UIElements/Card";
import { Button } from "react-bootstrap";
import MyModal from "../../ui/components/UIElements/Modal";
import RemoveModal from "../../ui/components/UIElements/RemoveModal";
import Map from "../../ui/components/UIElements/Map";
import { AuthContext } from "../../ui/context/auth-context";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [secondModalShow, setSecondModalShow] = useState(false);

  const openMapHandler = () => {
    setModalShow(true);
  };

  const openModalHandler = () => {
    setSecondModalShow(true);
  };

  return (
    <React.Fragment>
      <MyModal
        show={modalShow}
        showMap={() => setShowMap(true)}
        header={props.address}
        body={props.children}
        onHide={() => setModalShow(false)}
      >
        <Map />
      </MyModal>
      <RemoveModal
        show={secondModalShow}
        showMap={() => setSecondModalShow(true)}
        header="Are you sure want to delete ?"
        onHide={() => setSecondModalShow(false)}
      >
        <Map />
      </RemoveModal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button variant="outline-success" onClick={() => openMapHandler()}>
              View on Map
            </Button>{" "}
            {auth.isLoggedIn && <Button href={`/places/${props.id}`} variant="outline-warning">
              Edit
            </Button>}
            {auth.isLoggedIn && <Button onClick={() => openModalHandler()} variant="outline-danger">Delete</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
