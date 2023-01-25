import React from "react";
import Link from "next/link";

import LoginButton from "./loginButton";

const Header = () => {

    return (
        <header className="sticky top-0 z-50 shadow-lg bg-blue-400">
            <div className="max-w-4xl mx-auto flex justify-between items-center h-16 text-white">
                <Link href="/">
                    Logo
                </Link>
                <LoginButton />
            </div>
        </header>
    );

};

export default Header;