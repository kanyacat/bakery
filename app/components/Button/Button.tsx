import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';
import {classNames} from "@/app/lib/classNames/classNames";
import {Quicksand} from "next/font/google";

export enum ButtonTheme {
    PRIMARY = 'clear',
    LIGHT = 'light',
    BLACK = 'black,'
}

const quicksand = Quicksand({ subsets: ["latin"] });


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    disabled?: boolean
    children?: ReactNode
    icon?: ReactNode
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        disabled,
        icon,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, quicksand.className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
            {icon ? <span>{icon}</span> : ''}
        </button>
    );
};
