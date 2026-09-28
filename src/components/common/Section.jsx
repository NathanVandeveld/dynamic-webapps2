import {Card, CardBody, CardHeader} from "react-bootstrap";

export function Section(props) {
    const {title, children} = props;
    return (
        <Card className="text-center">
            <CardHeader>
                <h3>{title}</h3>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}