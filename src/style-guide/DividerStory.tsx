import Divider from '@/components/Divider';

const DividerStory = () => {
    return (
        <>
            <p>This is a dark divider!</p>
            <Divider isDark={true} />
            <p>This is a light divider!</p>
            <Divider isDark={false} />
        </>
    );
};

export default DividerStory;
