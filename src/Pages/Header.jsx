import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header className="bg-red-600 shadow p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Fashionista</h1>

                <nav className="flex space-x-6">
                    <Link to={"/fashion"} className="text-black hover:text-gray-900 font-bold">Fashion---</Link>
                    <Link to={"/car"} className="text-black hover:text-gray-900 font-bold">Cars---</Link>
                </nav>

                <div className="relative">
                    <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"></input>
                    <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M16.75 9.25a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
                    </svg>
                </div>
            </header>

        </>
    )
}

export default Header