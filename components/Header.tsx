'use client';
//FOR HEADER RELATED WORK


import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { useEffect, useState } from "react";

//for including images in nextjs we need this
const Header = () => {
    const [show, handleShow] = useState(false);
    const styleLink =
        "text-gray-200 font-semibold tracking-widest cursor-pointer uppercase transitions";

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    //this is called functional component, we include functions in this
    return (
        //we write the html and css code here
        <div className="fixed top-0 max-w-7xl mx-auto z-40">
            <div
                className={`px-6 py-2 h-20 flex transition-all bg-transparent duration-300 ease-in-out items-center w-screen justify-between ${show && 'bg-black'}`}
            >
                {/* Image */}
                <div className="flex">
                    <div className="flex items-center cursor-pointer space-x-2 md:border-r md:border-gray-600">
                        <Image
                            src="/logo.png"
                            height={40}
                            width={40}
                            alt="Logo"
                        />
                        <p className="tracking-widest font-semibold pr-5 text-gray-200 uppercase">
                            PAGIR
                        </p>
                    </div>
                    <div className="md:flex items-center pl-7 hidden space-x-4 md:space-x-10 lg:space-x-12">
                        <a href="/" className={styleLink}>
                            HOME
                        </a>
                        <Link href="#why" className={styleLink}>
                            WHY PAGIR?
                        </Link>
                        <Link href="#ourspace" className={styleLink}>
                            OUR SPACE
                        </Link>
                        <Link href="#events" className={styleLink}>
                            EVENT
                        </Link>
                    </div>
                </div>
                <SocialIcons />
            </div>
        </div>
    );
};

export default Header;
