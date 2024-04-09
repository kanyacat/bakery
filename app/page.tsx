'use client'

import {classNames} from "@/app/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './page.module.scss'
import {Card} from "@/app/components/Card/Card";
import Input from "@/app/components/Input/Input";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Button} from "@/app/components/Button/Button";


interface IFormData {
    name?: string
    phone?: number
    comment?: string
}

export default function Home() {
    const {t} = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const onSubmit = (formData: IFormData) => {
        try {
            if (formData) {
                setIsSuccess(true)
                reset()
            }
        } catch (err: any) {
            setError(`${err.message}`)
        }
    }


    return (
        <div className={classNames(cls.root, {}, [])}>
            <div className={classNames(cls.main, {}, [])}>
                <h1>{t('Хлебная лавка - это выпечка на любой вкус')}</h1>
            </div>

            <h2 className={cls.title}>{t('Наши товары')}</h2>
            <div className={cls.cards}>
                <Card className={cls.l}
                    background={'https://i.ibb.co/M9bQD88/Rectangle-31.png'}
                    title={'Вкуснейшие булочки'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                        'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}
                    width={'477'}
                    height={'285'}/>
                <Card className={cls.m}
                    background={'https://i.ibb.co/mJZWLyJ/002A.png'}
                    width={'337'}
                    height={'285'}
                />
                <Card className={cls.b}
                    background={'https://i.ibb.co/19gQYvD/Rectangle-31-1.png'}
                    title={'Нежнейшие кексы'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                          'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}
                    width={'331'}
                    height={'607'}
                />
                <Card className={cls.mm}
                    background={'https://i.ibb.co/f0hXMQd/004A.png'}
                    width={'337'}
                    height={'285'}
                />
                <Card className={cls.ll}
                    background={'https://i.ibb.co/Qf2677X/Rectangle-32.png'}
                    title={'Хрустящее печенье'}
                    text={'Для изготовления использованы натуральные продукты без консервантов, ' +
                          'а главным ингредиентом является любовь. '}
                    btn={'В корзину'}
                    width={'477'}
                    height={'285'}/>
            </div>
            <h2 className={cls.title}>{t('Выбор покупателей')}</h2>
            <div className={cls.minicards}>
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
                <Card
                    background={'https://i.ibb.co/kXt0xMt/Rectangle-30.png'}
                    name={'Карамельный пончик'}
                    width={'303'}
                    height={'303'}
                />
            </div>
            <h2 className={cls.title}>{t('Новости')}</h2>
            <div className={cls.minicards}>
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={'March 2023'}
                    text={'interior inspiration\n' +
                    'hidden to in the middle of....'}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={'March 2023'}
                    text={'interior inspiration\n' +
                        'hidden to in the middle of....'}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
                <Card
                    background={'https://i.ibb.co/d6zrGzy/Rectangle-9.png'}
                    date={'March 2023'}
                    text={'interior inspiration\n' +
                        'hidden to in the middle of....'}
                    width={'320'}
                    height={'320'}
                    news={true}
                />
            </div>
            <div className={cls.feedback}>
                <div className={cls.content}>
                    <h3 className={cls.feedbackTitle}>Оставить отзыв или связаться с нами</h3>
                    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type='text'
                            placeholder={'Ваше имя'}
                            {...register('name', {
                                required: { value: true, message: 'Заполните имя' }
                            })}
                            errorMessage={errors?.name?.message?.toString()}
                            className={cls.input}
                        />
                        <Input
                            type='email'
                            placeholder={'Ваша электронная почта'}
                            {...register('email', {
                                required: { value: true, message: 'Заполните электронную почту' }
                            })}
                            errorMessage={errors?.email?.message?.toString()}
                            className={cls.input}
                        />
                        <Input
                            type='text'
                            placeholder={'Ваш комментарий'}
                            {...register('comment', {
                                required: { value: true, message: 'Заполните комментарий' }
                            })}
                            errorMessage={errors?.comment?.message?.toString()}
                            className={cls.input}
                        />
                        <Button className={cls.btn} type={'submit'}>Отправить</Button>
                    </form>
                </div>
            </div>
        </div>)
}
