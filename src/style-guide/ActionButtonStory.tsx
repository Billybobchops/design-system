import ActionButton from '@/components/ActionButton';

const ActionButtonStory = () => {
    return (
        <>
            <ActionButton
                disabled={false}
				hasSymbol={true}
                text='Remove Email Address'
                variant='danger'
            />
            <ActionButton
				disabled={true}
				hasSymbol={true}
				text='Remove Email Address'
			/>
            <ActionButton
                disabled={false}
                text='Process Payment $4,428.83'
                variant='success'
            />
            <ActionButton
				disabled={true}
				text='Process Payment $4,428.83'
			/>
        </>
    );
};

export default ActionButtonStory;
