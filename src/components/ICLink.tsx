import classes from './ICLink.module.scss';

interface LinkProps {
	children: React.ReactNode;	
    onClick?: () => void;
    href?: string;
    target?: string;
	variant?: 'blue' | 'grey';
}

const ICLink: React.FC<LinkProps> = ({
	children,
    onClick,
    href = '#',
    target = '_blank',
	variant = 'blue'
}) => {
    return (
        <a
			className={`${classes.link} ${classes[variant] || ''}`}
            href={href}
            onClick={onClick}
            target={target}
		>
            {children}
        </a>
    );
};

export default ICLink;
