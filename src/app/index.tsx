import React from 'react'
import { Map } from './map'
import { PageLayout } from '../components/page-layout'
import { Table } from './table'

export const App = () => {

  return (
    <PageLayout>
      <Table />
      <Map />
    </PageLayout>
  )

}
