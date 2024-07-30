import EnrollStatus from '@/components/EnrollStatus';

const EnrollStatusStory = () => {
    return (
        <>
            <EnrollStatus 
				autoPayStatus='Not Enrolled'
				autoPayLink='#'
				paperlessStatus='Partially Enrolled'
				paperlessLink='#'
				payByTextStatus='Enrolled'
				payByTextLink='#'
			/>
        </>
    );
};

export default EnrollStatusStory;
