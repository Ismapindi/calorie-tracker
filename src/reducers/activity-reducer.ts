import type { Activity } from "../types"

export type ActivityActions = 
    { type: "save-activity", payload: { newActivity: Activity } }

type ActivityState = {
    activites: Activity[]
}

export const initialState: ActivityState = {
    activites: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === "save-activity") {
        // Este código maneja la lógica para actualizar el state
        console.log("Desde el type de save-activity")
    }
    return state
}