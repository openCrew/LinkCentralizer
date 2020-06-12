import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { FiMenu } from 'react-icons/fi';

//Styles imports
import '../css/global.css';
import '../css/linker.css';
import '../css/adminmenu.css';

function LinkerAdmin() {

  const [image, setImage] = useState("data:image/jpeg;base64,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");
  const [title, setTitle] = useState('OPA');
  const [link, setLink] = useState('BEZPIX');

  const [color, setColor] = useState('#fff');
  const [showColorPicker, setColorPicker] = useState(false);

  return (
    <div id="conteiner-linker">
      <div id="menu">
        <input type="checkbox" id="check" />
        <label id="icone" for="check"><FiMenu size="2em" /></label>
        <div id="barra">
          <nav>
            <div id="background">
              <h3>Background</h3>
              <div className="conteiner-info">
                <SketchPicker color={ color } onChange={updatedColor => setColor(updatedColor.hex)}/>
              </div>
            </div>
            <div id="logo">
              <h3>Logo</h3>
              <div className="conteiner-info">

              </div>
            </div>
            <div id="title">
              <h3>Title</h3>
              <div className="conteiner-info">
                <input className="input-menu" type="text" placeholder="Write here your title"/>
              </div>
            </div>
            <div id="links">
              <h3>Links</h3>
              <div id="link" className="conteiner-info">
                <input className="input-menu" type="text" placeholder="Link name"/>
                <input className="input-menu" type="text" placeholder="Address"/>
              </div>
            </div>
            <div id="description">
              <h3>Description</h3>
              <div className="conteiner-info">
                <input className="input-menu" type="text" placeholder="Write here your description"/>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div id="linker">
        <profile>
          <div id="profile">
            <img src={image} alt="Logo"/>
            <h3>{title}</h3>
          </div>
        </profile>
        <linkcentral>
          <div className="linkcentral">
            <a href="https://google.com">
              <div className="link">
                <h3>SITE</h3>
              </div>
            </a>
            <a href="https://google.com">
              <div className="link">
                <h3>PROJETOS</h3>
              </div>
            </a>
            <a href="https://google.com">
              <div className="link">
                <h3>BLOG</h3>
              </div>
            </a>
            <a href="https://google.com">
              <div className="link">
                <h3>CONTATO</h3>
              </div>
            </a>
          </div>
        </linkcentral>
        <description>
          <div id="description">
            <h3>@bezpix_</h3>
          </div>
        </description>
      </div>
    </div>
  );

}

export default LinkerAdmin;
