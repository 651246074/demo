import { IRouteComponentProps } from 'umi'
import styles from './index.less';

export default (props: any) => {
    return <div style={{ padding: 20 }}>{ props.children }</div>;
}