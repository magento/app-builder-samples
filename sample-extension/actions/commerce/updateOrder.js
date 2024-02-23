/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {Core} from "@adobe/aio-sdk";
import {checkMissingRequestInputs, errorResponse} from "../utils";

export async function main(params) {
    const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' });

    try {
        const requiredParams = [];
        const requiredHeaders = [];
        const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders);

        if (errorMessage) {
            return errorResponse(400, errorMessage, logger);
        }

        logger.error("response inside update orders");

        return {
            statusCode: 200,
            body: {
                selectedIds: params.selectedIds,
            }
        }
    } catch (error) {
        logger.error("Cannot complete action: ", error);
        return errorResponse(500, error, logger);
    }
}

exports.main = main
