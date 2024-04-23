'use client'

import {useParams} from "next/navigation";
import {Product} from "@/app/pages/Product/Product";
import {useEffect, useState} from "react";
import axios from "axios";

const Page = () => {
    const params = useParams()

    const [product, setProduct] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getProduct(): Promise<void> {
        try {
            const { data } = await axios.get(
                `http://localhost:4444/product/${params.product}`
            )
            setProduct(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [getProduct])

    return (<Product params={product.name} />)
};

export default Page;