import React from 'react';
import PageHeader from '../../components/PageHeader';
import TheacherItem from '../../components/TheacherItem';

import './styles.css';

function TheacherList(){
  return (
    <div id="page-theacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-theachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria: </label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana: </label>
            <input type="text" id="week-day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora: </label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TheacherItem />
      </main>
    </div>
  );
}

export default TheacherList;