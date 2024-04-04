import cls from './MiniCard.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {CardSizes} from "@/app/components/Card/Card";


interface MiniCardProps {
    className?: string
    img: string
    name: string
}

export const MiniCard = ({className, img, name }: MiniCardProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}
            style={{background:`url(${img}) no-repeat`}}>
            <p className={cls.name}>{name}</p>
        </div>
    )
}
