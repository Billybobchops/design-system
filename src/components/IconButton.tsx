import { useState } from 'react';
import classes from './IconButton.module.scss';
import variables from '@/app/variables.module.scss';
import { Chevron, NewWindow, Remove, Plus } from './Symbols';

interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    size: 'small' | 'large';
    text: string;
    variant: 'blue' | 'green' | 'red';
}

const IconButton: React.FC<IconButtonProps> = ({
    clickHandler,
    disabled = false,
    size,
    text,
    variant,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const getFillColor = (variant: string, disabled: boolean) => {
        if (disabled) {
            return { fill: variables.icNeutral60, hoverFill: variables.icNeutral60 };
        }
        switch (variant) {
            case 'blue':
                return { fill: variables.icBlue70, hoverFill: variables.icBlue50 };
            case 'green':
                return { fill: variables.icGreen70, hoverFill: variables.icGreen80 };
            case 'red':
                return { fill: variables.icRed50, hoverFill: variables.icRed70 };
            default:
                return { fill: variables.icNeutral60, hoverFill: variables.icNeutral60 };
        }
    };

    const fillColor = isHovered
        ? getFillColor(variant, disabled).hoverFill
        : getFillColor(variant, disabled).fill;

    const buttonClasses = `${classes.button} ${size === 'small' ? classes.small : ''} ${disabled ? classes.disabled : classes[variant]}`;

    let firstIcon = null;
    if (variant === 'blue' && size === 'small') {
        firstIcon = (
            <span aria-hidden="true">
                <NewWindow fill={fillColor} />
            </span>
        );
    } else if (variant === 'red') {
        firstIcon = (
            <span aria-hidden="true">
                <Remove fill={fillColor} />
            </span>
        );
    } else if (variant === 'green') {
        firstIcon = (
            <span aria-hidden="true">
                <Plus fill={fillColor} />
            </span>
        );
    }

    let secondIcon = null;
    if (variant === 'blue' && size === 'large') {
        secondIcon = (
            <span aria-hidden="true">
                <Chevron fill={fillColor} />
            </span>
        );
    }

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onBlur={() => setIsHovered(false)}
            onClick={clickHandler}
            onFocus={() => setIsHovered(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {firstIcon}
            {text}
            {secondIcon}
        </button>
    );
};

export default IconButton;
