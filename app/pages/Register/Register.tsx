'use client'

import cls from '../../register/Login.module.scss'
import {useTranslation} from 'react-i18next';
import {classNames} from "@/app/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {authDataSelector, isAuthSelector} from "@/app/redux/auth/selectors";
import {useAppDispatch} from "@/app/redux/ store";
import {useForm} from "react-hook-form";
import {fetchAuth, fetchAuthMe, fetchRegister} from "@/app/redux/auth/slice";
import {redirect} from "next/navigation";
import Input from "@/app/components/Input/Input";
import {Button} from "@/app/components/Button/Button";


export const Register = () => {
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

    const onSubmit = async (values: any) => {
        // @ts-ignore
        const data = await dispatch(fetchRegister(values))

        if (!data.payload) {
            return alert('Не удалось зарегистрироваться')
        }

        if (data.payload.token) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if (isAuth) {
        redirect('/')
    }

    return (
        <div className={classNames(cls.root, {}, [])}>
            <h1 className={cls.title}>{t('Регистрация')}</h1>
            <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    placeholder={t('Ваше имя')}
                    {...register('fullName', {
                        required: { value: true, message: t('Заполните имя') }
                    })}
                    errorMessage={errors?.comment?.message?.toString()}
                    className={cls.input}
                />
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
                    type='password'
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
