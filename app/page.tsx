'use client'

import {classNames} from "@/app/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './page.module.scss'
import {Card, CardSizes} from "@/app/components/Card/Card";
import {MiniCard} from "@/app/components/MiniCard/MiniCard";
import {NewsCard} from "@/app/components/NewsCard/NewsCard";

export default function Home() {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [])}>
            <div className={classNames(cls.main, {}, [])}>
                <h1>{t('Хлебная лавка - это выпечка на любой вкус')}</h1>
            </div>

            <h2 className={cls.title}>{t('Наши товары')}</h2>
            <div className={cls.cards}>
                <Card className={cls.l}
                    background={'https://i.ibb.co/M9bQD88/Rectangle-31.png'}
                    title={'Вкуснейшие булочки'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                        'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}
                    width={'477'}
                    height={'285'}/>
                <Card className={cls.m}
                    background={'https://i.ibb.co/mJZWLyJ/002A.png'}
                    width={'337'}
                    height={'285'}
                />
                <Card className={cls.b}
                    background={'https://i.ibb.co/19gQYvD/Rectangle-31-1.png'}
                    title={'Нежнейшие кексы'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                          'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}
                    width={'331'}
                    height={'607'}
                />
                <Card className={cls.mm}
                    background={'https://i.ibb.co/f0hXMQd/004A.png'}
                    width={'337'}
                    height={'285'}
                />
                <Card className={cls.ll}
                    background={'https://i.ibb.co/Qf2677X/Rectangle-32.png'}
                    title={'Хрустящее печенье'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                          'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}
                    width={'477'}
                    height={'285'}/>
            </div>

            <h2 className={cls.title}>{t('Выбор покупателей')}</h2>
            <div className={cls.minicards}>
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
            </div>
            <h2 className={cls.title}>{t('Новости')}</h2>

            <div className={cls.minicards}>
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={'March 2023'}
                    text={'interior inspiration\n' +
                    'hidden to in the middle of....'}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={'March 2023'}
                    text={'interior inspiration\n' +
                        'hidden to in the middle of....'}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={'March 2023'}
                    text={'interior inspiration\n' +
                        'hidden to in the middle of....'}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
            </div>
        </div>)
}
