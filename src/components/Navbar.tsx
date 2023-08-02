import SocialMediaLinks from "./SocialMedia";

export function Navbar() {
    return (
        <div className="flex flex-wrap justify-center items-center text-center w-full">
            <div className="flex flex-col md:flex-row gap-y-8 justify-center md:justify-between md:gap-auto items-center p-8 w-full max-w-screen-xl shadow-md">
                <div className="hidden md:invisible md:flex order-3 sm:order-1">
                    <SocialMediaLinks/>
                </div>
                <h1 className='order-1 sm:order-2 text-5xl font-black bg-clip-text wk-bg-clip text-transparent bg-cover bg-center bg-home-texture'>ALEXEI</h1>
                <div className="order-2 ms:order-3">
                    <SocialMediaLinks/>
                </div>
            </div>
        </div>
    )
}