import cls from './Product.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";


interface ProductProps {
    className?: string
    params: string | string[]
}

export const Product = ({className, params}: ProductProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <img src="https://i.ibb.co/XC1b91X/Rectangle-42.png" alt="product"/>
            <div className={cls.content}><h1>{t('Название продукта')} {params}</h1>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <h2 className={cls.price}>70 ₽</h2>
                <p className={cls.description}>
                    {t('This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines,' +
                        'signage, logo, quote, apparel and other creative applications.')}
                </p>
                <div className={cls.buttons}>
                    <Button>{t('Купить сейчас')}</Button>
                    <Button>1</Button>
                </div>
                <Button>{t('Добавить в корзину')}</Button>
            </div>
        </div>
    )
}
