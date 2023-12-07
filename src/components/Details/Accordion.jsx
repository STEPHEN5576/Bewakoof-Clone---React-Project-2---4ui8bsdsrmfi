import Accordion from "react-bootstrap/Accordion";

function Accordions({ label }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ fontWeight: "bold" }}>
          {label}
        </Accordion.Header>
        <Accordion.Body>
         Lorem ipsum dolor sit amet.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;
