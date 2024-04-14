import React from 'react';
import {Catalogue} from "@/app/pages/Catalogue/Catalogue";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Хлебная лавка — Каталог",
    description: "Хлебная лавка - сеть минипекарен в Твери.",
};

const Page = () => (
    <Catalogue />
);

export default Page;