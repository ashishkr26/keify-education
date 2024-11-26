import React from "react";
import { useSelector } from "react-redux";
import BookIcon from '@mui/icons-material/Book';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MapIcon from '@mui/icons-material/Map';

const Sidebar = (props) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen === false ? null : (
    <div className="shadow-lg bg-white p-2 w-72 h-full fixed  z-50">
      <ul className="my-4  text-xl font-semibold" l>
        <li className="py-2"><span className="text-emerald-600"><LocalLibraryIcon/></span>{" "}Courses</li>
        <li className="py-2"><span className="text-emerald-600"><BookIcon/></span>{" "}Blogs</li>
        <li className="py-2"><span className="text-emerald-600"><RedeemTwoToneIcon/></span>{" "}Gift a Course</li>
        <li className="py-2"><span className="text-emerald-600"><MapIcon/></span>{" "}Roadmap</li>
        <li className="py-2"><span className="text-emerald-600"><HelpCenterIcon/></span>{" "}Need Help</li>
      </ul>
    </div>
  );
};
export default Sidebar;
