const Home = () => {

    return (
        <>
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
            </header>
            <main className="p-6">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">About Us</h2>
                    <p className="mt-4 text-gray-700">We are dedicated to providing the best services...</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Our Services</h2>
                    <p className="mt-4 text-gray-700">Explore our range of services tailored for you...</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="mt-4 text-gray-700">Reach out to us through our contact page...</p>
                </section>
            </main>
            <footer className="bg-blue-600 text-white p-4 text-center">
                <p>&copy; 2024 Our Website</p>
            </footer>
        </>
    )

}

export default Home