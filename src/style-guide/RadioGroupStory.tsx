import RadioGroup from "@/components/RadioGroup";

const RadioGroupStory = () => {
    return (
        <RadioGroup
            legend="What's your level of spice?"
            options={[
                { id: 'Bland' },
                { id: 'Medium' },
                { id: 'Hot' },
                { id: 'Absolute Destruction' },
            ]}
        />
    );
};

export default RadioGroupStory;
