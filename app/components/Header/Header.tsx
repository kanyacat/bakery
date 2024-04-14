import cls from './Header.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import Link from "next/link";
import Container from "@/app/components/Container/Container";
import SearchIcon from '@/app/assets/icons/Search.svg';
import CartIcon from '@/app/assets/icons/Cart.svg';

import {Button, ButtonTheme} from "@/app/components/Button/Button";


export const Header = () => {
    const {t} = useTranslation('header');

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
                        <Link href={'/'}>{t('Новости')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Link href={'/'}>{t('Контакты')}</Link>
                    </nav>
                    <nav className={cls.item}>
                        <Button theme={ButtonTheme.LIGHT} icon={<SearchIcon />}>{t('Поиск')}</Button>
                    </nav>
                    <nav className={cls.item}>
                        <Button icon={<CartIcon />}>{t('Корзина')}</Button>
                    </nav>
                </div>
            </Container>
        </header>
    )
}
