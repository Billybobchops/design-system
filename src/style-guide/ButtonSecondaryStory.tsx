import ButtonSecondary from '@/components/ButtonSecondary';

const ButtonSecondaryStory = () => {
    return (
        <>
            <ButtonSecondary
                disabled={false}
                text='Cancel Payment'
            />
            <ButtonSecondary
                disabled={false}
                text='Add Account'
                variant='green'
            />
            <ButtonSecondary
                disabled={false}
                text='Remove Email Address'
                variant='red'
            />
            <ButtonSecondary 
				disabled={true}
				text='Cancel Payment'
			/>
        </>
    );
};

export default ButtonSecondaryStory;
