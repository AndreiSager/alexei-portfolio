"use client"

import { ReactNode } from 'react';

import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'

import MdEventAvailable from 'react-icons';


export const ReferenceLinks = [
    { title: "Andrei Sager", url: "https://andreiportfolio.vercel.app"},
]

interface Category {
    id: number;
    icon: ReactNode;
    title: string;
    url: string;
}
const iconSize = 33;


export const SocialMediaLinks: Category[] = [
    { id:1, title: "Instagram", icon: <BsInstagram size={iconSize} className="hover:text-instagram" color="" />, url: "https://instagram.com/creamy_poachegg?igshid=MzNlNGNkZWQ4Mg==" },
    { id:2, title: "Facebook", icon: <BsFacebook size={iconSize} className="hover:text-facebook" />, url: "https://www.facebook.com/profile.php?id=100091338488777&mibextid=ZbWKwL" },
    { id:3, title: "LinkedIn", icon: <ImLinkedin size={iconSize} className="hover:text-linkedin" />, url: "https://www.linkedin.com/in/shane-alexei-s-sager-a7a959281/" },
]

export const AboutContent = {
    imageKitId: "https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/",
    imageAvatar: "compressed/me.jpg",                   
    title: "Who Am I?",
    description: "Hello, my name is Alexei, I love making liquor and liqueur drinks. Unironically, I'm only interested in making drink not drinking the concoction of alcohol I make. I'm a passionate individual whose goal is to serve drinks classically and elegantly gain the attention of my clients and build my reputation. With that said, I aim to become one of the best bartenders in the world that can make anyone drink with my serene atmosphere.",
}

export const GalleryItemData = [
    {
        id:1,
        thumbnail: "swiss-bail.jpg",
        alt: "Swiss Bail",
        title: "CUBA LIVER",
        date: "2020",
        itemType: "Recipe",
        description: " Lime 3/4 oz, 20ml | Lemon 1/2 oz, 15ml | Agave syrup 1 oz or 3/4 oz, 15ml | ▪︎ Optional: Lemon and use your favorite Coca-Cola soda.",
        client: "None",
        role: "Bartender",
        url: "",
        album: "project-0",
        images: [
            { id:1, image: "image-1.jpg", alt:"Swiss Bail Photo", title:"Testing", description:"A photo of the swiss bail using an old camera." },
            { id:2, image: "image-1.jpg", alt:"Swiss Bail Photo", title:"", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque animi iste veritatis ullam cum, natus voluptatem eligendi dignissimos suscipit vitae error itaque sed minima vero ut minus expedita voluptatum temporibus doloremque? Placeat dolorum voluptas adipisci, necessitatibus corrupti tenetur quibusdam exercitationem commodi nobis tempore magnam obcaecati, ab quidem sequi molestiae?" },
        ]
    },
    // {
    //     id:2,
    //     thumbnail: "swiss-bail.jpg",
    //     alt: "Swiss Bail",
    //     title: "LIME MOJITO",
    //     date: "2020",
    //     itemType: "Recipe",
    //     description: " Lime 1:1/2 oz, 45ml | Lemon 1/2 oz, 15ml | Agave Syrup 1 oz or 3/4 oz, 15ml | Lemonade / Orange Soda ▪︎ Tip: if you want to use Sanpelligrino if not its fine. ▪︎ Optional: Ginger ALE",
    //     client: "None",
    //     role: "Bartender",
    //     url: "",
    //     album: "project-0",
    //     images: [
    //         { image: "image-1.jpg", alt:"Swiss Bail Photo", caption:"A photo of the swiss bail using an old camera." },
    //         { image: "image-1.jpg", alt:"Swiss Bail Photo", caption:"A photo of the swiss bail using an old camera." },
    //     ]
    // },
    // {
    //     id:3,
    //     thumbnail: "swiss-bail.jpg",
    //     alt: "Swiss Bail",
    //     title: "SCREW DRIVER",
    //     date: "2020",
    //     itemType: "Recipe",
    //     description: " Lime 1/2 oz, 15ml | Lemon 1/2 oz, 15ml | Orange 1: 1/2 oz, 45ml | Agave syrup 1 or 3/4 oz, 15ml | ▪︎ Tip: 2 Times / 2 of orange & then 2 times 1:1/2 or 1 of orange",
    //     client: "None",
    //     role: "Bartender",
    //     url: "",
    //     album: "project-0",
    //     images: [
    //         { image: "image-1.jpg", alt:"Swiss Bail Photo", caption:"A photo of the swiss bail using an old camera." },
    //         { image: "image-1.jpg", alt:"Swiss Bail Photo", caption:"A photo of the swiss bail using an old camera." },
    //     ]
    // },
]        