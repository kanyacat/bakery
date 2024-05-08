'use client'

import cls from './Cart.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {useEffect, useState} from "react";
import axios from "@/app/axios";
import {useSelector} from "react-redux";
import {authDataSelector} from "@/app/redux/auth/selectors";
import {useAppDispatch} from "@/app/redux/ store";
import {cartSelector} from "@/app/redux/cart/selectors";
import {fetchProducts} from "@/app/redux/products/slice";
import {fetchCart} from "@/app/redux/cart/slice";


interface CartProps {
    className?: string
}

export const Cart = ({className}: CartProps) => {
    const {t} = useTranslation();

    const [products, setProducts] = useState([])

    const dispatch = useAppDispatch()
    const {items} = useSelector(cartSelector)

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

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {products?.map((p: any, index) => {
                // @ts-ignore
                return <div key={p._id} className={cls.wrapper}>
                    <img className={cls.img}
                        src={p.img}
                        alt=""/>
                    <p className={cls.name}>{p.name}</p>
                    <div className={cls.count}>
                        <Button>-</Button>
                        <p className={cls.countValue}>{items.products[index]?.count}</p>
                        <Button onClick={() => addToCart(p._id)}>+</Button>
                    </div>
                    <p className={cls.price}>{p.price}{t('₽ за одну шт.')}</p>
                    <p className={cls.price}>{t('Итого: ')}{p.price * items.products[index].count}{t(' ₽')}</p>
                </div>})}
            <div className={cls.bottom}>
                <p className={cls.sum}>{t('Сумма заказа: 1234 ₽')}</p>
                <Button className={cls.buy}>{t('Заказать')}</Button>
            </div>
        </div>)
}
