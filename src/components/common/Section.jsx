import {Button, Card, CardBody, CardHeader, Collapse} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {title, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card className="text-center">
            <CardHeader>
                <h3>{title}</h3>
                <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>{isOpen?"-":"+"}</Button>
            </CardHeader>
            <Collapse in={isOpen}>
                <div>
            <CardBody>
                {children}
            </CardBody>
                </div>
            </Collapse>
        </Card>
    );
}
export function SectionCard(props) {
    const {children} = props;
    return (
        <Card className="h-100 shadow-sm">
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}