'use client'

import {useTranslation} from "react-i18next";
import cls from './AboutUs.module.scss'
import {Roboto} from "next/font/google";
import {classNames} from "@/app/lib/classNames/classNames";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

const AboutUs = () => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [])}>
            <h1 className={cls.title}>{t('О нас')}</h1>
            <div className={cls.content}>
                <div className={cls.items}><img src="https://i.ibb.co/vV5RbVw/Rectangle-11.png" alt=""/></div>
                <div className={cls.divider}></div>
                <div className={cls.items}>
                    <div className={cls.itemsContent}>
                        <h3 className={cls.subtitle}>{t('Наша история')}</h3>
                        <p className={classNames(roboto.className, {}, [cls.text])}>
                            {t('Узнайте о наших корнях и традициях, которые лежат в основе нашей пекарни.')}
                        </p>
                        <p className={classNames(roboto.className, {}, [cls.text])}>
                            {t('Мы с гордостью представляем уникальное наследие нашего бренда ' +
                                'и нашей семейной истории в каждом из наших десертов.')}
                        </p>
                    </div>
                </div>
                <div className={cls.items}>
                    <div className={cls.itemsContent}>
                        <h3 className={cls.subtitle}>{t('Философия')}</h3>
                        <p className={classNames(roboto.className, {}, [cls.text])}>
                            {t('Мы стремимся к совершенству в каждом шаге процесса приготовления наших продуктов,' +
                                'от подбора только лучших ингредиентов до внимательного внимания' +
                                'к деталям при их приготовлении.')}</p>
                        <p className={classNames(roboto.className, {}, [cls.text])}>
                            {t('Узнайте больше о наших принципах и ценностях,' +
                                'которые вдохновляют нас на создание лучших десертов для наших клиентов')}
                        </p>
                    </div>
                </div>
                <div className={cls.divider}></div>
                <div className={cls.items}><img src="https://i.ibb.co/M8PYPtZ/Rectangle-12.png" alt=""/></div>
                <div className={cls.items}><img src="https://i.ibb.co/vV5RbVw/Rectangle-11.png" alt=""/></div>
                <div className={cls.divider}></div>
                <div className={cls.items}>
                    <div className={cls.itemsContent}>
                        <h3 className={cls.subtitle}>{t('Наша команда')}</h3>
                        <p className={classNames(roboto.className, {}, [cls.text])}>
                            {t('Встретьтесь с талантливой командой пекарей и кондитеров,' +
                                'которые делают нашу пекарню особенной.')}
                        </p>
                        <p className={classNames(roboto.className, {}, [cls.text])}>
                            {t('У каждого из нас есть страсть к созданию уникальных и' +
                                'вкусных десертов, и мы гордимся своим профессионализмом' +
                                'и творческим подходом к работе.')}
                        </p>
                    </div>
                </div>
            </div>
        </div>)
};

export default AboutUs;