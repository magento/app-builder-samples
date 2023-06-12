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
import { register } from '@adobe/uix-guest';
import { extensionId } from './Constants';

export default function ExtensionRegistration() {
  init().catch(console.error);
  return <></>;
}

const init = async () => {
  await register({
    id: extensionId,
    debug: false,
    methods: {
      extension: {
        getId() {
          return 'commerce-first-app';
        }
      },
      menu: {
        getItems() {
          return [
            {
              id: 'ext_page',
              title: 'First App on App Builder',
              action: `uixpage/index/index/uix-ext/${extensionId}`,
              parent: 'Magento_Backend::marketing',
            },
          ];
        },
      },
      page: {
        getTitle() {
          return 'Adobe Commerce First App on App Builder';
        },
      },
    },
  });
};
