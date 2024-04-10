import styles from './Container.module.scss'
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {classNames} from "@/app/lib/classNames/classNames";

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
