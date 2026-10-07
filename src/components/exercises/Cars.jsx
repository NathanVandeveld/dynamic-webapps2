import {Section} from "../common/Section.jsx";
import {SectionCard} from "../common/SectionCard.jsx";

const CSS_COLORS = {
    blauw: "blue",
    geel: "yellow",
    zwart: "black",
    rood: "red",
    groen: "green",
    grijs: "gray",
    wit: "white"
};

const DARK_COLORS = ["zwart", "blauw", "groen"];

function CarProperty(props) {
    const {label, value} = props;
    if (value === undefined || value === null || value === "") return null;
    return (
        <p className="mb-1">{label}: {value}</p>
    );
}

function CarColor(props) {
    const {color} = props;
    if (!color) return null;
    const key = color.toLowerCase().trim();
    return (
        <div
            className="mt-auto px-2 rounded border"
            style={{
                backgroundColor: CSS_COLORS[key] ?? color,
                color: DARK_COLORS.includes(key) ? "white" : "black"
            }}
        >
            kleur: {color}
        </div>
    );
}

export function Cars(props) {
    const {cars, title} = props;
    return (
        <Section title={title} isInitiallyOpen>
            {cars.map(car => (
                <SectionCard key={car.id} minHeight="12rem">
                    <h6>
                        {car.brand} / {car.model}
                        {car.type && ` ${car.type}`}
                        {car.year && ` (${car.year})`}
                    </h6>
                    <CarProperty label="opm" value={car.note}/>
                    <CarColor color={car.color}/>
                </SectionCard>
            ))}
        </Section>
    );
}