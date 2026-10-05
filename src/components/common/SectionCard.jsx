import {Card, Col} from "react-bootstrap";

export function SectionCard(props) {
    const {children, isMarked = false, onSelect} = props;
    return (
        <Col
            className="m-0 card-group " xs={12} sm={6} md={4} lg={3} xl={2} xxl={2}
            bg={isMarked ? "info" : undefined}
            border={isMarked ? "info" : undefined}
        >
            <Card className={`m-1 p-2 shadow-sm text-center ${isMarked ? `bg-warning`:``}`} onClick={() => onSelect && onSelect()}>
                {children}
            </Card>
        </Col>
    );
};