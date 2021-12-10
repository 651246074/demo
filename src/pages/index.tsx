import { IRouteComponentProps } from 'umi';
import styles from './index.less';

export default function IndexPage({children}: IRouteComponentProps) {
  return (
    <div className={styles.IndexPage}>
      <h1 className={styles.title}>首页</h1>
      {children}
    </div>
  );
}
