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
import {addToCart, fetchCart} from "@/app/redux/cart/slice";
import Link from "next/link";


interface CartProps {
    className?: string
}

export const Cart = ({className}: CartProps) => {
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

        // const params = {
        //     userId: userData._id,
        //     productId: productId,
        //     count: 1
        // }
        //
        // // @ts-ignore
        // dispatch(addToCart(params))
        // location.reload();
    }

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {products.length > 0 ? <>
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
                            <Button onClick={() => addProduct(p._id)}>+</Button>
                        </div>
                        <p className={cls.price}>{p.price}{t('₽ за одну шт.')}</p>
                        <p className={cls.price}>{t('Итого: ')}{p.price * items.products[index]?.count}{t(' ₽')}</p>
                    </div>})}
                <div className={cls.bottom}>
                    <p className={cls.sum}>{t('Сумма заказа: ')}{sum} {t('₽')}</p>
                    <Link href={'/order'}><Button className={cls.buy}>{t('Заказать')}</Button></Link>
                </div>
            </>: <div className={cls.empty}><h1 className={cls.sum}>{t('В корзине ничего не найдено.')}</h1></div>}
        </div>)
}
