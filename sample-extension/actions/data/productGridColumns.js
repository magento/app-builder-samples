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

export async function main() {

    const productGridColumns = {
        "productGridColumns": {
            "Test Product 1": {
                "first_column": "value_1"
            },
            "Test Product 2": {
                "first_column": 1
            },
            "Test Product": {
                "first_column": "Test value"
            },
            "LUCKY-CAT-BLUE": {
                "first_column": "Lucky Cat"
            },
            "APOLLO-CSM-KIT": {
                "first_column": "Apollo"
            }
        }
    }

    return {
        statusCode: 200,
        body: productGridColumns,
    }
}
