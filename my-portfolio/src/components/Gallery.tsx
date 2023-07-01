import { useState } from 'react';
import { ImCross } from 'react-icons/im'
import { GalleryItemData } from '../constants/index.ts'

export function Gallery() {
    const gallery = GalleryItemData.slice().reverse();

    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal)
    }
    const [i, setIndex] = useState(0);
    function updateContent(id: number): void {
        setIndex(id - 1);
        handleModal();
    }

    return (
        <div className="flex justify-center text-center w-full">
            <div className='flex flex-row max-w-screen-xl'>
                <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {gallery.map((project) => (
                        <div key={project.id} className="relative min-w-full min-h-full aspect-square mx-auto">
                            <img 
                                src={`https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/thumbnails/thumbnail-${project.id}.jpg`}
                                srcSet={`
                                      https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-400/thumbnails/thumbnail-${project.id}.jpg?width=400 400w,
                                      https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-800/thumbnails/thumbnail-${project.id}.jpg?width=800 800w
                                `}
                                alt="No Thumbnail Image"
                                loading='lazy'
                                decoding="async"
                                className='relative aspect-square object-cover'
                            />
                            <div className={!modal ? 'absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-opacity-0 text-opacity-0 duration-200 ease-linear bg-neutral-1 hover:bg-opacity-50 hover:text-opacity-100 text-primary-1 z-20 hover:z-0' : 'pointer-events-none hidden'}>
                                <div className='relative w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <button onClick={() => updateContent(project.id)} className='text-2xl md:text-3xl underline font-extrabold'>{project.content.title}</button>
                                    <h1 className='mt-2 text-sm font-bold z-10'>{project.content.date}</h1>
                                    <h1 className='text-sm z-10'>{project.content.itemType}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={modal ? 'fixed justify-center z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] pointer-events-auto backdrop-blur-sm' : "hidden"}>
                <div className='bg-primary-1 mx-full md:max-w-screen-md md:mx-auto p-12 md:p-16 md:my-20 pointer-events-none z-20 flex flex-col gap-8'>
                    <div className='flex flex-row justify-between pointer-events-none'>
                        <h1 className='font-medium text-xl'>{gallery[i].content.title}</h1>
                        <span onClick={handleModal} className='pointer-events-auto hover:text-neutral-4'><ImCross id='exit' size={20}/></span>
                    </div>
                    <div className='flex flex-wrap flex-col md:flex-row text-left gap-6'>
                        <div className='flex flex-col text-md font-serif text-slate-600'>
                            <h6>Role: {gallery[i].content.role}</h6>
                            <h6>Client: {gallery[i].content.client}</h6>
                            <h6>{gallery[i].content.url}</h6>
                        </div>
                        <div>
                            <p className='text-lg text-md w-full font-normal'>{gallery[i].content.description}</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        {gallery[i].images.map((image) => (
                            <div key={i} className='w-fit flex flex-col gap-2'>
                                <img 
                                    src={`https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/project-${i}/image-${image.id}.jpg?`}
                                    srcSet={`
                                          https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-400/project-${i}/image-${image.id}.jpg?width=400 400w,
                                          https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-800/project-${i}/image-${image.id}.jpg?width=800 800w,
                                          https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-1200/project-${i}/image-${image.id}.jpg?width=1200 1200w
                                    `}
                                    alt=""
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