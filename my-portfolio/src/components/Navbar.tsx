import SocialMediaLinks from "./SocialMedia";

export function Navbar() {
    return (
        <div className="flex flex-wrap justify-center items-center text-center w-full">
            <div className="flex flex-col md:flex-row flex-wrap gap-y-8 justify-center md:justify-between md:gap-auto items-center px-8 pt-8 lg:p-8 w-full max-w-screen-xl">
                <div className="order-3 lg:order-1">
                    <SocialMediaLinks hidden/>
                </div>
                <h1 className='order-1 lg:order-2 text-5xl font-black bg-clip-text wk-bg-clip text-transparent bg-cover bg-center bg-home-texture'>ALEXEI</h1>
                <div className="order-2 lg:order-3">
                    <SocialMediaLinks/>
                </div>
            </div>
        </div>
    )
}