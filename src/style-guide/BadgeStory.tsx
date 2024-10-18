import Badge from '@/components/Badge';

const BadgeStory = () => {
    return (
        <>
            <Badge content='Approved' variant='success' />
            <Badge content='Declined' variant='error' />
            <Badge content='Inactive' variant='warning' />
            <Badge content='Neutral' variant='neutral' />
            <Badge content='Beta' variant='beta' />
        </>
    );
};

export default BadgeStory;
