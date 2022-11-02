import { type } from 'playcanvas';
import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import Main from './Main';
import {initialState, UIStateType, reducer} from './UIReducer'

const GlobalStyle = createGlobalStyle`
html {
    font-family: NeueHaasGroteskDP, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    background: rgb(0, 0, 0);
    color: white;
    -webkit-font-smoothing: antialiased;
}

img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
}
`

const MainMenu_box = styled.div`
    background: rgb(15, 15, 19);
    width: 340px;
    height: 500px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
    pointer-events: auto;
`

function HUD_topleft({handleClick}: {handleClick: () => void}){
    return(
        <div className="HUD__topleft">
            <div className="HUD__btns">
                <div className="HUD__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="88" cy="108" r="52" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"></circle>
                        <path d="M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <path d="M16,197.4a88,88,0,0,1,144,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <path d="M169.5,160a87.9,87.9,0,0,1,72,37.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="HUD__btn" onClick={() => handleClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <line x1="96" y1="112" x2="160" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                        <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function HUD_topright({handleClick} : {handleClick: () => void}){
    return(
        <div className="HUD__topright">
            <div className="HUD__mic-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <path d="M176.4,181.3A72,72,0,0,1,56.4,136" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16"></path>
                <path d="M154.9,157.6A39.6,39.6,0,0,1,128,168h0a40,40,0,0,1-40-40V84" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16"></line>
                <path d="M94,43a39.8,39.8,0,0,1,34-19h0a40,40,0,0,1,40,40v60.4" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                <path d="M199.6,136a72.4,72.4,0,0,1-4.5,18.2" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16"></path>
            </svg></div>
            <div className="HUD__account">
                <div className="HUD__account-address">Anonymous</div><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="currentColor" viewBox="0 0 256 256" onClick={() => handleClick()}>
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="16"></circle>
                    <path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
        </div>
    )
}

function HUD_chat({chatState} : {chatState:UIStateType}){
    return(
        <div className="HUD__chat" style={{display: ((chatState == "Both") || (chatState == "OnlyChat")) ? 'block' : 'none'}}>
            <div className="HUD__chat-messages">
                <div className="HUD__chat-messages-inner">
                    <div className="HUD__chat-message"><span className="HUD__chat-message"></span></div>
                </div>
            </div>
            <div className="HUD__chat-field"><input type="text" name="message" autoComplete="off" readOnly={true}
                placeholder="Send a message..." value="" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                        d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16">
                    </path>
                    <line x1="72" y1="128" x2="136" y2="128" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="16"></line>
                </svg></div>
        </div>
    )
}

function MainMenu({menuState} : {menuState:UIStateType}){ 
    return(
        <div className="MainMenu css-1cbinnv" >
            <MainMenu_box style={{display: ((menuState == "Both") || (menuState == "OnlyUser")) ? 'block' : 'none'}}/>
        </div>
    )
}

function HUD(){
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return(
            <div className="HUD css-v9oua8">
                <HUD_topleft handleClick={() => dispatch("LeftTopClick")}/>
                <HUD_topright handleClick={() => dispatch("RightTopClick")}/>
                <HUD_chat chatState={state.curState}/>
                <MainMenu menuState={state.curState}/>
            </div>
    )
}

export default function UI() {
  return (
    <div>
        <GlobalStyle/>
        <HUD/>
    </div>
  );
}