import SocialMediaLinks from "./SocialMedia";

export function Navbar() {
    return (
        <div className="flex flex-wrap justify-center items-center text-center w-full">
            <div className="flex flex-col md:flex-row flex-wrap gap-y-8 justify-center md:justify-between md:gap-auto items-center p-8 w-full max-w-screen-xl">
                <SocialMediaLinks hidden/>
                <h1 className='text-5xl font-black bg-clip-text wk-bg-clip text-transparent bg-cover bg-center bg-home-texture'>ALEXEI</h1>
                <SocialMediaLinks/>
            </div>
        </div>
    )
}