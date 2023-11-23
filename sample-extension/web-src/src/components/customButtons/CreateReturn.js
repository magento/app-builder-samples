import {attach} from "@adobe/uix-guest";
import {extensionId} from "../Constants";
import {useState} from "react";
import {Button, Flex, Heading, ProgressCircle, View} from "@adobe/react-spectrum";

export const CreateReturn = () => {

    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [connection, setConnection] = useState(undefined)

    const getGuestConnection = async () => {
        return await attach({
            id: extensionId,
        })
    }

    getGuestConnection().then((guestConnection) => {
        setConnection(guestConnection)
        const urlString = window.location.href
        const queryString = urlString.split('?')[1]
        const searchParams = new URLSearchParams(queryString)
        setOrderId(searchParams.get('orderId'))
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
                    <Heading level={1}>Request return </Heading>
                    orderId is: {orderId}
                    <Button variant={"primary"} marginStart={10} onPress={async () => { await connection.host.field.close()}}>
                        Done
                    </Button>
                </View>
            )}
        </View>
    )
}
