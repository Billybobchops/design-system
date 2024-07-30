import classes from './ICLink.module.scss';

interface LinkProps {
	children: React.ReactNode;	
    onClick?: () => void;
    href?: string;
    target?: string;
}

const ICLink: React.FC<LinkProps> = ({
	children,
    onClick,
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
            {children}
        </a>
    );
};

export default ICLink;
