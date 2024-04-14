import MainPage from "@/app/pages/MainPage/MainPage";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Хлебная лавка — Главная",
    description: "Хлебная лавка - сеть минипекарен в Твери.",
};

export default function Home() {
    return (<MainPage />)
}
