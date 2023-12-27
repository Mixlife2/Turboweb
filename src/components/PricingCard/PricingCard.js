function PricingCard({ title, description, price, buttonText, includedItems }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <p className="text-4xl font-bold mb-4">{price}</p>
            <p className="mb-6">Pausar o cancelar en cualquier momento</p>
            <button className="bg-black text-white w-full py-2 rounded">{buttonText}</button>
            <p className="text-center text-sm mt-4">reservar una llamada</p>
            <div className="border-t mt-6 pt-6">
                <h3 className="font-bold mb-2">Qué está incluido:</h3>
                <ul className="list-disc pl-5">
                    {includedItems.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default PricingCard