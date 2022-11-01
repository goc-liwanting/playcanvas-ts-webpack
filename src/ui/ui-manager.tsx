import ReactDOM from 'react-dom';
import * as React from 'react';
import Main from './components/Main';
import UI from './components/UI'

export class UIManager {
  reactEntryPoint:HTMLElement;

  constructor() {
    this.reactEntryPoint = document.createElement('div');
    this.reactEntryPoint.style.position = 'absolute';
    this.reactEntryPoint.style.width = '100vw';
    this.reactEntryPoint.style.height = '100vh';
    this.reactEntryPoint.style.pointerEvents = 'none';
    this.reactEntryPoint.style.top = '0';
    this.reactEntryPoint.style.left = '0';
    this.reactEntryPoint.id = 'root';
    this.reactEntryPoint.style.zIndex = '999';
    document.body.appendChild(this.reactEntryPoint);
    this.init();
  }

  init() {
    ReactDOM.render(<Main/>, this.reactEntryPoint);
    ReactDOM.render(<UI/>, this.reactEntryPoint);
  }
}

export const uiManagerInstance = new UIManager();
