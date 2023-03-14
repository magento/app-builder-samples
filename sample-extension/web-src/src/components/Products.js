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
    Content,
    Heading,
    IllustratedMessage,
    TableView,
    TableHeader,
    TableBody,
    Column,
    Row,
    Cell,
    View,
    Flex,
    ProgressCircle
} from '@adobe/react-spectrum'
import { useCommerceProducts } from '../hooks/useCommerceProducts'

export const Products = props => {
    const {isLoadingCommerceProducts, commerceProducts} = useCommerceProducts({...props, pageSize: 400, currentPage: 1})

    const productsColumns = [
        {name: 'SKU', uid: 'sku'},
        {name: 'Name', uid: 'name'},
        {name: 'Status', uid: 'status'},
        {name: 'Price', uid: 'price'},
        {name: 'Type ID', uid: 'type_id'},
        {name: 'Created At', uid: 'created_at'},
        {name: 'Updated At', uid: 'updated_at'}
    ]

    function renderEmptyState() {
        return (
            <IllustratedMessage>
                <Content>No data available</Content>
            </IllustratedMessage>
        )
    }

    return (

        <View>
            {isLoadingCommerceProducts ? (
                <Flex alignItems="center" justifyContent="center" height="100vh">
                    <ProgressCircle size="L" aria-label="Loading…" isIndeterminate/>
                </Flex>
            ) : (
                <View margin={10}>
                    <Heading level={1}>Fetched products from Adobe Commerce</Heading>
                    <TableView
                        overflowMode="wrap"
                        aria-label="products table"
                        flex
                        renderEmptyState={renderEmptyState}
                        minHeight="static-size-1000"
                    >
                        <TableHeader columns={productsColumns}>
                            {column => <Column key={column.uid}>{column.name}</Column>}
                        </TableHeader>
                        <TableBody items={commerceProducts}>
                            {product => (
                                <Row key={product['sku']}>{columnKey => <Cell>{product[columnKey]}</Cell>}</Row>
                            )}
                        </TableBody>
                    </TableView>
                </View>
            )}
        </View>
    )
}
