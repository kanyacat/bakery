'use client'

import {useParams} from "next/navigation";
import {Product} from "@/app/pages/Product/Product";
import {useEffect, useState} from "react";
import axios from "axios";
import {IProduct} from "@/app/pages/Catalogue/Catalogue";

const Page = () => {
    const params = useParams()

    const [product, setProduct] = useState<IProduct>()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getProduct(): Promise<void> {
        try {
            const { data } = await axios.get(
                `https://bakery-backend-lime.vercel.app/product/${params.product}`
            )
            setProduct(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [getProduct])

    return (<Product product={product} />)
};

export default Page;