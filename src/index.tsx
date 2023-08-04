import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import './index.css'
import { App } from './app'
import { store } from './store/store'

const root = createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
)
