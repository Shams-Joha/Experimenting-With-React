import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
    ];



    return (
        <nav className=" text-black ">
            <div onClick={() => setOpen(!open)} className="md:hidden bg-cyan-500 p-6">
                {
                    open === true ? <IoIosCloseCircleOutline className="text-2xl" /> : <RiMenu2Fill className="text-2xl " />

                }

            </div>

            <ul className={`md:flex  transform md:justify-center  duration-1000 md:static ease-in-out md:translate-y-2 md:mb-5 md:w-full absolute bg-yellow-200 px-6 py-3
             rounded-2xl  ${open ? "translate-y-0" : "-translate-y-72"
                }`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;