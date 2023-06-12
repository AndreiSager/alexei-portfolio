import Projects from '../database/ProjectDatabase.json'

export function Gallery() {
    const projects = Projects.slice().reverse();

    return (
        <div className="flex justify-center text-center w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl">
                {projects.map((project) => (
                    <div key={project.id} className="relative min-w-full min-h-full aspect-square mx-auto ">
                        <img src={`src/assets/${project.imgURl}`} alt={`${project.itemType} | ${project.altMessage}`}
                            className='block aspect-square object-cover'/>
                        <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-opacity-0 text-opacity-0 duration-75 ease-linear
                             bg-neutral-color-1 hover:bg-opacity-50 hover:text-opacity-100 text-primary-color-1 font-bold text-xl'>
                            <div className='relative w-[80%] text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                text-inherit'>{project.title}</div>
                            <div className='relative w-[80%] text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            text-inherit text-bold'>{`${project.itemType} | ${project.itemDate}`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}