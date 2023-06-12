import Projects from '../database/ProjectDatabase.json'

export function Gallery() {
    const projects = Projects;

    return (
        <div className="flex justify-center text-center w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-12 max-w-screen-xl">
                {projects.map((project) => (
                    <div className="flex flex-col min-w-full min-h-full aspect-square justify-center items-center">
                        <img src={project.imgURl} alt={project.altMessage + " | " + project.itemType} className=''/>
                        <h1>{project.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}