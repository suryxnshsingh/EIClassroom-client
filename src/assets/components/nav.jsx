

export default function Navbar() {

    return (
        <div className="chakra-petch-medium text-white bg-transparent backdrop-blur-lg m-4  w-[92%] md:w-[98%] fixed z-50 rounded-lg border-stone-700 border-2 ">
            <nav className="flex justify-between px-3 py-4">
                <div>
                    <h1 className="md:text-2xl text-2xl px-3 font-bold">EI Classroom Connect</h1>
                </div>
                <div className="">
                    <ul className="md:flex py-1 hidden ${menuOpen ? 'show' : ''} ">
                        <li className="px-3 md:text-lg font-medium"><a href="/">Home</a></li>
                        <li className="px-3 md:text-lg font-medium"><a href="/">About</a></li>
                        <li className="px-3 md:text-lg font-medium"><a href="/">Faculty</a></li>
                        <li className="px-3 md:text-lg font-medium"><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <button className="mx-2 px-4 p-1  bg-cyan-500  rounded-sm ">Sign In</button>
                </div>
            </nav>

        </div>
    )
}