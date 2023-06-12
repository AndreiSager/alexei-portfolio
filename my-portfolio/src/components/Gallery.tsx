import Projects from '../database/ProjectDatabase.json'

export function Gallery() {
    const projects = Projects.reverse();

    return (
        <div className="flex justify-center text-center w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col min-w-full min-h-full aspect-square justify-center items-center">
                        <img src={`src/assets/${project.imgURl}`} alt={`${project.itemType} | ${project.altMessage}`} className='min-w-full min-h-full aspect-square object-cover'/>
                        <h1 className='hidden w-[80%]'>{project.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}