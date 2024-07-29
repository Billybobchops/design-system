'use client';
import Providers from '@/components/Providers';
import Image from 'next/image';
import styles from './page.module.css';
import ComponentDisplayArea from '@/style-guide/ComponentDisplayArea';
import ButtonPrimaryStory from '@/style-guide/ButtonPrimaryStory';
import ButtonSecondaryStory from '@/style-guide/ButtonSecondaryStory';
import ButtonTertiaryStory from '@/style-guide/ButtonTertiaryStory';
import ActionButtonStory from '@/style-guide/ActionButtonStory';
import IconButtonStory from '@/style-guide/IconButtonStory';
import BadgeStory from '@/style-guide/BadgeStory';
import AccordionStory from '@/style-guide/AccordionStory';
import AlertStory from '@/style-guide/AlertStory';
import CheckboxesStory from '@/style-guide/CheckboxesStory';
import RadioGroupStory from '@/style-guide/RadioGroupStory';
import DividerStory from '@/style-guide/DividerStory';
import DatePickerInput from '@/components/DatePicker';
import ModalStory from '@/style-guide/ModalStory';

export default function Home() {
    return (
        <main className={styles.main}>
            <Providers>
                <ComponentDisplayArea title='Primary Buttons'>
                    <ButtonPrimaryStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Secondary Buttons'>
                    <ButtonSecondaryStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Tertiary Buttons'>
                    <ButtonTertiaryStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Action Buttons'>
                    <ActionButtonStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Icon Buttons'>
                    <IconButtonStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Accordions'>
                    <AccordionStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Badges'>
                    <BadgeStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Alerts'>
                    <AlertStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Date Picker'>
                    <DatePickerInput />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Checkboxes'>
                    <CheckboxesStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Radio Group'>
                    <RadioGroupStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Dividers'>
                    <DividerStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Modal'>
					<ModalStory />
				</ComponentDisplayArea>

                <Image
                    src='/vercel.svg'
                    alt='Vercel Logo'
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </Providers>
        </main>
    );
}
