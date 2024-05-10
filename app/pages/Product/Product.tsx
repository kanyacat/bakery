import cls from './Product.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button} from "@/app/components/Button/Button";
import {IProduct} from "@/app/pages/Catalogue/Catalogue";
import {Roboto} from "next/font/google";
import {addToCart} from "@/app/redux/cart/slice";
import {useAppDispatch} from "@/app/redux/ store";
import {useSelector} from "react-redux";
import {cartSelector} from "@/app/redux/cart/selectors";
import {authDataSelector} from "@/app/redux/auth/selectors";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

interface ProductProps {
    className?: string
    product: IProduct | undefined
}

export const Product = ({className, product}: ProductProps) => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch()
    const userData = useSelector(authDataSelector)


    const addProduct = async (productId: number | undefined) =>{

        const params = {
            userId: userData._id,
            productId: productId,
            count: 1
        }

        // @ts-ignore
        dispatch(addToCart(params))
        return alert('Товар успешно добавлен в корзину!')

    }

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
                    <Button onClick={() => addProduct(product?._id)}>{t('Добавить в корзину')}</Button>
                </div>
            </div>
        </div>
    )
}
