import { cn } from "../../../utils/cn.js";

export function SubjectCard() {
  return (
    (<div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="p-2 rounded-lg flex flex-col backdrop-brightness-50">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Demo Teacher
            </p>
            <p className="text-sm text-gray-400">Demo Code</p>
          </div>
        </div>
        <div className="text content backdrop-brightness-50 rounded-lg p-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Subject Card
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            This is a demo subject. It has no students yet.
          </p>
        </div>
      </div>
    </div>)
  );
}
