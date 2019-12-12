import React, { useCallback }  from 'react'
//import { useDispatch } from 'react-redux'

import { Application as ApplicationComponent } from "../../components/layouts/Application"

export const Application = () => {
//    const dispatch = useDispatch()

    const throwNotFoundError = useCallback(() => console.log('catch 404'), [])

    return <ApplicationComponent onRoutingError={throwNotFoundError} />
}
