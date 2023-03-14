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
import { useEffect, useState } from 'react'
import { callAction } from '../utils'

export const useCommerceProducts = props => {
    const [isLoadingCommerceProducts, setIsLoadingCommerceProducts] = useState(true)
    const [commerceProducts, setCommerceProducts] = useState([])

    const fetchCommerceProducts = async () => {
        const commerceProductsResponse = await callAction(
            props,
            'commerce-rest-get',
            `products?searchCriteria[pageSize]=${props.pageSize}&searchCriteria[currentPage]=${props.currentPage}`
        )
        console.log(commerceProductsResponse)
        setCommerceProducts(commerceProductsResponse.error ? [] : commerceProductsResponse.items)
    }

    useEffect(() => {
        fetchCommerceProducts().then(() => setIsLoadingCommerceProducts(false))
    }, [])

    return { isLoadingCommerceProducts, commerceProducts }
}
