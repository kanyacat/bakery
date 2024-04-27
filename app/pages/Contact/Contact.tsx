'use client'

import cls from './Contact.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import MarkIcon from '@/app/assets/icons/Map.svg'
import {Roboto} from "next/font/google";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

interface ContactProps {
    className?: string
}

export const Contact = ({className}: ContactProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <h1 className={cls.title}>{t('Наши филиалы')}</h1>
            <YMaps>
                <div className={cls.wrapperMap}>
                    <Map className={cls.map}
                        defaultState={{ center: [56.856186, 35.866541 ], zoom: 12 }}
                    >
                        <Placemark
                            geometry={[56.845538, 35.893628]}
                        />
                        <Placemark
                            geometry={[56.840574, 35.913774]}
                        />
                        <Placemark
                            geometry={[56.856186, 35.866541]}
                        />
                        <Placemark
                            geometry={[56.880924, 35.843718]}
                        />
                    </Map>
                </div>
            </YMaps>
            <div className={classNames(roboto.className, {}, [cls.addresses])}>
                <div className={cls.address}>
                    <MarkIcon className={cls.icon} />
                    <p className={cls.text}>{t('улица Паши Савельевой, 21к1')}</p>
                </div>
                <div className={cls.address}>
                    <MarkIcon className={cls.icon} />
                    <p className={cls.text}>{t('улица Виноградова, 3')}</p>
                </div>
                <div className={cls.address}>
                    <MarkIcon className={cls.icon} />
                    <p className={cls.text}>{t('1-я улица Суворова, 15')}</p>
                </div>
                <div className={cls.address}>
                    <MarkIcon className={cls.icon} />
                    <p className={cls.text}>{t('улица Склизкова, 44')}</p>
                </div>

            </div>

        </div>
    )
}
