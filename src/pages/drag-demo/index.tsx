import { Dropdown } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const getId = () => {
    return Math.random().toFixed(10).substr(2);
}

const list = [
    {
        id: 1,
        name: '111'
    },
    {
        id: 2,
        name: '222'
    },
    {
        id: 3,
        name: '333'
    },
    {
        id: 4,
        name: '444'
    },
    {
        id: 5,
        name: '555'
    },
    {
        id: 6,
        name: '666'
    },
    {
        id: 7,
        name: '777'
    },
    {
        id: 8,
        name: '888'
    },
    {
        id: 9,
        name: '999'
    }
];

interface ListItem {
    id: number;
    name: string
}

export default function DragDemo() {
    const [dragNode, setDragNode] = useState(Object);
    const [dropNode, setDropNode] = useState(Object);
    const [dragList, setDragList] = useState(list);
    /** 开始拖拽代码配置,只有代码配置下的文件才可以拖拽 */
    const dragStart = (row: Object, e: React.DragEvent<HTMLLIElement>) => {
        console.log(`start`, row);
        setDragNode(row);
    };

    /** 这些都是html5的drag函数了，可以了解下 */
    const onDragOver = (row: Object, e: React.DragEvent<HTMLLIElement>) => {
        console.log(`over`, row);
        e.preventDefault();
    };

    /** 这些都是html5的drag函数了，可以了解下 */
    const onDragEnd = (row: Object, e: React.DragEvent<HTMLLIElement>) => {
        setDragNode(row);
    };

    const onDrop = (row: Object, e: React.DragEvent) => {
        e.stopPropagation();
        const dropNode = row;
        setDropNode(dropNode);
    };

    const changeNodesPos = () => {
        if(dragNode.id === dropNode.id) {
            return;
        }
        let newList: Array<ListItem> = [];
        dragList?.forEach(item => {
            if(item.id === dragNode.id) {
                newList.push(dropNode);
            }else if(item.id === dropNode.id) {
                newList.push(dragNode);
            }else {
                newList.push(item);
            }
        });
        setDragList(newList);
    }

    useEffect(() => {
        changeNodesPos();
    }, [dropNode])

    return (
        <div className={styles.TestDrag}>
            <ul className={styles.DragCon}>
                {
                    dragList?.map(item => (
                        <li 
                            key={item.id} 
                            draggable="true"
                            onDragOver={e => onDragOver(item, e)}
                            onDragStart={e => dragStart(item, e)}
                            onDragEnd={e => onDragEnd(item, e)}
                            onDrop={e => onDrop(item, e)}
                        >
                            {`列表 - ${item.name}`}
                        </li>
                    ))
                }
            </ul>
            <div className={styles.Content}>

            </div>
        </div>
    )
}