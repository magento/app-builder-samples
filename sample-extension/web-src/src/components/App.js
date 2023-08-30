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
import React from 'react'
import { Provider, lightTheme } from '@adobe/react-spectrum'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { MainPage } from './MainPage'
import ExtensionRegistration from './ExtensionRegistration'
import { FirstMassAction } from './massActions/FirstMassAction'
import { AnotherMassAction } from './massActions/AnotherMassAction'

function App (props) {
  console.log('runtime object:', props.runtime)
  console.log('ims object:', props.ims)

  // use exc runtime event handlers
  // respond to configuration change events (e.g. user switches org)
  props.runtime.on('configuration', ({ imsOrg, imsToken }) => {
    console.log('configuration change', { imsOrg, imsToken })
  })
  // respond to history change events
  props.runtime.on('history', ({ type, path }) => {
    console.log('history change', { type, path })
  })

  return (
      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
          <BrowserRouter>
              <Provider theme={lightTheme} colorScheme={'light'}>
                  <Routes>
                      <Route index element={<MainPage runtime={props.runtime} ims={props.ims} />} />
                      <Route path={'index.html'} element={<ExtensionRegistration />} />
                      <Route path={'first-mass-action'} element={<FirstMassAction />} />
                      <Route path={'another-mass-action'} element={<AnotherMassAction />} />
                  </Routes>
              </Provider>
          </BrowserRouter>
      </ErrorBoundary>
  )

  // Methods

  // error handler on UI rendering failure
    function onError(e, componentStack) {}

    // component to show if UI fails rendering
    function fallbackComponent({ componentStack, error }) {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Something went wrong :(</h1>
                <pre>{componentStack + '\n' + error.message}</pre>
            </React.Fragment>
        )
    }
}

export default App
