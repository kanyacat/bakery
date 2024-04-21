import React from 'react';
import {Contact} from "@/app/pages/Contact/Contact";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Хлебная лавка — Контакты",
    description: "Хлебная лавка - сеть минипекарен в Твери.",
};

const Page = () => (
    <Contact />
);

export default Page;