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
    ComboBox,
    Heading, Item, View
} from '@adobe/react-spectrum'
import { useLocation } from 'react-router-dom'
export const AnotherMassAction = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const productIds = queryParams.get('productIds').split(',')
    let items = []
    productIds.forEach((id) => {
        items.push({id: id})
    })

    return (
        <View margin={10}>
            <Heading level={1}>Selected Products Ids</Heading>
            <ComboBox
                defaultItems={items}
            >
                {(item) => <Item key={item.id}>{item.id}</Item>}
            </ComboBox>
        </View>
    )
}
