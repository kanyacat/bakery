import cls from './Card.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button, ButtonTheme} from "@/app/components/Button/Button";
import {Quicksand, Roboto} from "next/font/google";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

export enum CardSizes {
    MIDDLE = 'm',
    LARGE = 'l',
    BIG = 'b'
}

interface CardProps {
    className?: string
    size: CardSizes
    background: string
    title?: string
    text?: string
    btn?: string
}

export const Card = ({className, size, background, title, text, btn}: CardProps) => {
    const {t} = useTranslation();

    const mods = {
        [cls[size]]: true,
    };


    return (
        <div className={classNames(cls.root, mods, [className])}
            style={{background:`url(${background})`}}>
            <strong className={cls.title}>{title}</strong>
            <p className={classNames(roboto.className, mods, [cls.text, className])}>
                {text}
            </p>
            {btn ? <Button theme={ButtonTheme.PRIMARY} className={cls.btn}>{btn}</Button> : ''}
        </div>
    )
}
