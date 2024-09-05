import Checkboxes from '@/components/Checkboxes';

const CheckboxesStory = () => {
    return (
        <Checkboxes
            legend='What are your favorite Christopher Nolan movies?'
            options={[
                {
                    text: 'Batman Begins',
                    id: 'batman begins',
                    checked: false,
                },
                {
                    text: 'The Dark Knight',
                    id: 'the dark night',
                    checked: false,
                },
                {
                    text: 'The Dark Knight Rises',
                    id: 'the dark night rises',
                    checked: false,
                },
                {
                    text: 'Interstellar',
                    id: 'interstellar',
                    checked: false,
                },
                { 	text: 'Inception',
					id: 'inception',
					checked: false
				},
            ]}
        />
    );
};

export default CheckboxesStory;
