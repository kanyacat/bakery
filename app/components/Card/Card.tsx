import cls from './Card.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {Button, ButtonTheme} from "@/app/components/Button/Button";
import {Quicksand, Roboto} from "next/font/google";

const roboto = Roboto({ weight: ['300'], subsets: ['latin']});

interface CardProps {
    className?: string
    height: string
    width: string
    background: string
    title?: string
    text?: string
    btn?: string
    date?: string
    news?: boolean
    name?: string
}

export const Card = (props: CardProps) => {
    const {className,
        background,
        title,
        text,
        btn,
        width,
        height,
        date,
        news = false,
        name
    } = props
    const {t} = useTranslation();

    const mods = {
    };


    return (
        <div className={classNames(cls.root, mods, [className])}
            style={{background:`url(${background}) no-repeat`, width: `${width}px`, height: `${height}px`}}>
            <div className={cls.content}>
                <strong className={cls.title}>{title}</strong>
                {!news && <p className={classNames(roboto.className, mods, [cls.text, className])}>
                    {text}
                </p>}
                {btn ? <Button theme={ButtonTheme.PRIMARY} className={cls.btn}>{btn}</Button> : ''}
            </div>
            {news &&
                <div className={cls.news}>
                    <p className={cls.date}>{date}</p>
                    <p className={classNames(roboto.className, mods, [cls.textNews, className])}>{text}</p>
                </div>
            }
            {name &&  <p className={cls.name}>{name}</p>}
        </div>
    )
}
