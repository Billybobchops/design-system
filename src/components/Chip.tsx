import classes from './Chip.module.scss';
import { useState } from 'react';
import variables from '@/app/variables.module.scss';
import { MenuClose } from './Symbols';
import VisuallyHidden from './VisuallyHidden';

interface ChipProps {
    title: string;
    onRemove: () => void;
}

const Chip: React.FC<ChipProps> = ({ title, onRemove }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
		<button
			className={`${classes.chip} ${isHovered ? classes.chipHover : ''}`}
			onClick={onRemove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span className={classes.title}>{title}</span>
			<span aria-hidden='true' className={`${classes.icon} ${isHovered ? classes.iconHover : ''}`}>
				<MenuClose fill={isHovered ? variables.utilityNeutral0 : variables.themeA4} />
			</span>
			<VisuallyHidden>{`Remove ${title} as a selection`}</VisuallyHidden>
		</button>
    );
};

export default Chip;
