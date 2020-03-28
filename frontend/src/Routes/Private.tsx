import React, {FC} from 'react'

import {Route, Redirect} from 'react-router-dom'

interface T{
  component: FC;
  path: string;
}

function Private({component,path}:T){
  const ongId = localStorage.getItem('ongId')

  if(ongId){
    return <Route path={path} component={component}/>
  }
  return <Redirect to="/" />;
}

export default Private
