import React, { useState, useEffect } from "react";
import { DEFAULT_COLUMN } from "../data/SampleData";

import ArchieveBin from "../components/ArchieveBin";
import Column from "../components/Column";

const Board = () => {
    const [column, setColumn] = useState(DEFAULT_COLUMN);
    const [cards, setCards] = useState([]);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        const cardData = localStorage.getItem("cards");

        setCards(cardData ? JSON.parse(cardData) : []);

        setHasChecked(true);
    }, [])

    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            {column.map((data) => {
                return <Column 
                    key={data.id}
                    title={data.title} 
                    column={data.column} 
                    headingColor={data.color}
                    cards={cards}
                    setCards={setCards}
                />
            })}
            <ArchieveBin setCards={setCards} />
        </div>
    )
};

export default Board;