import IconButton from '@/components/IconButton';
import { Chevron, NewWindow, Plus, Remove } from '@/components/Symbols';

const IconButtonStory = () => {
    return (
        <>
            <IconButton
                disabled={false}
				icon={<Chevron />}
                text='Recent Open Invoices'
                variant='blue'
            />
            <IconButton
                disabled={true}
				icon={<Chevron />}
                text='Recent Open Invoices'
                variant='blue'
            />
            <IconButton
                disabled={false}
				icon={<NewWindow />}
				iconPosition='start'
                text='View Invoice'
                variant='blue'
            />
            <IconButton
                disabled={true}
				icon={<NewWindow />}
				iconPosition='start'
                text='View Invoice'
                variant='blue'
            />
            <IconButton
                disabled={false}
				icon={<Remove />}
				iconPosition='start'
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={true}
				icon={<Remove />}
				iconPosition='start'
                text='Delete Email Address'
                variant='red'
            />
            <IconButton
                disabled={false}
				icon={<Plus />}
				iconPosition='start'
                text='Add Account'
                variant='green'
            />
            <IconButton
                disabled={true}
				icon={<Plus />}
				iconPosition='start'
                text='Add Account'
                variant='green'
            />
        </>
    );
};

export default IconButtonStory;
