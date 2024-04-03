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
                <Card className={cls.l} size={CardSizes.LARGE}
                    background={'https://i.ibb.co/M9bQD88/Rectangle-31.png'}
                    title={'Вкуснейшие булочки'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                        'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}/>
                <Card className={cls.m}  size={CardSizes.MIDDLE}
                    background={'https://i.ibb.co/mJZWLyJ/002A.png'}/>
                <Card className={cls.b} size={CardSizes.BIG}
                    background={'https://i.ibb.co/19gQYvD/Rectangle-31-1.png'}
                    title={'Нежнейшие кексы'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                          'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}/>
                <Card className={cls.mm} size={CardSizes.MIDDLE}
                    background={'https://i.ibb.co/f0hXMQd/004A.png'}/>
                <Card className={cls.ll} size={CardSizes.LARGE}
                    background={'https://i.ibb.co/Qf2677X/Rectangle-32.png'}
                    title={'Хрустящее печенье'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                          'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}/>
            </div>
        </div>)
}
