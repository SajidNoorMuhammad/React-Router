const Car = () => {
    return (
        <>
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Car Finder</h1>
                    <input type="text" placeholder="Search cars..." className="p-2 border border-gray-300 rounded-md w-1/2"></input>
                </div>
            </nav>

            <div className="container mx-auto mt-6">
                <div className="flex justify-between mb-4">
                    <div>
                        <label for="make" className="block text-gray-700">Make:</label>
                        <select id="make" className="p-2 border border-gray-300 rounded-md">
                            <option value="">All Makes</option>
                            <option value="ford">Ford</option>
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                        </select>
                    </div>
                    <div>
                        <label for="price" className="block text-gray-700">Price Range:</label>
                        <select id="price" className="p-2 border border-gray-300 rounded-md">
                            <option value="">Any Price</option>
                            <option value="20000">Under $20,000</option>
                            <option value="40000">Under $40,000</option>
                            <option value="60000">Under $60,000</option>
                        </select>
                    </div>
                    <div>
                        <label for="year" className="block text-gray-700">Year:</label>
                        <select id="year" className="p-2 border border-gray-300 rounded-md">
                            <option value="">Any Year</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/400x200" alt="Car" className="w-full h-48 object-cover"></img>
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">2023 Ford Mustang</h2>
                                <p className="text-gray-600">Price: $35,000</p>
                                <p className="text-gray-600">Mileage: 10,000 miles</p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">View Details</button>
                            </div>
                    </div>


                </div>
            </div>

            <footer className="bg-white mt-10 p-4 shadow-md">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600">&copy; 2024 Car Finder. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Car