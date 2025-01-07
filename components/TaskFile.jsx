import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa6";
import { FrontEndAsg, FrontDetails } from "./FrontEndAsg";
import { BackEndAsg, BackDetails } from "./BackEndAsg";
import { AiAsg, AiDetails } from "./AiAsg";

export default function TaskFile({ assignment }) {
  const [focusedAsg, setFocused] = useState("assignment");
  return (
    <div className="text-black flex flex-col basis-1/2 h-[80%] border-8 border-blue-700 bg-white">
      <div className="border-b-blue-700 border-b-8 w-full flex flex-row justify-between ">
        <div className="flex h-10 text-center uppercase ">
          <button
            onClick={() => setFocused("assignment")}
            className={`${focusedAsg === "assignment" && `bg-blue-700 text-white`}  px-3 flex items-center font-medium`}
          >
            <text className="uppercase">{assignment}</text>
          </button>
          <button
            onClick={() => setFocused("details")}
            className={`${focusedAsg === "details" && `bg-blue-700 text-white`}  px-3 flex items-center font-medium`}
          >
            <text className="uppercase">Details</text>
          </button>
        </div>
        <div className="flex gap-4 bg-white items-center pr-3">
          <div>
            <FaWindowMinimize color="blue" size={22} />
          </div>
          <div>
            <FaRegWindowMaximize color="blue" size={22} />
          </div>
          <div>
            <RiCloseLargeLine color="blue" size={22} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 p-5 justify-end ">
        {assignment === "Frontend Assignment" ? (
          focusedAsg === "assignment" ? (
            <FrontEndAsg />
          ) : (
            <FrontDetails />
          )
        ) : assignment === "Backend Assignment" ? (
          focusedAsg === "assignment" ? (
            <BackEndAsg />
          ) : (
            <BackDetails />
          )
        ) : assignment === "AI Assignment" ? (
          focusedAsg === "assignment" ? (
            <AiAsg />
          ) : (
            <AiDetails />
          )
        ) : (
          "There Are No Assignments..."
        )}
      </div>
    </div>
  );
}
