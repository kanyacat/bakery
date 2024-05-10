import cls from './Header.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import Link from "next/link";
import Container from "@/app/components/Container/Container";
import SearchIcon from '@/app/assets/icons/Search.svg';
import CartIcon from '@/app/assets/icons/Cart.svg';

import {Button, ButtonTheme} from "@/app/components/Button/Button";
import {useAppDispatch} from "@/app/redux/ store";
import {isAuthSelector} from "@/app/redux/auth/selectors";
import {useSelector} from "react-redux";
import {fetchAuthMe, logout} from "@/app/redux/auth/slice";
import {useEffect} from "react";


export const Header = () => {
    const {t} = useTranslation('header');

    const isAuth = useSelector(isAuthSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAuthMe())
    }, [])

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    }

    return (
        <header className={classNames(cls.root, {}, [])}>
            <Container>
                <div className={cls.items}>
                    <nav className={cls.item}>
                        <Link href={'/'}>{t('Хлебная лавка')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Link href={'/'}>{t('Главная')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Link href={'/about_us'}>{t('О нас')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Link href={'/catalogue'}>{t('Каталог')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Link href={'/news'}>{t('Новости')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Link href={'/contact'}>{t('Контакты')}</Link>
                    </nav>
                    {isAuth ?
                        <>
                            <nav className={cls.item}>
                                <Link href={'/cart'}>
                                    <Button icon={<CartIcon />}>{t('Корзина')}</Button>
                                </Link>
                            </nav>
                            <nav className={cls.item} onClick={onClickLogout}>
                                <Link href={'/contact'}>{t('Выход')}</Link>
                            </nav>
                        </> :
                        <>
                            <nav className={cls.item}>
                                <Link href={'/login'}>{t('Вход')}</Link>
                            </nav>
                            <nav className={cls.item}>
                                <Link href={'/register'}>{t('Регистрация')}</Link>
                            </nav>
                        </>
                    }
                </div>
            </Container>
        </header>
    )
}
