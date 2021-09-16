import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+'
}

function Routes() {
    return (
        <div>
            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR}/>}/>
                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR_PLUS}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
