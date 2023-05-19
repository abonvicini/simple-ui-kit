import React, { ReactNode } from 'react'
import styles from '@components/Buttons/BaseButton/BaseButton.styles';


export type BaseButtonProps = {
  children: ReactNode | string
  onClick: Function;
  className?: string;
  isRounded?: boolean;
  tabIndex?: number;
  ariaLabel?: string;
  disabled?: boolean;
  size: 'small' | 'medium'| 'large'
}

const BaseButton = (props: BaseButtonProps) => {

    let className;

    if (props.className){
        className = styles.button + ' ' + props.className
    } else {
        className = styles.button
    }

    if (props.isRounded) {
        className = className + ' ' + styles.rounded
    }

    if (props.size) {
      className = className + ' ' + styles[props.size];
  } else {
      className = className + ' ' + styles.medium
  }

    return (
        <button
          type="button"
          className={className}
          tabIndex={props.tabIndex}
          aria-label={props.ariaLabel}
          onClick={() => props.onClick()}
          disabled={props.disabled}
          
        >
          {props.children} 
        </button>
      );
    };

export default BaseButton