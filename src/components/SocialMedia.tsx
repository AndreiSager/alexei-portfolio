import { useEffect, useState } from 'react';
import { SocialMediaLinks as links } from '../constants';

type LinkProps =  {
    hidden?: boolean;
    dark?: boolean;
}

export default function SocialMediaLinks( { hidden, dark }:LinkProps )  {
    const [isHidden, setHidden] = useState("");
    const [isDark, setDark] = useState("");

    useEffect(() => {
        setDark(!dark ? "text-neutral-3 " : "text-white")
        setHidden(!hidden ? "flex flex-row gap-4 justify-center w-full md:w-fit" : "flex flex-row gap-4 justify-center w-full md:w-fit invisible");
    }, []);

    return(
        <div className={isDark}>
            <ul className={isHidden}>
                {links.map((link) => (
                    <li className='flex justify-center items-center hover:brightness-125'>
                        {link.icon}
                    </li>
                ))}
            </ul>
        </div>
    )
}