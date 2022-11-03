import * as React from 'react';
import '../../assets/UserButtonGroup.css'

interface UserButtonProps {
    /**
     * Is this enough space to place this button group?
     */
    unfold?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Button contents
     */
    userName: string;
    /**
     * An button to control and show the status of microphone
     */
    micOn?: boolean;
    /**
     * Click handler for mic button
     */
    micClick?: () => void;
    /**
     * Optional click handler
     */
    onClick?: () => void;
  }
  
/**
 * A group of button about user information
 */
export const UserButtonGroup = ({
    unfold = true,
    backgroundColor = "#000000",
    userName = "Anonymous",
    micOn = false,
    micClick = () => {},
    ...props
  }: UserButtonProps) => {
    const isUnfold = unfold ? 'user-button-group--unfold' : 'user-button-group--folding';
    return (
      <div className={['user-button-group', isUnfold].join(' ')}>
          <div className="HUD__mic-btn" onClick={micClick} style={{ backgroundColor }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor"
              viewBox="0 0 256 256">
              {!micOn ? (
                <>
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
                </>
              ) : (
                <>
                    <rect width="256" height="256" fill="none"></rect>
                    <rect x="88" y="24" width="80" height="144" rx="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect>
                    <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                    <path d="M199.6,136a72.1,72.1,0,0,1-143.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                </>
              )}
          </svg></div>
          <div className="HUD__account"  style={{ backgroundColor }}>
              <div className="HUD__account-address">{userName}</div><svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="currentColor" viewBox="0 0 256 256" {...props}>
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
    );
  };
  