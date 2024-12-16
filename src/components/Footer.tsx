import classes from './Footer.module.scss';
import Image from 'next/image';
import { ICFooterLogo } from './Symbols';
import ICLink from './ICLink';

const Footer = () => {
    return (
        <footer className={classes.container}>
			<span className={classes.logo}><ICFooterLogo /></span>

            <ICLink href='https://www.invoicecloud.net/privacy-policy' variant='grey'>
                Privacy Policy
            </ICLink>

            <ICLink href='https://invoicecloud.net/accessibility-statement' variant='grey'>
                Accessibility
            </ICLink>

			<span className={classes.flex}>
				<Image src='/trustwave.png' width={100} height={17} alt="This site protected by Trustwave's Trust Commerce Program. You may click on seal to validate." />
				<ICLink href='https://sealserver.trustwave.com/cert.php?customerId=e6fe5831b6ba46ef83d7c7330126e94d' variant='grey'>Secure Site</ICLink>
			</span>
        </footer>
    );
};

export default Footer;
