import { useState, useEffect } from "react";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { Col, Row, Alert } from "react-bootstrap";

export const Resume = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="resume-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            {<h3>Download my resume <BsFillFileEarmarkArrowDownFill /> </h3>}
          </Col>
          <Col md={3} xl={7}>
            <div className="new-email-bx">
              <button type="submit">English </button>
            </div>
          </Col>
          <Col md={3} xl={7}>
            <div className="new-email-bx">

              <button type="submit">Castellano</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
