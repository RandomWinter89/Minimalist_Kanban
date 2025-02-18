
const DropIndicator = ({ beforeID, column, color }) => {
    return (
        <div 
            data-before={beforeID || "-1"}
            data-column={column}
            className={`my-0.5 h-0.5 w-full ${color} opacity-0`}
        />
    )
}

export default DropIndicator;