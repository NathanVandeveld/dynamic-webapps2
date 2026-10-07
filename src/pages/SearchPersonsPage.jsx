import {Persons} from "../components/exercises/Persons.jsx";
import {PERSON_DATA} from "../data/data.jsx";
import {useState} from "react";
import {Form} from "react-bootstrap";

export function SearchPersonsPage() {
    const [search, setSearch] = useState("");
    const persons = PERSON_DATA.filter(p=>p.name.includes(search) || p.city.includes(search));
    return (
        <div className="mb-3">
            <Form>
                <Form.Label htmlFor="search">zoek </Form.Label>
                <Form.Control
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
            </Form>
            <Persons persons={persons} title="Zoeken" isInitiallyOpen={true}/>
        </div>
    );
}