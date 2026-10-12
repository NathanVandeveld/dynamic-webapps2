import {Button} from "react-bootstrap";

export function FavoriteNumbers(props) {
    const {numbers, markedNumbers = [], onSelectNumber} = props;
    return (
        <div className="d-flex flex-wrap gap-2">
            {numbers.map((number) => (
                <Button
                    key={number}
                    variant={markedNumbers.includes(number) ? "primary" : "outline-primary"}
                    onClick={() => onSelectNumber(number)}>
                    {number}
                </Button>
            ))}
        </div>
    );
}