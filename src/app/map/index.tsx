import React, { memo } from 'react'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import { zoom } from '../../utils/constants'
import { useAppSelector } from '../../hooks/typed-selector'
import L, { LatLngBounds, LatLngExpression, LatLngTuple } from 'leaflet'
import { MapBounds } from '../../components/map-bounds'

export const Map = memo(() => {
  const routes = useAppSelector((state) => state.routes);
  const selectedRoute = useAppSelector((state) => state.selectedRoute)
  const polyline = useAppSelector((state) => state.polyline)

  const purpleOptions = { color: '#646cff' }
  const center: LatLngExpression | undefined = [59.83567701, 30.38064206]
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      attributionControl={false}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      easeLinearity={0.35}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      {selectedRoute !== null && routes[selectedRoute].points.map((point, index) => {
        const tuple = point as LatLngTuple
        return <Marker position={tuple} key={index} />
      }
      )}
      {selectedRoute !== null && <Polyline pathOptions={purpleOptions} positions={polyline} />}
      {selectedRoute !== null && (
        <MapBounds
          bounds={
            (routes[selectedRoute].points as LatLngExpression[]).reduce(
              (bounds: LatLngBounds, point: LatLngExpression) => bounds.extend(point),
              L.latLngBounds(routes[selectedRoute].points[0] as LatLngTuple, routes[selectedRoute].points[0] as LatLngTuple).extend(routes[selectedRoute].points[0] as LatLngTuple)
            )
          }
        />
      )}
    </MapContainer>
  )

})
