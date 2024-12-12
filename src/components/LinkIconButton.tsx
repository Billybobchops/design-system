import React from 'react';
import { useState } from 'react';
import classes from './LinkIconButton.module.scss';
import variables from '@/app/variables.module.scss';

interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
	icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    text: string;
    variant?: 'blue' | 'green' | 'red';
}

const IconButton: React.FC<IconButtonProps> = ({
    clickHandler,
    disabled = false,
	icon,
    iconPosition = 'end',
    text,
    variant = 'blue',
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const getFillColor = (variant: string, disabled: boolean) => {
        if (disabled) {
            return { fill: variables.utilityNeutral60, hoverFill: variables.utilityNeutral60 };
        }
        switch (variant) {
            case 'blue':
                return { fill: variables.themeA4, hoverFill: variables.themeA3 };
            case 'green':
                return { fill: variables.utilityGreen70, hoverFill: variables.utilityGreen80 };
            case 'red':
                return { fill: variables.utilityRed50, hoverFill: variables.utilityRed70 };
            default:
                return { fill: variables.utilityNeutral60, hoverFill: variables.utilityNeutral60 };
        }
    };

    const fillColor = isHovered
        ? getFillColor(variant, disabled).hoverFill
        : getFillColor(variant, disabled).fill;

    const buttonClasses = `${classes.button} ${disabled ? classes.disabled : classes[variant]}`;

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onClick={clickHandler}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
		>
			{icon && iconPosition === 'start' && (
				<span aria-hidden='true' className={classes.iconStart}>
					{React.cloneElement(icon as React.ReactElement, { fill: fillColor, })}
				</span>
			)}
			<span>{text}</span>
			{icon && iconPosition === 'end' && (
				<span aria-hidden='true' className={classes.iconEnd}>
					{React.cloneElement(icon as React.ReactElement, { fill: fillColor, })}
				</span>
			)}
        </button>
    );
};

export default IconButton;
