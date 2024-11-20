import React from "react";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen === false ? null : (
    <div className="shadow-lg bg-white p-2 w-72 h-full fixed  z-50">
      <ul className="my-4 mx-2 text-xl font-semibold" l>
        <li className="py-2">Courses</li>
        <li className="py-2">Blogs</li>
        <li className="py-2">Gift a Course</li>
        <li className="py-2">Roadmap</li>
        <li className="py-2">Need Help</li>
      </ul>
    </div>
  );
};
export default Sidebar;
