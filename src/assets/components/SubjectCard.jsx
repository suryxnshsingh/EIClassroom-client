import { cn } from "../../../utils/cn.js";
import { useNavigate } from "react-router-dom";

export function SubjectCard({ name, code }) {
  const navigate = useNavigate();
  return (
    <div 
    className=" w-64 group/card poppins-regular"
    onClick={() => {
      navigate(`/subject/${code}`)
    }
  }
    >
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1631376178637-392efc9e356b?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 backdrop-blur-sm backdrop-brightness-[0.7] hover:backdrop-brightness-[0.3]"></div>
        <div className="flex flex-row items-center space-x-4">
          <div className="p-2 rounded-lg flex flex-col">
            <p className="font-normal text-base text-gray-50 relative">
              
            </p>
          </div>
        </div>
        <div className="text content-center rounded-lg p-4">
          <h1 className="font-bold text-3xl text-white relative">
            {name}
          </h1>
          <p className="font-semibold text-white text-xl relative my-2">
            {code}.
          </p>
        </div>
      </div>
    </div>
  );
}