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
              path: '#/another-mass-action',
              title: 'Mass Action test'
            },
            {
              actionId: `${extensionId}::mass-action`,
              label: 'Mass Action',
              path: '#/mass-action',
              title: 'Mass Action',
              displayIframe: false
            }
          ]
        },
        getGridColumns() {
          return {
            data:{
              meshId:'',
              apiKey: ''
            },
            properties:[
              {
                label: 'App Column',
                columnId: 'first_column',
                type: 'string',
                align: 'left'
              }
            ]
          }
        }
      },
      order: {
        getGridColumns() {
          return {
            data:{
              meshId:'',
              apiKey: ''
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
              path: '#/another-mass-action'
            },
            {
              actionId: `${extensionId}::update-order-mass-action`,
              label: 'Update Order Mass Action',
              path: 'api/v1/web/SampleExtension/update-orders',
              displayIframe: false
            }
          ]
        },
        getOrderViewButtons() {
          return [
            {
              buttonId: `${extensionId}::delete-order`,
              label: 'Delete',
              confirm: {
                message: 'Are you sure your want to proceed to delete order?'
              },
              path: '#/delete-order',
              level: 0,
              sortOrder: 80
            },
            {
              buttonId: `${extensionId}::create-return`,
              label: 'Create Return',
              path: '#/create-return'
            }
          ]
        }
      },
      customer: {
        getGridColumns() {
          return {
            data:{
              meshId:'',
              apiKey: ''
            },
            properties:[
              {
                label: 'Customer App Column',
                columnId: 'customer_app_column',
                type: 'string',
                align: 'left'
              }
            ]
          }
        }
      }
    }
  })
}
