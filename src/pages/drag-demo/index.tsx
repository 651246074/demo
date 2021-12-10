import React from 'react';
import styles from './index.less';

export default function DragDemo() {
    return (
        <div className={styles.TestDrag}>
            <ul className={styles.DragCon}>     
                <li id="item1" draggable="true">列表1</li>  
                <li id="item2" draggable="true">列表2</li>  
                <li id="item3" draggable="true">列表3</li>  
                <li id="item4" draggable="true">列表4</li>  
                <li id="item5" draggable="true">列表5</li>  
                <li id="item6" draggable="true">列表6</li>  
            </ul>
            <div className={styles.Content}>

            </div>
        </div>
    )
}