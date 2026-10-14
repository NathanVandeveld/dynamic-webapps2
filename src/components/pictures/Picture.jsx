import {useState} from "react";
import {Modal} from "react-bootstrap";
import {SectionCard} from "../common/SectionCard.jsx";

export function Picture(props) {
    const {artwork} = props;
    const [showDetails, setShowDetails] = useState(false);

    function handleToggleDetails() {
        setShowDetails(prevShow => !prevShow);
    }

    return (
        <>
            <div onClick={handleToggleDetails} style={{cursor: "pointer"}}>
                <SectionCard>
                    <img
                        src={`/images/${artwork.name}`}
                        alt={artwork.title}
                        width="100%"
                    />
                    <h5 className="mt-3">{artwork.title}</h5>
                    <p className="text-muted mb-1">by {artwork.author}</p>
                </SectionCard>
            </div>

            {showDetails && (
                <PictureDetailsModal artwork={artwork} onClose={handleToggleDetails}/>
            )}
        </>
    );
}
function PictureDetailsModal(props) {
    const {artwork, onClose} = props;

    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title className="fs-5">{artwork.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={`/images/${artwork.name}`}
                    alt={artwork.title}
                    style={{maxWidth: "60%"}}
                />
                <div className="small">by {artwork.author}</div>
                <p className="small mt-2">{artwork.text}</p>
                <div className="text-end small">
                    {artwork.tags.map(tag => <div key={tag}>{tag}</div>)}
                </div>
            </Modal.Body>
        </Modal>
    );
}