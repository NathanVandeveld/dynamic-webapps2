import {Card, CardBody, CardHeader, Collapse, Row} from "react-bootstrap";
import {useState} from "react";
import {ToggleButton} from "./Buttons.jsx";

export function Section(props) {
    const {title, children, isInitiallyOpen = false} = props;
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);
    return (
        <Card className="text-center">
            <CardHeader className="position-relative text-center bg-light py-2 px-3 d-flex align-items-center justify-content-center">
                <h5 className="mb-0 fw-bold">{title}</h5>
                <div className="position-absolute end-0 me-3">
                    <ToggleButton isActive={isOpen} onToggle={setIsOpen}/>
                </div>
            </CardHeader>
            <Collapse in={isOpen}>
                <div>
                    <CardBody>
                        <Row className="g-3">
                            {children}
                        </Row>
                    </CardBody>
                </div>
            </Collapse>
        </Card>
    );
}