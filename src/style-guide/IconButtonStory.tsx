import IconButton from '@/components/IconButton';

const IconButtonStory = () => {
    return (
        <>
            <IconButton
                disabled={false}
                text='Recent Open Invoices'
                variant='blue'
            />
            <IconButton
                disabled={true}
                text='Recent Open Invoices'
                variant='blue'
            />
            <IconButton
                disabled={false}
                text='View Invoice'
				newWindowIcon={true}
                variant='blue'
            />
            <IconButton
                disabled={true}
                text='View Invoice'
				newWindowIcon={true}
                variant='blue'
            />
            <IconButton
                disabled={false}
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={true}
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={false}
                text='Add Account'
                variant='green'
            />
            <IconButton
                disabled={true}
                text='Add Account'
                variant='green'
            />
        </>
    );
};

export default IconButtonStory;
