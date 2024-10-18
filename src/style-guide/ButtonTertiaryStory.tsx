import ButtonTertiary from '@/components/ButtonTertiary';

const ButtonTertiaryStory = () => {
    return (
        <>
            <ButtonTertiary
                disabled={false}
                text='Cancel Payment'
            />
            <ButtonTertiary
                disabled={false}
                text='Add Account'
                variant='green'
            />
            <ButtonTertiary
                disabled={false}
                text='Remove Email Address'
                variant='red'
            />
            <ButtonTertiary 
				disabled={true}
				text='Cancel Payment'
			/>
        </>
    );
};

export default ButtonTertiaryStory;
