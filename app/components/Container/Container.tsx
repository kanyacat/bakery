import styles from './Container.module.scss'
import {DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect} from "react";
import {classNames} from "@/app/lib/classNames/classNames";
import {useAppDispatch} from "@/app/redux/ store";
import {useSelector} from "react-redux";
import {isAuthSelector} from "@/app/redux/auth/selectors";
import {fetchAuthMe} from "@/app/redux/auth/slice";

interface ContainerProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>{
	children: ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {

    return <div className={classNames(styles.root, {}, [className]) }>{children}</div>
}
 
export default Container
