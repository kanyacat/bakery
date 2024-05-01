'use client'

import cls from './Login.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {authDataSelector, isAuthSelector} from "@/app/redux/auth/selectors";
import {useAppDispatch} from "@/app/redux/ store";
import {useForm} from "react-hook-form";
import {fetchAuth, fetchAuthMe} from "@/app/redux/auth/slice";
import {redirect} from "next/navigation";
import Input from "@/app/components/Input/Input";
import {Button} from "@/app/components/Button/Button";


export const Login = () => {
    const {t} = useTranslation();

    const isAuth = useSelector(isAuthSelector)
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    })

    // window?.scrollTo(0, 0)

    const onSubmit = async (values: any) => {
        console.log(values)
        // @ts-ignore
        const data = await dispatch(fetchAuth(values))

        if (!data.payload) {
            return alert('Не удалось авторизоваться')
        }

        if (data.payload.token) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if (isAuth) {
        redirect('/')
    }

    return (
        <div className={classNames(cls.Login, {}, [])}>
            <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='email'
                    placeholder={t('Электронная почта')}
                    {...register('email', {
                        required: { value: true, message: t('Заполните электронную почту') }
                    })}
                    errorMessage={errors?.email?.message?.toString()}
                    className={cls.input}
                />
                <Input
                    type='text'
                    placeholder={t('Пароль')}
                    {...register('password', {
                        required: { value: true, message: t('Заполните пароль') }
                    })}
                    errorMessage={errors?.comment?.message?.toString()}
                    className={cls.input}
                />
                <Button className={cls.btn} type={'submit'}>{t('Отправить')}</Button>
            </form>

        </div>
    )
}
