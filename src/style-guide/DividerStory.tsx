import Divider from '@/components/Divider';
import Paragraph from '@/components/Paragraph';

const DividerStory = () => {
    return (
        <>
            <Paragraph>This is a dark divider!</Paragraph>
            <Divider isDark={true} />
            <Paragraph>This is a light divider!</Paragraph>
            <Divider isDark={false} />
        </>
    );
};

export default DividerStory;
