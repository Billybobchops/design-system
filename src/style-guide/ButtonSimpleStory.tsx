import ButtonSimple from '@/components/ButtonSimple';

const ButtonSimpleStory = () => {
    return (
        <>
            <ButtonSimple
                clickHandler={() => { console.log('test') }}
                text='cancel'
                variant='blue'
            />
            <ButtonSimple
                clickHandler={() => { console.log('test') }}
                text='cancel'
                variant='green'
            />
            <ButtonSimple
                clickHandler={() => { console.log('test') }}
                text='cancel'
                variant='red'
            />
            <ButtonSimple
                clickHandler={() => { console.log('test') }}
				disabled={true}
                text='cancel'
                variant='red'
            />
        </>
    );
};

export default ButtonSimpleStory;
