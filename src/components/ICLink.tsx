import classes from './ICLink.module.scss';

interface LinkProps {
    onClick?: () => void;
    linkText: string;
    href?: string;
    target?: string;
}

const ICLink: React.FC<LinkProps> = ({
    onClick,
    linkText,
    href = '#',
    target = '_blank',
}) => {
    return (
        <a
            className={classes.link}
            href={href}
            onClick={onClick}
            target={target}
		>
            {linkText}
        </a>
    );
};

export default ICLink;
