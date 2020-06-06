import React from 'react';

//Styles imported
import './global.css';
import './App.css';
import './profile.css';
import './linkcentral.css';
import './description.css';

function App() {

  return (
    <div id="app">
      <profile>
        <div id="profile">
          <h3>Loja Fuzue</h3>
        </div>
      </profile>
      <lincentral>
        <div>
          <div className="linkcentral">
            <h3>SITE</h3>
          </div>
          <div className="linkcentral">
            <h3>PROJETOS</h3>
          </div>
          <div className="linkcentral">
            <h3>BLOG</h3>
          </div>
          <div className="linkcentral">
            <h3>CONTATO</h3>
          </div>
        </div>
      </lincentral>
      <description>
        <div id="description">
          <h3>@lojafuzue</h3>
        </div>
      </description>
    </div>
  );

}

export default App;
