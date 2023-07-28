import { AiOutlineArrowDown } from 'react-icons/ai'
import { AboutContent } from '../constants'

export function About() {
    const content = AboutContent;

    return (
        <div className='w-full flex flex-wrap justify-center'>
            <div className="lg:py-8 flex flex-wrap justify-center items-center text-center max-w-screen-xl">
                <img
                    src={content.imageAvatar}
                    srcSet={`
                        ${content.imageKitId}tr:w-400/${content.imageAvatar}?width=400 400w,
                        ${content.imageKitId}tr:w-800/${content.imageAvatar}?width=800 800w,
                        ${content.imageKitId}tr:w-1200/${content.imageAvatar}?width=1200 1200w,
                    `}
                    alt="A picture of myself with a mask, me Alexei"
                    className="rounded-full aspect-square w-3/4 lg:w-2/5 object-cover object-center shadow-sm drop-shadow-2xl md:w-2/5"
                />
                <div className='w-full p-8'>
                    <h1 className='font-bold text-2xl md:text-3xl'>{content.title}</h1>
                    <p className='mt-4 lg:mx-16'>{content.description}</p>
                </div>
                <AiOutlineArrowDown size={35} className="w-full animate-bounce text-accent-1 mb-6"/>
            </div>
        </div>
    )
}