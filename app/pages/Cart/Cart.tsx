'use client'

import cls from './Cart.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import Link from "next/link";
import {Button} from "@/app/components/Button/Button";


interface CartProps {
    className?: string
}

export const Cart = ({className}: CartProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={cls.wrapper}>
                <img className={cls.img} src="https://i.pinimg.com/736x/22/76/7c/22767c2b8064ff14dd2b792d00ff4921.jpg"
                    alt=""/>
                <p className={cls.name}>{t('Карамельное печенье')}</p>
                <div className={cls.count}>
                    <Button>-</Button>
                    <p className={cls.countValue}>5</p>
                    <Button>+</Button>
                </div>
                <p className={cls.price}>{t('100 ₽')}</p>
            </div>
            <div className={cls.wrapper}>
                <img className={cls.img} src="https://i.pinimg.com/736x/22/76/7c/22767c2b8064ff14dd2b792d00ff4921.jpg"
                    alt=""/>
                <p className={cls.name}>{t('Карамельное печенье')}</p>
                <div className={cls.count}>
                    <Button>-</Button>
                    <p className={cls.countValue}>5</p>
                    <Button>+</Button>
                </div>
                <p className={cls.price}>{t('100 ₽')}</p>
            </div>

            <div className={cls.wrapper}>
                <img className={cls.img}
                    src="https://i.pinimg.com/736x/22/76/7c/22767c2b8064ff14dd2b792d00ff4921.jpg"
                    alt=""
                />
                <p className={cls.name}>{t('Карамельное печенье')}</p>
                <div className={cls.count}>
                    <Button>-</Button>
                    <p className={cls.countValue}>5</p>
                    <Button>+</Button>
                </div>
                <p className={cls.price}>{t('100 ₽')}</p>
            </div>

            <div className={cls.bottom}>
                <p className={cls.sum}>{t('Сумма заказа: 1234 ₽')}</p>
                <Button className={cls.buy}>{t('Заказать')}</Button>
            </div>
        </div>
    )
}
