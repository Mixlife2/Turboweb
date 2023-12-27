function AdditionalInfo({ title, description, buttonText, imageUrl, imageAlt }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
                <p className="text-center text-sm mb-4">reservar una llamada</p>
                <p>{description}</p>
                <p className="text-center text-sm mt-4">reservar una llamada</p>
            </div>
            <div className="border-t mt-6 pt-6">
                <h3 className="font-bold mb-2">{title}</h3>
                <p>{description}</p>
                <button className="bg-black text-white w-full py-2 rounded mt-4">{buttonText}</button>
            </div>
            <div className="flex justify-center mt-6">
                <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
            </div>
        </div>
    );
}

export default AdditionalInfo