import { AiOutlineArrowDown } from 'react-icons/ai'
import { AboutContent } from '../constants'

export function About() {
    const content = AboutContent;

    return (
        <div className='flex flex-wrap justify-center'>
            <div className="py-16 flex flex-wrap justify-center items-center gap-12 text-center max-w-screen-lg">
                <img
                    src={content.imageAvatar}
                    srcSet={`
                        ${content.imageKitId}tr:w-400/${content.imageAvatar}?width=400 400w,
                        ${content.imageKitId}tr:w-800/${content.imageAvatar}?width=800 800w,
                        ${content.imageKitId}tr:w-1200/${content.imageAvatar}?width=1200 1200w,
                    `}
                    alt="A picture of myself with a mask, me Alexei"
                    className="rounded-full aspect-square w-3/4 object-cover object-center shadow-sm drop-shadow-2xl md:w-2/5"
                />
                <div className='w-3/4'>
                    <h1 className='font-bold text-2xl md:text-3xl'>{content.title}</h1>
                    <p className='m-4'>{content.description}</p>
                </div>
                <AiOutlineArrowDown size={35} className="w-full animate-bounce text-accent-1"/>
            </div>
        </div>
    )
}