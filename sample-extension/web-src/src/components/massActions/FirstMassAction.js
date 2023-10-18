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
    Flex,
    Heading, Item, ListView, ProgressCircle, View
} from '@adobe/react-spectrum'
import { attach } from '@adobe/uix-guest'
import { extensionId } from '../constants'
import { useState } from 'react'

export const FirstMassAction = () => {
    const [items] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGuestConnection = async () => {
        return await attach({
            id: extensionId
        })
    }

    getGuestConnection().then((guestConnection) => {
        guestConnection.sharedContext.get('selectedIds').forEach((id) => {
            items.push({id: id})
        })
        setIsLoading(false)
    })

    return (
        <View>
            {isLoading ? (
                <Flex alignItems="center" justifyContent="center" height="100vh">
                    <ProgressCircle size="L" aria-label="Loading…" isIndeterminate />
                </Flex>
            ) : (
                <View margin={10}>
                    <Heading level={1}>Selected Products Ids</Heading>
                    <ListView
                        items={items}
                    >
                        {(item) => <Item key={item.id}>{item.id}</Item>}
                    </ListView>
                </View>
            )}
        </View>
    )
}
