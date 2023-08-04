export const fetchPolyline = async (baseUrl: string, method: string, points: number[][]) => {
    try {
        const polylineURL = `${baseUrl}/${method}/${points.join(';')}?geometries=geojson&steps=false`
        const response = await fetch(polylineURL)
        const data = await response.json()
        if (!response.ok || !data) {
            throw new Error('Ошибка при получении данных');
        }
        const polylineCoordinates = await data.routes[0].geometry.coordinates
        return polylineCoordinates
    } catch (error) {
        console.warn(error)
    }
}
