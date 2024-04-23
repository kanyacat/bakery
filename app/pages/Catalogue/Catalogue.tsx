'use client'

import cls from './Catalogue.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {Card} from "@/app/components/Card/Card";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import Link from "next/link";
import {Roboto} from "next/font/google";
import {useEffect, useState} from "react";
import axios from "axios";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

export const Catalogue = () => {
    const {t} = useTranslation();

    const [catalogue, setCatalogue] = useState([])
    async function getCatalogue(): Promise<void> {
        try {
            const { data } = await axios.get(
                'http://localhost:4444/catalogue'
            )
            setCatalogue(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCatalogue()
    }, [])


    // @ts-ignore
    return (
        <div className={classNames(cls.root, {}, [])}>
            <h1 className={cls.title}>{t('Каталог')}</h1>
            <div className={cls.wrapper}>
                <div className={cls.sidebar}><Sidebar /></div>
                <div className={cls.top}>
                    <h2>{t('Наши товары')}</h2>
                    <Button>{t('Сортировать по')}:</Button>
                </div>
                <div className={cls.bottom}>
                    {catalogue?.map((product) => (
                        <Link key={product._id} href={`/catalogue/${product._id}`}>
                            <Card
                                background={product.img}
                                name={product.name}
                                width={'303'}
                                height={'303'}
                            />
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}
