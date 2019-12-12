import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { routes } from "../../../modules/routes"

type Props = {
    onRoutingError: () => void
}

export const Application: React.FC<Props> = ({ onRoutingError }) => {
    return (
        <>
            <GlobalStyle />
            <Switch>
                <Route exact path={routes.root.path} component={routes.root.component} />
                <Route path="*" render={() => {
                    onRoutingError()
                    return null
                 }}/>
            </Switch>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
  ${reset}
`
