import Layout from 'antd/lib/layout/layout';

import { IRouteComponentProps } from 'umi'
import styles from './indexless';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
      <div className={styles.Layout}>
          {children}
      </div>
  )
}