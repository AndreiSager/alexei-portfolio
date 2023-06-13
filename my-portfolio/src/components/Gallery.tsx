import Projects from '../database/ProjectDatabase.json'

export function Gallery() {
    const projects = Projects.slice().reverse();

    return (
        <div className="flex justify-center text-center w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl">
                {projects.map((project) => (
                    <div key={project.id} className="relative min-w-full min-h-full aspect-square mx-auto ">
                        <img src={`src/assets/${project.imgURl}`} alt="No Thumbnail Image"
                            className='relative aspect-square object-cover'/>
                        <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-opacity-0 text-opacity-0 duration-200 ease-linear
                             bg-neutral-1 hover:bg-opacity-50 hover:text-opacity-100 text-primary-1 z-20 hover:z-0'>
                            <div className='relative w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <h1 className='text-2xl md:text-3xl underline font-extrabold '><a href="">{project.title}</a></h1>
                                <h1 className='mt-2 text-sm font-bold z-10'>{project.itemDate}</h1>
                                <h1 className='text-sm z-10'>{project.itemType}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}