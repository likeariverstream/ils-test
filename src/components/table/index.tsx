import React, { memo } from 'react'
import { Table } from 'antd'
import { StyledTableProps } from './interface'
import './style.css'

export const StyledTable = memo((props: StyledTableProps) => {
    const { columns, dataSource } = props
    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
        />
    )
})
