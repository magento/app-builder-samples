/*
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */
import {
    Item,
    TabList,
    TabPanels,
    Tabs
} from '@adobe/react-spectrum'
import { Orders } from './Orders'
import { Products } from './Products'
import { useState } from 'react'

export const MainPage = props => {

    const [selectedTab, setSelectedTab] = useState(1)

    const onSelectionTabChange = selectedTabKey => {
        setSelectedTab(selectedTabKey)
    }

    const tabs = [
        {
            id: 1,
            name: 'Orders',
            children: <Orders runtime={props.runtime} ims={props.ims} />
        },
        {
            id: 2,
            name: 'Products',
            children: <Products runtime={props.runtime} ims={props.ims} />
        }
    ]

    return (
        <Tabs
            aria-label="Commerce data"
            items={tabs}
            orientation="horizontal"
            isEmphasized={true}
            selectedKey={selectedTab}
            onSelectionChange={onSelectionTabChange}
            margin={10}
        >
            <TabList>{item => <Item key={item.id}>{item.name}</Item>}</TabList>
            <TabPanels>{item => <Item key={item.id}>{item.children}</Item>}</TabPanels>
        </Tabs>
    )
}
