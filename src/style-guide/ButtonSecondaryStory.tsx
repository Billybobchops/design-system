import ButtonSecondary from '@/components/ButtonSecondary';
import { Chevron, Search, Remove } from '@/components/Symbols';

const ButtonPrimaryStory = () => {
    return (
        <>
            <ButtonSecondary
                disabled={false}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
            />
            <ButtonSecondary
                disabled={false}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
                variant='green'
            />
            <ButtonSecondary
                disabled={true}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
            />
			<ButtonSecondary
                disabled={false}
                icon={<Chevron />}
                text='Register Now'
            />
			<ButtonSecondary
                disabled={true}
                icon={<Chevron />}
                text='Register Now'
            />
			<ButtonSecondary
                disabled={false}
                icon={<Remove />}
				iconPosition={'start'}
                text='Remove Email Address'
				variant='red'
            />
			<ButtonSecondary
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
``