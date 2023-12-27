function Item({ text }) {
    return (
        <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-black rounded-full mr-4"></div>
            <p className="text-xl">{text}</p>
        </div>
    );
}


export default Item