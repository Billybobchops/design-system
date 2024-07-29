import IconButton from '@/components/IconButton';

const IconButtonStory = () => {
    return (
        <>
            <IconButton
                disabled={false}
                size='large'
                text='Recent Open Invoices'
                variant='blue'
            />
            <IconButton
                disabled={true}
                size='large'
                text='Recent Open Invoices'
                variant='blue'
            />
            <IconButton
                disabled={false}
                size='small'
                text='View Invoice'
                variant='blue'
            />
            <IconButton
                disabled={true}
                size='small'
                text='View Invoice'
                variant='blue'
            />
            <IconButton
                disabled={false}
                size='large'
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={true}
                size='large'
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={false}
                size='small'
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={true}
                size='small'
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={false}
                size='large'
                text='Add Account'
                variant='green'
            />
            <IconButton
                disabled={true}
                size='large'
                text='Add Account'
                variant='green'
            />
            <IconButton
                disabled={false}
                size='small'
                text='Add Account'
                variant='green'
            />
            <IconButton
                disabled={true}
                size='small'
                text='Add Account'
                variant='green'
            />
        </>
    );
};

export default IconButtonStory;
