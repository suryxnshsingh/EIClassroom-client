

export default function Card(
    {name,
    designation,
    employeeId,
    qualification,
    joining,
    phone,
    email,
    }){
    return (
        <div className="relative w-80 h-96 overflow-hidden shadow-lg rounded-2xl">
            <img
                src={'/pranshu.jpg'}
                className="w-full h-full object-cover main"
            />
            <div className="absolute bottom-0 flex flex-col justify-end p-4 w-full bg-gradient-to-t from-black text">
                <h2 className="text-white text-2xl font-bold">Pranshu Pandey</h2>
                <p className="text-white text-lg">Head of Department</p>
            </div>
        </div>
    )
}