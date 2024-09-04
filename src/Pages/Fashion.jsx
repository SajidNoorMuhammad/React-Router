const Fashion = () => {
    return (
        <>
            <header class="bg-white shadow p-4 flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-800">Fashionista</h1>
                <div class="relative">
                    <input type="text" placeholder="Search..." class="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"></input>
                        <svg class="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M16.75 9.25a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
                        </svg>
                </div>
            </header>

            <section class="my-6 px-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
                <div class="flex space-x-4 overflow-x-scroll">
                    <div class="flex-shrink-0 w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-sm font-medium text-gray-700">New Arrivals</span>
                    </div>
                    <div class="flex-shrink-0 w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center">
                        <span class="text-sm font-medium text-gray-700">Summer</span>
                    </div>
                    <div class="flex-shrink-0 w-24 h-24 bg-pink-100 rounded-lg flex items-center justify-center">
                        <span class="text-sm font-medium text-gray-700">Sale</span>
                    </div>
                    <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <span class="text-sm font-medium text-gray-700">Accessories</span>
                    </div>
                </div>
            </section>

            <section class="px-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Featured Products</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow">
                        <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full h-32 object-cover rounded-md"></img>
                            <h3 class="text-md font-medium text-gray-700 mt-2">Product Name</h3>
                            <p class="text-sm text-gray-500">$29.99</p>
                    </div>
                </div>
            </section>

            <nav class="fixed bottom-0 left-0 right-0 bg-white shadow p-4 flex justify-around">
                <a href="#" class="text-gray-500 hover:text-gray-800">
                    <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9 9v10m5-10v10m5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-xs">Home</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-800">
                    <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"></path>
                    </svg>
                    <span class="text-xs">Categories</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-800">
                    <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                    <span class="text-xs">Orders</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-800">
                    <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4m0 0l7-7m-7 7l7 7"></path>
                    </svg>
                    <span class="text-xs">Profile</span>
                </a>
            </nav>
        </>
    )
}

export default Fashion