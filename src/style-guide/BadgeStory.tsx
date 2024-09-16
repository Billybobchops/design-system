import Badge from '@/components/Badge';

const BadgeStory = () => {
    return (
        <>
            <Badge content='Approved' variant='success' />
            <Badge content='Declined' variant='error' />
            <Badge content='Inactive' variant='warning' />
        </>
    );
};

export default BadgeStory;
