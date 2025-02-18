import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";

const Card = ({ title, id, column, handleDragStart, color, setCards }) => {
    const handleRemove = () => {
        setCards((pv) => pv.filter((c) => c.id !== id));
    }

    return (
        < >
            <DropIndicator beforeID = {id} column={column} color={color}/>
            <motion.div 
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, {title, id, column})}
                className="cursor-grab flex justify-between items-start rounded bg-gray-50 shadow-customShadow p-3
                hover:bg-gray-200 active:bg-gray-200 active:cursor-grabbing"
            >
                <p className="text-sm font-semibold text-black">{title}</p>
                <button onClick={handleRemove} className="bg-red-600 text-white rounded p-1 text-xs">Close</button>
            </motion.div>
        </>
    )
}

export default Card;