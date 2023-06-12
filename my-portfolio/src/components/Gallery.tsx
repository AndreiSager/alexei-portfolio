import Projects from '../database/ProjectDatabase.json'

export function Gallery() {
    const projects = Projects.slice().reverse();

    return (
        <div className="flex justify-center text-center w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl">
                {projects.map((project) => (
                    <div key={project.id} className="flex relative min-w-full min-h-full aspect-square justify-center items-center">
                        <img src={`src/assets/${project.imgURl}`} alt={`${project.itemType} | ${project.altMessage}`} 
                            className='block aspect-square object-cover'/>
                        <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 transition-opacity duration-75 ease-linear bg-neutral-color-1 hover:opacity-50'>
                            Hello
                            <div className='hidden text-lg hover:flex hover:absolute top-[50%] left-[50%] text-white'>{project.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}