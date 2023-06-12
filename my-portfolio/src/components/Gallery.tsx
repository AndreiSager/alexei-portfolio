import Projects from '../database/ProjectDatabase.json'
// import image from '../assets/coffee-beans.jpg'

export function Gallery() {
    const projects = Projects;

    return (
        <div className="flex justify-center text-center w-full">
            <div className="flex flex-col md:flex-row columns-3 pb-12 w-full max-w-screen-xl">
                {/* <img src={image} alt="" /> */}
                {projects.map((project) => (
                    <div className="flex w-[33.3%] h-auto">
                        <img src={project.imgURl} alt='Image Not Working' className=''/>
                        <h1>{project.id}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}