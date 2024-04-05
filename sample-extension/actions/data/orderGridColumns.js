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

    const orderGridColumns = {
        "orderGridColumns": {
            "000000001": {
                "first_column": "value_1",
                "second_column": 1,
                "third_column": "2030-12-01T23:25:42+11:00"
            },
            "000000002": {
                "first_column": 1,
                "second_column": "test",
                "third_column": "2011-10-02T23:25:42+00:00"
            },
            "000000003": {
                "first_column": "value_3",
                "second_column": 3,
                "third_column": "2030-14-01T23:25:42+11:00"
            },
            "000000004": {
                "first_column": "value_1",
                "second_column": 1,
                "third_column": "2011-10-02T23:25:42+00:00"
            }
        }
    }

    return {
        statusCode: 200,
        body: orderGridColumns,
    }
}
