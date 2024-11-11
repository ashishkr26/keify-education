import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import hmb2 from "../assets/images/hmb2.png";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return isMenuOpen === false ? null : (
    <div className="shadow-lg bg-white p-2 w-72 h-full fixed  z-50">
      <div className="flex mx-1">
        <img
          onClick={handleToggleMenu}
          className="h-6 mt-3 pr-2 cursor-pointer "
          alt="menu"
          src={hmb2}
        />
        <Link className="text-black" to="/">
          <label className="text-3xl font-bold ml-1 py-2 cursor-pointer">
            Keify
          </label>
        </Link>
      </div>

      <ul className="my-4 mx-2 text-xl" l>
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
