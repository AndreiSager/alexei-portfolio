import { BsInstagram, BsFacebook } from 'react-icons/bs'

export function Navbar() {
    const iconSize = 30;

    return (
        <div className="flex justify-center text-center w-full">
            <div className="flex flex-row justify-between p-8 w-full max-w-screen-xl">
                <h1 className='text-5xl font-black ml-[43.70%]'>Alexei</h1>
                <ul className='flex flex-row gap-4 justify-center text-neutralColor1'>
                    <li className='flex justify-center items-center'><a href="" >About</a></li>
                    <li className='flex justify-center items-center'><a href=""><BsInstagram size={iconSize}/></a></li>
                    <li className='flex justify-center items-center'><a href=""><BsFacebook size={iconSize}/></a></li>
                </ul>
            </div>
        </div>
    )
}