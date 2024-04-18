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
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Март 2023')}
                    text={t('interior inspiration\n') +
                        t('hidden to in the middle of....')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Март 2023')}
                    text={t('interior inspiration\n') +
                        t('hidden to in the middle of....')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Март 2023')}
                    text={t('interior inspiration\n') +
                        t('hidden to in the middle of....')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Март 2023')}
                    text={t('interior inspiration\n') +
                        t('hidden to in the middle of....')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Март 2023')}
                    text={t('interior inspiration\n') +
                        t('hidden to in the middle of....')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={t('Март 2023')}
                    text={t('interior inspiration\n') +
                        t('hidden to in the middle of....')}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
            </div>

        </div>
    )
}
