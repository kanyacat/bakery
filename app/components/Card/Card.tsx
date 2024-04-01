import cls from './Card.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";


export enum CardSizes {
    MIDDLE = 'm',
    LARGE = 'l',
    BIG = 'b'
}

interface CardProps {
    className?: string
    size: CardSizes
}

export const Card = ({className, size}: CardProps) => {
    const {t} = useTranslation();

    const mods = {
        [cls[size]]: true,
    };


    return (
        <div className={classNames(cls.root, mods, [className])}>
            CARD
        </div>
    )
}
