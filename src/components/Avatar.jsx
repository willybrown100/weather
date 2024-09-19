import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaCircleUser } from "react-icons/fa6";
import Modal from "./Modal";
import useLogout from "./useLogout";
import useUser from "./useUser";
import MiniSpinner from "./MiniSpinner";


export default function Avatar() {
  const { data, isPending } = useUser();

  const { user_metadata } = data;
  const { mutate } = useLogout();
  const [open, setOpen] = useState(false);
  const handleClick = function () {
    setOpen(!open);
  };
  return (
    <div className="flex relative items-center  gap-x-2">
      <FaCircleUser />
      <div className="flex gap-x-2 items-center ">
        <span className="font-medium capitalize">
          {isPending ? <MiniSpinner /> : user_metadata.name}
        </span>
        <FaAngleDown
          className="text-stone-400 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      {open && (
        <div className="absolute top-5 md:right-[0.1rem] z-10">
          <Modal />
        </div>
      )}
    </div>
  );
}
