import React, { useState } from "react";
import Card from "../../ui/components/UIElements/Card";
import { Button } from "react-bootstrap";
import MyModal from "../../ui/components/UIElements/Modal";
import Map from "../../ui/components/UIElements/Map";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const openMapHandler = () => {
    setModalShow(true);
  };

  return (
    <React.Fragment>
      <MyModal
        show={modalShow}
        showMap={() => setShowMap(true)}
        header={props.address}
        onHide={() => setModalShow(false)}
      >
        <Map />
      </MyModal>
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
            <Button to={`/places/${props.id}`} variant="outline-warning">
              Edit
            </Button>{" "}
            <Button variant="outline-danger">Delete</Button>{" "}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
