'use client'

import {useParams} from "next/navigation";
import {Product} from "@/app/pages/Product/Product";

const Page = () => {
    const params = useParams()

    return (<Product params={params.product} />)
};

export default Page;