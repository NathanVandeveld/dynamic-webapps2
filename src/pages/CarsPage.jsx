import {Cars} from "../components/exercises/Cars.jsx";
import {CAR_DATA} from "../data/data.jsx";

export function CarsPage() {
    return (
        <div className="mx-3">
            <Cars cars={CAR_DATA} title="Auto's"/>
        </div>
    );
}
