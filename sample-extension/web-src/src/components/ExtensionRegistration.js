/*
 * Copyright 2022 Adobe
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
import { register } from '@adobe/uix-guest'
import { extensionId } from './Constants'

export default function ExtensionRegistration() {
  init().catch(console.error);
  return <></>;
}

const init = async () => {
  await register({
    id: extensionId,
    methods: {
      menu: {
        getItems() {
          return [
            {
              id: `${extensionId}`,
              title: 'First App on App Builder',
              parent: 'Magento_Backend::marketing'
            }
          ]
        }
      },
      page: {
        getTitle() {
          return 'Adobe Commerce First App on App Builder'
        }
      },
      product: {
        getMassActions() {
          return [
            {
              actionId: `${extensionId}::first-mass-action`,
              label: 'First App Mass Action',
              type: `${extensionId}.first-mass-action`,
              confirm: {
                title: 'First App Mass Action',
                message: 'Are you sure your want to proceed with First App Mass Action on selected products?'
              },
              path: 'first-mass-action'
            },
            {
              actionId: `${extensionId}::another-first-mass-action`,
              label: 'Another Mass Action',
              type: `${extensionId}.another-mass-action`,
              path: 'another-mass-action'
            }
          ]
        }
      }
    }
  })
}
