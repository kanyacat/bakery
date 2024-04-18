import cls from './Footer.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import Container from "@/app/components/Container/Container";
import {Button, ButtonTheme} from "@/app/components/Button/Button";
import Link from "next/link";


interface FooterProps {
    className?: string
}

export const Footer = ({className}: FooterProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Container className={cls.wrapper}>
                <div className={cls.section}>
                    <h4 className={cls.title}>{t('Наши товары')}</h4>
                    <nav><Link href={'/catalogue'}>{t('Булочки')}</Link></nav>
                    <nav><Link href={'/catalogue'}>{t('Пирожные')}</Link></nav>
                    <nav><Link href={'/catalogue'}>{t('Кексы')}</Link></nav>
                    <nav><Link href={'/catalogue'}>{t('Печенье')}</Link></nav>
                </div>
                <div className={cls.section}>
                    <h4 className={cls.title}>{t('О нас')}</h4>
                    <nav><Link href={'/about_us'}>{t('Наша цель')}</Link></nav>
                    <nav><Link href={'/about_us'}>{t('Наша история')}</Link></nav>
                    <nav><Link href={'/about_us'}>{t('Наша культура')}</Link></nav>
                    <nav><Link href={'/about_us'}>{t('Команда')}</Link></nav>
                </div>
                <div className={cls.section}>
                    <h4 className={cls.title}>{t('Компания')}</h4>
                    <nav><Link href={'/'}>{t('Заведения')}</Link></nav>
                    <nav><Link href={'/'}>{t('Лицензии и соглашения')}</Link></nav>
                    <nav><Link href={'/'}>{t('Технология')}</Link></nav>
                </div>
            </Container>
        </div>
    )
}
