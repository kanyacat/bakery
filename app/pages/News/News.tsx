'use client'

import cls from './News.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Card} from "@/app/components/Card/Card";


interface NewsProps {
    className?: string
}

export const News = ({className}: NewsProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <h1 className={cls.title}>{t('Наши новости')}</h1>
            <div className={cls.cards}>
                <Card
                    background={'https://i.ibb.co/hC1yqJv/Rectangle-9-1.png'}
                    date={t('Апрель 2024')}
                    text={t('Новое поступление свежего хлеба')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/7pjrFrZ/Rectangle-9-3.png'}
                    date={t('Март 2024')}
                    text={t('Специальное предложение на пончики')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Февраль 2024')}
                    text={t('Организуем дегустацию новых вкусов круассанов')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/B3bYQps/Rectangle-9-4.png'}
                    date={t('Январь 2024')}
                    text={t('С Новым Годом, дорогие покупатели!')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/5j1ZBBF/Rectangle-9-5.png'}
                    date={t('Ноябрь 2023')}
                    text={t('Фирменные кексы теперь доступны для заказа на мероприятия')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/S0HTbx4/Rectangle-9-2.png'}
                    date={t('Август 2023')}
                    text={t('Пекарня открывает новый филиал')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />

            </div>

        </div>
    )
}
