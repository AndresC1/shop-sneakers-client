import SneakersType from "./SneakersType";

interface RequestSneakersType {
    "sneakers": SneakersType[],
    "mesage": string,
    "status": number,
}

export default RequestSneakersType