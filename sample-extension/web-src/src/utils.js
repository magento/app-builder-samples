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
export async function callAction(props, action, operation, body = {}) {
  const actions = require('./config.json')
  const res = await fetch(actions[action], {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-gw-ims-org-id': props.ims.org,
      'authorization': `Bearer ${props.ims.token}`
    },
    body: JSON.stringify({
      operation,
      ...body
    })
  })

  return await res.json()
}


