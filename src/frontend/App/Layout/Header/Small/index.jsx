import { useState, useEffect } from "react";

//components

import PrimaryMenu from "./PrimaryMenu";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

// component
const Small = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        //cleanup funct
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [showMenu]);

    return (
        <div>
            <Hamburger onClick={toggleMenu} />
            <Logo />
            {showMenu && <PrimaryMenu setShowMenu={setShowMenu} />}
        </div>
    );
};

export default Small;
