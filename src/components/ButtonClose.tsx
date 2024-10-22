import classes from './ButtonClose.module.scss';
import VisuallyHidden from './VisuallyHidden';
import { MenuClose, MenuCloseLarge } from './Symbols';

interface ButtonCloseProps {
    ariaHidden: boolean;
    accessibleName: string;
    symbolColor: string;
    clickHandler: () => void;
    variant: 'small' | 'large';
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
    ariaHidden = true,
    accessibleName,
    symbolColor,
    clickHandler,
    variant = 'small',
}) => {
    return (
        <button className={classes.buttonClose} onClick={clickHandler}>
            <span aria-hidden={ariaHidden}>
                {variant === 'small' ? (<MenuClose fill={symbolColor} />) : (<MenuCloseLarge fill={symbolColor} />)}
            </span>
            <VisuallyHidden>{accessibleName}</VisuallyHidden>
        </button>
    );
};

export default ButtonClose;
