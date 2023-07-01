import { BsInstagram, BsFacebook } from 'react-icons/bs'

export function Footer() {
    const iconSize = 30;
    const nbsp = "\u00A0"

    return (
        <div className="flex justify-center text-center w-full bg-accent-1">
            <div className="flex flex-col w-full max-w-screen-xl">
                <div className="flex flex-col-reverse md:flex-row justify-between p-8 gap-8">
                    <h1 className='text-md flex flex-row flex-wrap justify-center items-center text-primary-1'>© 2023{nbsp}<a target='blank' href="https://andrei-sager-portfolio.vercel.app" className='underline text-neutral-2'>Andrei Sager</a>{nbsp}& Alexei. All Rights Reserved.</h1>
                    <ul className='flex flex-row gap-4 justify-center text-primary-1'>
                        <li className='flex justify-center items-center hover:text-instagram hover:brightness-125'><a target="blank" href="https://instagram.com/creamy_poachegg?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram size={iconSize}/></a></li>
                        <li className='flex justify-center items-center md:order-1 hover:text-facebook hover:brightness-125'><a target="blank" href="https://www.facebook.com/profile.php?id=100091338488777&mibextid=ZbWKwL"><BsFacebook size={iconSize}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}