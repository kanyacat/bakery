import cls from './Sidebar.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {useEffect, useState} from "react";
import {IProduct} from "@/app/pages/Catalogue/Catalogue";
import axios from "axios";


interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();

    const [catalogue, setCatalogue] = useState<IProduct[]>([])
    
    return (
        <div className={classNames(cls.root, {}, [className])}>
            <h2 className={cls.title}>{t('Категории')}</h2>
            <ul className={cls.list}>
                <li><Button onClick={ async () => {
                    // @ts-ignore
                    const { data } = await axios.get(
                        'http://localhost:4444/catalogue',
                        {params: {"category": "Печенье"} }
                    )
                    setCatalogue(data)

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
