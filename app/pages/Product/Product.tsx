import cls from './Product.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {IProduct} from "@/app/pages/Catalogue/Catalogue";
import {Roboto} from "next/font/google";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

interface ProductProps {
    className?: string
    product: IProduct | undefined
}

export const Product = ({className, product}: ProductProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <img className={cls.img} src={product?.img} alt="product"/>
            <div className={cls.content}><h1>{product?.name}</h1>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <h2 className={cls.price}>{product?.price} ₽</h2>
                <p className={classNames(roboto.className, {}, [cls.description])}>
                    {product?.description}
                </p>
                <p className={classNames(roboto.className, {}, [cls.weight])}>
                    {t('Вес:')} {product?.weight}
                </p>
                <p className={classNames(roboto.className, {}, [cls.calorie])}>
                    {t('Калории:')} {product?.calorie}
                </p>
                <div className={cls.buttons}>
                    <Button>{t('Купить сейчас')}</Button>
                    <Button>{t('Добавить в корзину')}</Button>
                </div>
            </div>
        </div>
    )
}
