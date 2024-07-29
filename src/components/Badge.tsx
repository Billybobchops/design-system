import classes from "./Badge.module.scss";

interface BadgeProps {
	content: string;
	variant: "default" | "error" | "success";
}

const Badge: React.FC<BadgeProps> = ({ content, variant }) => {
	return (
		<div className={`${classes.badge} ${classes[variant]}`}>{content}</div>
	);
};

export default Badge;