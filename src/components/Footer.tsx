import SocialMediaLinks from "./SocialMedia";
import { ReferenceLinks } from '../constants';

export function Footer() {
    const nbsp = "\u00A0";
    const ref = ReferenceLinks;

    return (
        <div className="flex justify-center text-center w-full bg-accent-1">
            <div className="flex flex-col w-full max-w-screen-xl">
                <div className="flex flex-col-reverse md:flex-row justify-between p-8 gap-8">
                    <h1 className='text-md flex flex-row flex-wrap justify-center items-center text-primary-1'>© 2023{nbsp}
                        <a target='blank' 
                            href={ref[0].url} 
                            className='underline text-neutral-2'>{ref[0].title}
                        </a>{nbsp}& Alexei. All Rights Reserved.
                    </h1>
                    <SocialMediaLinks dark/>
                </div>
            </div>
        </div>
    )
}