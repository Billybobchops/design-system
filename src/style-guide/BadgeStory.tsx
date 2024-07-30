import Badge from '@/components/Badge';

const BadgeStory = () => {
    return (
        <>
            <Badge content='Approved' variant='success' />
            <Badge content='Declined' variant='error' />
            <Badge content='Inactive' variant='warning' />
            <Badge content='#UTIL-10008-Fanny Adelaide' variant='default' />
        </>
    );
};

export default BadgeStory;
