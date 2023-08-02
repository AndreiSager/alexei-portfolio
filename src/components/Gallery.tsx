import { useState } from 'react';
import { ImCross } from 'react-icons/im'
import { GalleryItemData as gallery} from '../constants/index.tsx'

export function Gallery() {
    const [modal, setModal] = useState<true | false>(false);
    const handleModal = () => {
        setModal(!modal)
    }
    const [index, setIndex] = useState<number>(0);
    function updateContent(index: number): void {
        setIndex(index);
        handleModal();
    }

    return (
        <div className="flex justify-center text-center w-full">
            <div className='flex flex-row max-w-screen-xl'>
                <div className="w-full grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {gallery.map((project) => (
                        <div key={project.id} className="relative min-w-full min-h-full aspect-square mx-auto">
                            <img 
                                src={`https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/${project.album}/${project.thumbnail}`}
                                srcSet={`
                                      https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-400/${project.album}/${project.thumbnail}?width=400 400w,
                                      https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-800/${project.album}/${project.thumbnail}?width=800 800w
                                `}
                                alt="No Thumbnail Image"
                                loading='lazy'
                                decoding="async"
                                className='relative aspect-square object-cover'
                            />
                            <div className={!modal ? 'absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-opacity-0 text-opacity-0 duration-200 ease-linear bg-neutral-1 hover:bg-opacity-50 hover:text-opacity-100 text-primary-1 z-20 hover:z-0' : 'pointer-events-none hidden'}>
                                <div className='relative w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <button onClick={() => updateContent(project.id - 1)} className='text-2xl md:text-3xl underline font-extrabold'>{project.title}</button>
                                    <h1 className='mt-2 text-sm font-bold z-10'>{project.date}</h1>
                                    <h1 className='text-sm z-10'>{project.itemType}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={modal ? 'fixed justify-center z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] pointer-events-auto backdrop-blur-sm overscroll-none' : "hidden"}>
                <div className='bg-primary-1 mx-full md:max-w-screen-md md:mx-auto p-12 md:p-16 md:my-20 pointer-events-none z-20 flex flex-col gap-8'>
                    <div className='flex flex-row justify-between items-center pointer-events-none'>
                        <h1 className='font-bold text-4xl'>{gallery[index].title}</h1>
                        <span onClick={handleModal} className='pointer-events-auto hover:text-neutral-4'><ImCross id='exit' size={20}/></span>
                    </div>
                    <div className='flex flex-wrap flex-col md:flex-row text-left gap-6'>
                        <div className='flex flex-col text-md font-serif text-slate-600 w-full'>
                            <h6>Role: {gallery[index].role}</h6>
                            <h6>Client: {gallery[index].client}</h6>
                            <h6>{gallery[index].url}</h6>
                        </div>
                        <div>
                            <p className='text-lg text-md w-full font-semibold text-slate-700'>{gallery[index].description}</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8 overscroll-none'>
                        <div className='w-full h-[5px] bg-slate-300 '></div>
                        {gallery[index].images.map((image) => (
                            <div key={image.id} className='w-full flex flex-col gap-4'>
                                <h1 className='text-justify font-bold text-2xl'>{image.title}</h1>
                                <h1 className='text-justify font-medium text-lg text-slate-500'>{image.description}</h1>
                                <img 
                                    src={`https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/${gallery[index].album}/${image.image}`}
                                    srcSet={`
                                            https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-400/${gallery[index].album}/${image.image}?width=400 400w,
                                            https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-800/${gallery[index].album}/${image.image}?width=800 800w,
                                            https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-1200/${gallery[index].album}/${image.image}?width=1200 1200w
                                    `}
                                    alt={image.alt}
                                    loading='lazy'
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}