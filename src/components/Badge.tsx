import classes from './Badge.module.scss';

interface BadgeProps {
    content: string;
    hasMargin?: boolean;
    variant: 'default' | 'error' | 'success' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({
    content,
    hasMargin = true,
    variant,
}) => {
    return (
        <div className={`${classes.badge} ${classes[variant]} ${hasMargin ? classes.hasMargin : ''}`}>
            {content}
        </div>
    );
};

export default Badge;
