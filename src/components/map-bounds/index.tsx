import { memo, useEffect, useRef } from 'react'
import { useMap } from 'react-leaflet'
import { LatLngBoundsExpression } from 'leaflet'
import { MapBoundsProps } from './interface'

export const MapBounds = memo((props: MapBoundsProps) => {
    const { bounds } = props
    const map = useMap()
    const prevBounds = useRef<LatLngBoundsExpression>(bounds)

    useEffect(() => {
        if (prevBounds.current !== bounds) {
            map.fitBounds(bounds)
            prevBounds.current = bounds
        }
    }, [bounds, map])

    return null
})
