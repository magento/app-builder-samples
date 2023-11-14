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
import { MainPage } from './MainPage'

export default function ExtensionRegistration(props) {
  init().catch(console.error)
  return <MainPage runtime={props.runtime} ims={props.ims} />
}

const init = async () => {
  await register({
    id: extensionId,
    methods: {
      menu: {
        getItems() {
          return [
            {
              id: `${extensionId}::first`,
              title: 'First App on App Builder',
              parent: `${extensionId}::apps`,
              sortOrder: 1
            },
            {
              id: `${extensionId}::apps`,
              title: 'Apps',
              isSection: true
            }
          ]
        }
      },
      page: {
        getTitle() {
          return 'First App on App Builder'
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
              path: '#/first-mass-action',
              productSelectLimit: 1
            },
            {
              actionId: `${extensionId}::another-first-mass-action`,
              label: 'Another Mass Action',
              type: `${extensionId}.another-mass-action`,
              path: '#/another-mass-action'
            }
          ]
        }
      },
      order: {
        getGridColumns() {
          return {
            data:{
              meshId:'3e079986-e157-4325-8276-36a6a36b200f',
              apiKey: 'da1da6ab8f404db985a1a7f0137ed30d'
            },
            properties:[
              {
                label: 'First App Column',
                columnId: 'first_column',
                type: 'string',
                align: 'left'
              },
              {
                label: 'Second App Column',
                columnId: 'second_column',
                type: 'integer',
                align: 'left'
              },
              {
                label: 'Third App Column',
                columnId: 'third_column',
                type: 'date',
                align: 'left'
              }
            ]
          }
        },
        getMassActions() {
          return [
            {
              actionId: `${extensionId}::order-first-mass-action`,
              label: 'First App Mass Action',
              type: `${extensionId}.order-first-mass-action`,
              confirm: {
                title: 'First App Mass Action',
                message: 'Are you sure your want to proceed with First App Mass Action on selected orders?'
              },
              path: '#/first-mass-action',
              orderSelectLimit: 1
            },
            {
              actionId: `${extensionId}::second-mass-action`,
              label: 'Second Mass Action',
              type: `${extensionId}.second-mass-action`,
              path: '#/another-mass-action'
            }
          ]
        }
      }
    }
  })
}
