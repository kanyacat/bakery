import cls from './Sidebar.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {useEffect, useState} from "react";
import {IProduct} from "@/app/pages/Catalogue/Catalogue";
import axios from "axios";
import {useSelector} from "react-redux";
import {productSelector} from "@/app/redux/products/selectors";
import {useAppDispatch} from "@/app/redux/ store";
import {fetchProducts} from "@/app/redux/products/slice";


interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();

    const { items } = useSelector(productSelector)
    const dispatch = useAppDispatch()

    async function getCatalogue(): Promise<void> {
        try {
            // @ts-ignore
            dispatch(fetchProducts({params: {"category": "Печенье"}}))
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <h2 className={cls.title}>{t('Категории')}</h2>
            <ul className={cls.list}>
                <li><Button onClick={ async () => {
                    getCatalogue()
                }}>{t('Батоны')}</Button></li>
                <li><Button>{t('Блины')}</Button></li>
                <li><Button>{t('Булочки')}</Button></li>
                <li><Button>{t('Жарка')}</Button></li>
                <li><Button>{t('Кексы')}</Button></li>
                <li><Button>{t('Куличи')}</Button></li>
                <li><Button>{t('Осетия')}</Button></li>
                <li><Button>{t('Песочные')}</Button></li>
                <li><Button>{t('Печенье')}</Button></li>
                <li><Button>{t('Пироги')}</Button></li>
                <li><Button>{t('Пирожки')}</Button></li>
                <li><Button>{t('Пицца')}</Button></li>
                <li><Button>{t('Расстегаи')}</Button></li>
                <li><Button>{t('Сдоба')}</Button></li>
                <li><Button>{t('Слойки')}</Button></li>
                <li><Button>{t('Хлеб')}</Button></li>
                <li><Button>{t('Кондитерская')}</Button></li>
            </ul>
        </div>
    )
}
