'use client'

import cls from './Cart.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {useEffect, useState} from "react";
import axios from "@/app/axios";


interface CartProps {
    className?: string
}

export const Cart = ({className}: CartProps) => {
    const {t} = useTranslation();

    const [cart, setCart] = useState()
    const [products, setProducts] = useState([])
    async function getCart(): Promise<void> {
        try {
            const { data } = await axios.get(
                '/cart'
            )
            setCart(data.products)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    cart?.map(async (p) => {
        const {data} = await axios.get(
            `/product/${p.productId}`
        )
        // @ts-ignore
        products.push(data)
    })

    // products?.map((p) => (console.log(p)))

    // @ts-ignore
    return (
        <div className={classNames(cls.root, {}, [className])}>
            {products?.map((p, index) => {
                return <div key={p._id} className={cls.wrapper}>
                    <img className={cls.img}
                        src={p.img}
                        alt=""/>
                    <p className={cls.name}>{p.name}</p>
                    <div className={cls.count}>
                        <Button>-</Button>
                        <p className={cls.countValue}>{cart[index].count}</p>
                        <Button>+</Button>
                    </div>
                    <p className={cls.price}>{p.price}{t('₽ за одну шт.')}</p>
                    <p className={cls.price}>{t('Итого: ')}{p.price * cart[index].count}{t('₽')}</p>
                </div>})}
            <div className={cls.bottom}>
                <p className={cls.sum}>{t('Сумма заказа: 1234 ₽')}</p>
                <Button className={cls.buy}>{t('Заказать')}</Button>
            </div>
        </div>)
}
