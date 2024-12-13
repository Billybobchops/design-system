import ButtonPrimary from '@/components/ButtonPrimary';
import { Chevron, Search, Remove } from '@/components/Symbols';

const ButtonPrimaryStory = () => {
    return (
        <>
            <ButtonPrimary
                disabled={false}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
            />
            <ButtonPrimary
                disabled={false}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
                variant='green'
            />
            <ButtonPrimary
                disabled={true}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
            />
			<ButtonPrimary
                disabled={false}
                icon={<Chevron />}
                text='Register Now'
            />
			<ButtonPrimary
                disabled={true}
                icon={<Chevron />}
                text='Register Now'
            />
			<ButtonPrimary
                disabled={false}
                icon={<Remove />}
				iconPosition={'start'}
                text='Remove Email Address'
				variant='red'
            />
			<ButtonPrimary
                disabled={true}
                icon={<Remove />}
				iconPosition={'start'}
                text='Remove Email Address'
				variant='red'
            />
        </>
    );
};

export default ButtonPrimaryStory;
