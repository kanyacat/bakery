'use client'

import {classNames} from "@/app/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './page.module.scss'
import {Card, CardSizes} from "@/app/components/Card/Card";

export default function Home() {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [])}>
            <div className={classNames(cls.main, {}, [])}>
                <h1>{t('Хлебная лавка - это выпечка на любой вкус')}</h1>
            </div>

            <h2 className={cls.title}>{t('Наши товары')}</h2>
            <div className={cls.cards}>
                <Card className={cls.l} size={CardSizes.LARGE}/>
                <Card className={cls.m}  size={CardSizes.MIDDLE} />
                <Card className={cls.b} size={CardSizes.BIG}/>
                <Card className={cls.mm} size={CardSizes.MIDDLE} />
                <Card className={cls.ll} size={CardSizes.LARGE}/>
            </div>
        </div>)
}
