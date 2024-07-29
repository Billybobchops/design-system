import classes from './IconParagraph.module.scss';

interface IconParagraphProps {
    content: string;
    icon: React.ReactNode;
}

const IconParagraph: React.FC<IconParagraphProps> = ({ content, icon }) => {
    return (
        <div className={classes.grid}>
            <span aria-hidden="true">{icon}</span>
            <p>{content}</p>
        </div>
    );
};

export default IconParagraph;
