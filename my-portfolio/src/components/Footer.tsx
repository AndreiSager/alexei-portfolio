import { BsInstagram, BsFacebook } from 'react-icons/bs'

export function Footer() {
    const iconSize = 30;

    return (
        <div className="flex justify-center text-center w-full">
            <div className="flex flex-col w-full max-w-screen-xl bg-accent-color-1">
                <div className='flex justify-center text-center p-8'>
                    <a href="#" className='text-3xl font-bold text-neutral-color-2'>Back To Top</a>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between p-8 gap-8">
                    <h1 className='text-md flex justify-center items-center text-primary-color-1'>© All Rights Reserved. Created by Andrei Sager — 2023</h1>
                    <ul className='flex flex-row gap-4 justify-center text-primary-color-1'>
                        <li className='flex justify-center items-center'><a href="https://instagram.com/creamy_poachegg?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram size={iconSize}/></a></li>
                        <li className='flex justify-center items-center md:order-1'><a target="blank" href="https://www.facebook.com/profile.php?id=100091338488777&mibextid=ZbWKwL"><BsFacebook size={iconSize}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}