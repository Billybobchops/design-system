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
				hasSymbol={true}
                text='Process Payment'
                variant='success'
            />
            <ActionButton
				disabled={true}
				hasSymbol={true}
				text='Process Payment'
			/>
        </>
    );
};

export default ActionButtonStory;
