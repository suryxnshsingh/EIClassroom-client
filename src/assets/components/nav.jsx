export default function Navbar() {

    return (
        <div className="chakra-petch-medium text-white bg-transparent backdrop-blur-lg m-4  w-[92%] md:w-[98%] fixed z-50 rounded-lg border-stone-700 border-2 ">
            <nav className="flex justify-between px-3 py-4">
                <div>
                    <h1 className="md:text-2xl text-xl px-3 font-bold"><a href="#home">EI Classroom Portal</a></h1>
                </div>
                <div className="">
                    <ul className="md:flex hidden ${menuOpen ? 'show' : ''} ">
                        <li className="px-5 pt-1 md:text-lg font-medium"><a href="#about">About</a></li>
                        <li className="px-5 pt-1 md:text-lg font-medium"><a href="#faculty">Faculty</a></li>
                        <li className="px-5 pt-1 md:text-lg font-medium"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <button className="mx-2 px-4 bg-cyan-500 rounded-sm ">Sign In</button>
                </div>
            </nav>
        </div>
    )
}