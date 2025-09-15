import type { Activity } from "../types"

type ActivitiesListProps = {
    activities: Activity[]
}

function ActivityList({activities}: ActivitiesListProps) {
    console.log(activities)
  return (
    <>
        <h2 className='text-4xl font-bold text-slate-600 text-center'>
            Comida y Actividades
        </h2>
    </>
  )
}

export default ActivityList