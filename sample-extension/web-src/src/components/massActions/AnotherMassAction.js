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
    Button,
    ComboBox, Flex,
    Heading, Item, ProgressCircle, View
} from '@adobe/react-spectrum'
import { useState} from 'react'
import { attach } from '@adobe/uix-guest'
import { extensionId } from '../Constants'
export const AnotherMassAction = () => {

    const [items] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [connection, setConnection] = useState(undefined)

    const getGuestConnection = async () => {
        return await attach({
            id: extensionId
        })
    }

    getGuestConnection().then((guestConnection) => {
        setConnection(guestConnection)
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
                    <Heading level={1}>Selected Ids</Heading>
                    <ComboBox
                        defaultItems={items}
                    >
                        {(item) => <Item key={item.id}>{item.id}</Item>}
                    </ComboBox>
                    <Button variant={"primary"} marginStart={10} onPress={async () => { await connection.host.field.close() }}>
                        Done
                    </Button>
                </View>
            )}
        </View>
    )
}
