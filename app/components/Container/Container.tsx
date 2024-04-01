import styles from './Container.module.scss'
import {ReactNode} from "react";

interface ContainerProps {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <div className={styles.root}>{children}</div>
}
 
export default Container
