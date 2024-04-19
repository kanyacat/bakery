'use client'

import cls from './Catalogue.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {Card} from "@/app/components/Card/Card";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import Link from "next/link";
import {Roboto} from "next/font/google";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

export const Catalogue = () => {
    const {t} = useTranslation();

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
                    <Link href={'/catalogue/1'}>
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                    </Link>
                    <Link href={'/catalogue/2'}>
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                    </Link>
                    <Link href={'/catalogue/3'}>
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                    </Link>
                    <Card
                        background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                        name={t('Карамельный пончик')}
                        width={'303'}
                        height={'303'}
                    />
                    <Card
                        background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                        name={t('Карамельный пончик')}
                        width={'303'}
                        height={'303'}
                    />
                    <Card
                        background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                        name={t('Карамельный пончик')}
                        width={'303'}
                        height={'303'}
                    />
                    <Card
                        background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                        name={t('Карамельный пончик')}
                        width={'303'}
                        height={'303'}
                    />
                    <Card
                        background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                        name={t('Карамельный пончик')}
                        width={'303'}
                        height={'303'}
                    />
                    <Card
                        background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                        name={t('Карамельный пончик')}
                        width={'303'}
                        height={'303'}
                    />
                </div>
            </div>
        </div>
    )
}
