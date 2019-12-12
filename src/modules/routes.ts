import { RouteProps } from 'react-router'

import { Dashboard } from '../containers/Dashboard'

type Route = {
    path: string
    component: RouteProps['component']
}

const route = (routePath: Route['path'], component: Route['component']) => ({
    path: routePath,
    component,
})

export const routes = {
    root: route("/index.html", Dashboard),
}
