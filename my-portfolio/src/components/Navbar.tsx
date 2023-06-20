import { BsInstagram, BsFacebook } from 'react-icons/bs'
export function Navbar() {
    const iconSize = 30;

    return (
        <div className="flex flex-wrap justify-center items-center text-center w-full">
            <div className="flex md:flex-row flex-wrap gap-y-8 justify-center md:justify-between md:gap-auto items-center p-8 w-full max-w-screen-xl">
                {/* Hidden component to equalize justify */}
                <ul className='hidden md:invisible md:flex md:flex-row gap-4 justify-center'>
                    <li className='flex justify-center items-center'><a target="blank" href=""><BsInstagram size={iconSize}/></a></li>
                    <li className='flex justify-center items-center'><a target="blank" href=""><BsFacebook size={iconSize}/></a></li>
                </ul>
                {/* Hidden component to equalize justify */}
                <h1 className='text-5xl font-black bg-clip-text wk-bg-clip text-transparent bg-cover bg-center bg-home-texture'>ALEXEI</h1>
                <ul className='flex flex-row gap-4 justify-center text-neutral-3 w-full md:w-fit'>
                    <li className='flex justify-center items-center hover:text-instagram'><a target="blank" 
                        href="https://instagram.com/creamy_poachegg?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram size={iconSize}/></a></li>
                    <li className='flex justify-center items-center hover:text-facebook'><a target="blank" 
                        href="https://www.facebook.com/profile.php?id=100091338488777&mibextid=ZbWKwL"><BsFacebook size={iconSize}/></a></li>
                </ul>
            </div>
        </div>
    )
}