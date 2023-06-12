import { BsInstagram, BsFacebook } from 'react-icons/bs'

export function Navbar() {
    const iconSize = 30;

    return (
        <div className="flex justify-center text-center w-full">
            <div className="flex md:flex-row justify-center md:justify-between md:gap-auto items-center p-8 w-full max-w-screen-xl">
                <ul className='hidden md:invisible md:flex md:flex-row gap-4 justify-center text-neutral-color-1 hover:text-accent-color-1 '>
                    <li className='flex justify-center items-center'><a href="">About</a></li>
                    <li className='flex justify-center items-center'><a target="blank" href="https://instagram.com/creamy_poachegg?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram size={iconSize}/></a></li>
                    <li className='flex justify-center items-center'><a target="blank" href="https://www.facebook.com/profile.php?id=100091338488777&mibextid=ZbWKwL"><BsFacebook size={iconSize}/></a></li>
                </ul>
                <h1 className='text-5xl font-black bg-clip-text wk-bg-clip text-transparent bg-cover bg-home-texture'>ALEXEI</h1>
                <ul className='hidden md:flex md:flex-row gap-4 justify-center text-neutral-color-1'>
                    <li className='flex justify-center items-center hover:text-color-accent-1'><a href="">About</a></li>
                    <li className='flex justify-center items-center'><a target="blank" href="https://instagram.com/creamy_poachegg?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram size={iconSize}/></a></li>
                    <li className='flex justify-center items-center'><a target="blank" href="https://www.facebook.com/profile.php?id=100091338488777&mibextid=ZbWKwL"><BsFacebook size={iconSize}/></a></li>
                </ul>
            </div>
        </div>
    )
}