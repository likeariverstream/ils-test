import React, { memo, useCallback } from 'react'
import { useAppSelector } from '../../hooks/typed-selector'
import { useAppDispatch } from '../../hooks/typed-dispatch'
import { setSelectedRoute } from '../../store/slices'
import { StyledTable } from '../../components/table'

export const Table = memo(() => {
    const routes = useAppSelector((state) => state.routes)
    const selectedRoute = useAppSelector((state) => state.selectedRoute)
    const dispatch = useAppDispatch()
    const handleRowClick = useCallback((key: number) => {
        dispatch(setSelectedRoute(key))
    }, [dispatch])

    const columns = [
        {
            title: 'Маршрут',
            dataIndex: 'route',
            key: 'route',
            render: (text: string, record: { key: number, route: string }) => (
                <span
                    className={record.key === selectedRoute ? 'selected-row' : 'table-row'}
                    onClick={() => handleRowClick(record.key)}
                >
                    {text}
                </span>
            )
        }
    ]

    const dataSource = routes.map((_route: { points: number[][] }, index: number) => {
        return { key: index, route: `Маршрут №${index + 1}` }
    })

    return (
        <StyledTable
            columns={columns}
            dataSource={dataSource}
        />
    )

})
