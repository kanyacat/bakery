'use client'

import cls from './Catalogue.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {Card} from "@/app/components/Card/Card";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";


export const Catalogue = () => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [])}>
            <h1 className={cls.title}>{t('Каталог')}</h1>
            <div className={cls.wrapper}>
                <div className={cls.sidebar}><Sidebar />
                </div>
                <div className={cls.content}>
                    <div className={cls.top}>
                        <h2>{t('Наши товары')}</h2>
                        <Button>{t('Сортировать по')}:</Button>
                    </div>
                    <div className={cls.bottom}>
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                        <Card
                            background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                            name={t('Карамельный пончик')}
                            width={'303'}
                            height={'303'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
