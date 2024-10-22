import classes from './Chip.module.scss';
import variables from '@/app/variables.module.scss';
import { MenuClose } from './Symbols';

interface ChipProps {
    title: string;
    onRemove: () => void;
}

const Chip: React.FC<ChipProps> = ({ title, onRemove }) => {
    return (
        <div className={classes.chip}>
            {title}
            <span
                aria-label={`Remove ${title} as a selection`}
                onClick={onRemove}
			>
                <MenuClose fill={variables.themeA4} />
            </span>
        </div>
    );
};

export default Chip;
