import SizeSneakersType from "./SizeSneakersType"

interface SneakersType {
    "id": number,
    "name": string,
    "brand": string,
    "color": string,
    "price": number,
    "description": string,
    "category": string,
    "gender": string,
    "images": string[],
    "size": SizeSneakersType[],
}

export default SneakersType