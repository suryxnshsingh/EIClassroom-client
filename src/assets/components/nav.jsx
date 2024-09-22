export default function Navbar() {
    return (
        <div className="chakra-petch-medium">
            <nav className="flex justify-between bg-green">
                <div>
                    <h1>EI Classroom Connect</h1>
                </div>
                <div className="">
                    <ul className="flex">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Faculty</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </nav>

        </div>
    )
}