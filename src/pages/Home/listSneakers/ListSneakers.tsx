import React, { useEffect, useState } from 'react'
import BoxSneakers from './BoxSneakers/BoxSneakers'
import { getSneakers } from '../../../services/SneakersAPI'
import RequestSneakersType from '../../../types/RequestSneakersType';

export default function ListSneakers() {
    const [Sneakers, setSneakers] = useState<RequestSneakersType>({} as RequestSneakersType);

    const url =import.meta.env.VITE_SECRET_URL
    useEffect(() => {
        const getData = async () => {
            const data = await getSneakers(url);
            setSneakers(data);
        }
        getData();
    }, [])
  return (
    <div className='p-4 flex flex-wrap justify-center md:justify-start gap-4'>
        {
            Sneakers
            ? Sneakers.sneakers?.map((sneaker) => {
                return <BoxSneakers sneaker={sneaker}/>
            })
            : <div>Cargando...</div>
        }
    </div>
  )
}
