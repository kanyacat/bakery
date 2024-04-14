import cls from './Sidebar.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import Link from "next/link";
import {Button} from "@/app/components/Button/Button";


interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <ul className={cls.list}>
                <li><Button>{t('Кексы')}</Button></li>
                <li><Button>{t('Булочки')}</Button></li>
                <li><Button>{t('Печенье')}</Button></li>
                <li><Button>{t('Пирожные')}</Button></li>
            </ul>
        </div>
    )
}
