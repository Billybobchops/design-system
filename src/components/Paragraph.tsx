import classes from './Paragraph.module.scss';

interface ParagraphProps {
    content: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
    return <p className={classes.paragraph}>{content}</p>;
};

export default Paragraph;
