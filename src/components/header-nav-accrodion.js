import { Accordion, Card } from "react-bootstrap";

const HeaderNavAccrodion = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle eventkey="0">
            <div className="header_dropdown_explenItem">
              <i className="fas fa-cog"></i> Setting
            </div>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventkey="0">
          <Card.Body>
            <p className="accrodin_s">Hello! I'm the body</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default HeaderNavAccrodion;
