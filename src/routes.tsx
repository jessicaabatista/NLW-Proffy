import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TheacherList from './pages/TheacherList';
import TheacherForm from './pages/TheacherForm';

function Routes(){
  return (
    <BrowserRouter>
      <Route path ="/" exact component={Landing} />
      <Route path ="/study" component={TheacherList} />
      <Route path ="/give-classes" component={TheacherForm} />
    </BrowserRouter>
  )
}

export default Routes;