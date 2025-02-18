import React, { useState } from "react";
import { motion } from "framer-motion";

import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";
import Card from "./Card";

const Column = ({ title, headingColor, column, cards, setCards }) => {
    const [active, setActive] = useState(false);

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
    }

    const handleDragOver = (e) => {
        e.preventDefault();

        highlight_Indicator(e);
        setActive(true);
    }

    const handleDragLeave = (e) => {
        setActive(false);
        clearHighlight();
    }

    const handleDragEnd = (e) => {
        setActive(false)
        clearHighlight();

        const cardID = e.dataTransfer.getData("cardId");
        const indicators = Array.from(document.querySelectorAll(`[data-column="${column}"]`));

        const { element } = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - (box.top + 50);

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                } else {
                    return closest;
                }
            }, 
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        )

        const before = element.dataset.before || "-1";

        if (before !== cardID) {
            let copy = [...cards];
            let cardToTransfer = copy.find((c) => c.id === cardID);

            if (!cardToTransfer) 
                return;
        
            cardToTransfer = { ...cardToTransfer, column };

            copy = copy.filter((c) => c.id !== cardID);
            const moveToBack = before === "-1";

            if (moveToBack) {
                copy.push(cardToTransfer);
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                if (insertAtIndex === undefined) return;

                copy.splice(insertAtIndex, 0, cardToTransfer);
            }

            setCards(copy);
        }
    }

    const clearHighlight = (els) => {
        const indicators = els || Array.from(document.querySelectorAll(`[data-column="${column}"]`));

        indicators.forEach((i) => {
            i.style.opacity = "0";
        })
    }

    const highlight_Indicator = (e) => {
        const indicators = Array.from(document.querySelectorAll(`[data-column="${column}"]`));
        
        clearHighlight(indicators);

        const el = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - (box.top + 50);

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                } else {
                    return closest;
                }
            }, 
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        )

        el.element.style.opacity = "1";
    }

    const filteredCards = cards.filter((check) => check.column === column);

    return (
        <div className="w-56 shrink-0">
            <div className={`py-0.5 px-1.5 flex items-center justify-between rounded-t-md ${headingColor}`}>
                <h3 className={`font-medium text-black`}>{title}</h3>
                <span className="rounded text-sm text-black">{filteredCards.length}</span>
            </div>
            <motion.div 
                layout
                onDrop={handleDragEnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`w-full p-1.5 rounded-b-md transition-colors ${active ? "bg-slate-200/60" : "bg-slate-200"}`}
            >
                {filteredCards.map((data) => {
                    return <Card key={data.id} {...data} handleDragStart={handleDragStart} color={headingColor} setCards={setCards}/>
                })}
                <DropIndicator beforeID = "-1" column={column} color={headingColor}/>
                <AddCard column={column} setCards={setCards}/>
            </motion.div>
        </div>
    )
}

export default Column;