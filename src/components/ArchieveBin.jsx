import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const ArchieveBin = ({ setCards }) => {
    const [active, setActive] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
        setActive(false);
    };

    const handleDragEnd = (e) => {
        const cardID = e.dataTransfer.getData("cardId");
        
        setCards((pv) => pv.filter((c) => c.id !== cardID));
        setActive(false);
    };

    return (
        <div 
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`grid h-20 w-56 shrink-0 place-content-center rounded border text-3xl ${
                active
                    ? "border-red-800 bg-red-800/20 text-red-500"
                    : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
                }
            `}
        >
            {active 
                ? <FaFire className="animate-bounce" />
                : <FiTrash />
            }
        </div>
    )
}

export default ArchieveBin;