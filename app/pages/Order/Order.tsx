'use client'

import cls from './Order.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/app/redux/ store";
import {useSelector} from "react-redux";
import {cartSelector} from "@/app/redux/cart/selectors";
import {authDataSelector} from "@/app/redux/auth/selectors";
import {addToCart, fetchCart} from "@/app/redux/cart/slice";
import axios from "@/app/axios";
import {Button} from "@/app/components/Button/Button";
import Link from "next/link";


interface OrderProps {
    className?: string
}

export const Order = ({className}: OrderProps) => {
    const {t} = useTranslation();

    const [products, setProducts] = useState([])

    const dispatch = useAppDispatch()
    const {items} = useSelector(cartSelector)
    const userData = useSelector(authDataSelector)


    async function getCart(): Promise<void> {
        try {
            dispatch(fetchCart())
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getCart()
    }, [])

    items.products?.map(async (p: any) => {
        const {data} = await axios.get(
            `/product/${p.productId}`
        )
        // @ts-ignore
        products.push(data)
    })

    let sum = 0;

    for(let i = 0; i < products.length; i++){
        // @ts-ignore
        sum += products[i]?.price * items?.products[i]?.count
    }

    const addProduct = async (productId: number) =>{

        const params = {
            userId: userData._id,
            productId: productId,
            count: 1
        }

        // @ts-ignore
        dispatch(addToCart(params))
        location.reload();
    }

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <h1 className={cls.title}>{t('Содержание заказа')}</h1>
            <h2 className={cls.subtitle}>{t('Товары:')}</h2>
            <div className={cls.goods}>
                {products?.map((p: any, index) => {
                    // @ts-ignore
                    return <div key={p._id} className={cls.wrapper}>
                        <img className={cls.img}
                            src={p.img}
                            alt=""/>
                        <p className={cls.name}>{p.name}</p>
                        <p className={cls.countValue}>{t('х')}{items.products[index]?.count}</p>
                        <p className={cls.price}>{p.price}{t('₽ за одну шт.')}</p>
                        <p className={cls.price}>{t('Итого: ')}{p.price * items.products[index]?.count}{t(' ₽')}</p>
                    </div>})}
                <div className={cls.choice}>
                    <p className={cls.address}>{t('Адрес заказа: 1-я улица Суворова, 15')}</p>
                    <p className={cls.payment}>{t('Оплата: наличными при получении ')}</p>
                </div>
                <div className={cls.bottom}>
                    <p className={cls.sum}>{t('К оплате: ')}{sum} {t('₽')}</p>
                    <Button className={cls.buy}>{t('Подтвердить')}</Button>
                </div>
            </div>
        </div>
    )
}
