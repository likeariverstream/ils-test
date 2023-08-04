import { createSlice } from "@reduxjs/toolkit";
import { routes } from "../utils/routes";

const initialState = {
    routes: routes,
    selectedRoute: null,
    polyline: []
}

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setSelectedRoute(state, action) {
            state.selectedRoute = action.payload
        },
        setPolyline(state, action) {
            state.polyline = action.payload
        },
    }
})

export const {
    setSelectedRoute,
    setPolyline
} = routesSlice.actions

export const routesReducer = routesSlice.reducer
