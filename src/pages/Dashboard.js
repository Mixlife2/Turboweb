function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-10">
                <h1 className="text-4xl font-bold mb-5">Bring the power of Webflow to React JS using Dashdark X Webflow Template</h1>
                <p className="text-gray-400 mb-5">Presenting Dashdark X, the ultimate dark mode dashboard Webflow Template.</p>
                <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-md flex items-center space-x-2 mb-10">
                    <span>Get template</span>
                    <i className="fas fa-arrow-right"></i>
                </button>
                {/* Content goes here */}
            </main>
        </div>
    );
}