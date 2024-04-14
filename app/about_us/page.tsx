import AboutUs from "@/app/pages/AboutUs/AboutUs";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Хлебная лавка — О нас",
    description: "Хлебная лавка - сеть минипекарен в Твери.",
};


const Page = () => {

    return (<AboutUs />)
};

export default Page;