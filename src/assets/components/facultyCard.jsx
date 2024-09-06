import React from 'react';

export default function Card({
    name,
    designation,
    employeeId,
    qualification,
    joining,
    phone,
    email,
    imgsrc
}) {
    return (
        <div className="relative w-80 h-96 overflow-hidden shadow-lg rounded-2xl group">
            <img
                src={imgsrc}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                alt={name}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black to-transparent transition-all duration-300">
                <div className="transform translate-y-[480%] transition-transform duration-300 group-hover:translate-y-[200%] ml-2">
                    <h2 className="text-white text-2xl font-bold">{name}</h2>
                    <p className="text-white text-lg">{designation}</p>
                </div>
                <div className="space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mb-2 ml-2">
                    <p className="text-white">Employee ID: {employeeId}</p>
                    <p className="text-white">Qualification: {qualification}</p>
                    <p className="text-white">Joining Date: {joining}</p>
                    <p className="text-white">Phone: {phone}</p>
                    <p className="text-white">Email: {email}</p>
                </div>
            </div>
        </div>
    );
}