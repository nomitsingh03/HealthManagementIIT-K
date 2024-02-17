import React from "react";
import { Col, Row } from "react-bootstrap";

const handleChange = (event) => {
  // Implement your logic here to handle the change event
  console.log("Selected slot:", event.target.value);
};

const Slots = () => {
  return (
    <div className="slots-container">
      {Array.from({ length: 3 }, (_, row) => (
        <Row>
          {Array.from({ length: 6 }, (_, col) => (
            <Col>
              <input
                type="radio"
                id={`slot${row * 6 + col + 1}`}
                name="slot"
                value={row * 6 + col + 1}
                onChange={handleChange}
              />
              <label htmlFor={`slot${row * 6 + col + 1}`}>{row * 6 + col + 1}</label>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Slots;
