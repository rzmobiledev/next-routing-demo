import { StaticImageData } from "next/image";

import photo1 from "./photos/1.png";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "A Splashing Water",
        src: photo1,
        location: "china",
        photographer: "Rizal Safril"
    },
    {
        id: "2",
        name: "Meow cute",
        src: photo2,
        photographer: "Keyra Almira",
        location: "Aceh"
    },
    {
        id: "3",
        name: "Beautiful Birds",
        src: photo3,
        photographer: "Nasywah Azkia",
        location: "Aceh"
    },
    {
        id: "4",
        name: "4K Beautiful Birds",
        src: photo4,
        photographer: "Nasywah Azkia",
        location: "Aceh"
    },
    {
        id: "5",
        name: "Eagle",
        src: photo5,
        photographer: "Rizal Safril",
        location: "Aceh"
    },
    {
        id: "6",
        name: "Horse",
        src: photo6,
        photographer: "Keyra Almira",
        location: "East Java"
    },
]


export default wondersImages