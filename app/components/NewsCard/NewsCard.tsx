import cls from './NewsCard.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";


interface NewsCardProps {
    className?: string
    date?: string
    text?: string
    img: string
}

export const NewsCard = ({className, date, img, text}: NewsCardProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}
            style={{background:`url(${img}) no-repeat`}}>
            <div className={cls.content}>
                <p className={cls.date}>{date}</p>
                <p className={cls.text}>{text}</p>
            </div>
        </div>
    )
}
