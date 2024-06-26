import React from 'react';
import {News} from "@/app/pages/News/News";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Хлебная лавка — Новости",
    description: "Хлебная лавка - сеть минипекарен в Твери.",
};
const Page = () => (
    <News />
);

export default Page;