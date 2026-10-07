import {Card, Col} from "react-bootstrap";

export function SectionCard(props) {
    const {children, isMarked = false, onSelect} = props;
    return (
        <Col xs={12} md={6} lg={4}>
            <Card
                className={`h-100 p-3 shadow-sm text-center ${isMarked ? "bg-warning border-0" : ""}`}
                onClick={() => onSelect && onSelect()}
            >
                {children}
            </Card>
        </Col>
    );
}