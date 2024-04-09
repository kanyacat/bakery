import cls from './Input.module.scss'
import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import {classNames} from "@/app/lib/classNames/classNames";

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	errorMessage?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
    (
        { className, errorMessage, ...props }: InputProps,
        ref: ForwardedRef<HTMLInputElement>
    ): JSX.Element => {

        return (
            <div className={classNames(cls.inputWrapper, {}, [className])}>
                <input
                    ref={ref}
                    className={classNames(cls.input, {
                        [cls.error]: errorMessage
                    }, [])}
                    {...props}
                />
                {errorMessage && <div className={cls.errorMessage}>{errorMessage}</div>}
            </div>
        )
    }
)

export default Input
