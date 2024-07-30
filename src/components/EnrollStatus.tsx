import classes from './EnrollStatus.module.scss';
import variables from '@/app/variables.module.scss';
import {
    AutoPay,
    Paperless,
    PayByText,
    Enrolled,
    PartiallyEnrolled,
    NotEnrolled,
    ChevronLarge,
} from './Symbols';
import Badge from './Badge';

type EnrollmentStatus = 'Not Enrolled' | 'Partially Enrolled' | 'Enrolled';

interface EnrollStatusProps {
    autoPayStatus: EnrollmentStatus;
    paperlessStatus: EnrollmentStatus;
    payByTextStatus: EnrollmentStatus;
	autoPayLink: string;
	paperlessLink: string;
	payByTextLink: string;
}

const EnrollStatus: React.FC<EnrollStatusProps> = ({
    autoPayStatus,
    paperlessStatus,
    payByTextStatus,
	autoPayLink,
	paperlessLink,
	payByTextLink
}) => {
    const getEnrollmentIcon = (
        status: EnrollmentStatus
    ) => {
        if (status === 'Not Enrolled') {
            return <NotEnrolled fill={variables.icBlue70} />;
        }
        if (status === 'Partially Enrolled') {
            return <PartiallyEnrolled fill={variables.icBlue70} />;
        }
        if (status === 'Enrolled') {
            return <Enrolled fill={variables.icGreen70} />;
        }
    };

	const getBadgeVariant = (status: EnrollmentStatus) => {
		if (status === 'Not Enrolled') {
            return 'error';
        }
        if (status === 'Partially Enrolled') {
            return 'warning';
        }
        if (status === 'Enrolled') {
            return 'success';
        }
		return 'default';
	};

    return (
        <div className={classes.grid}>
            <a href={autoPayLink} className={classes.gridRow}>
                <div className={classes.gridItem1}>
                    <AutoPay fill={variables.icBlue70} />
                    <p className={classes.serviceTitle}>AutoPay</p>
                </div>
                <div className={classes.gridItem2}>
                    {getEnrollmentIcon(autoPayStatus)}
                    <p className={autoPayStatus === 'Enrolled' ? classes.enrolled : ''}>
						{autoPayStatus}
					</p>
                </div>
				<span className={classes.mobileBadge}><Badge hasMargin={false} content={autoPayStatus} variant={getBadgeVariant(autoPayStatus)} /></span>
                <div className={classes.chevron}>
                    <ChevronLarge fill={variables.icNeutral80} />
                </div>
            </a>

            <a href={paperlessLink} className={classes.gridRow}>
                <div className={classes.gridItem1}>
                    <Paperless fill={variables.icBlue70} />
                    <p className={classes.serviceTitle}>Paperless</p>
                </div>
                <div className={classes.gridItem2}>
                    {getEnrollmentIcon(paperlessStatus)}
                    <p className={paperlessStatus === 'Enrolled' ? classes.enrolled : ''}>
						{paperlessStatus}
					</p>
                </div>
				<span className={classes.mobileBadge}><Badge hasMargin={false} content={paperlessStatus} variant={getBadgeVariant(paperlessStatus)} /></span>
                <div className={classes.chevron}>
                    <ChevronLarge fill={variables.icNeutral80} />
                </div>
            </a>

            <a href={payByTextLink} className={classes.gridRow}>
                <div className={classes.gridItem1}>
                    <PayByText fill={variables.icBlue70} />
                    <p className={classes.serviceTitle}>Pay By Text</p>
                </div>
                <div className={classes.gridItem2}>
                    {getEnrollmentIcon(payByTextStatus)}
                    <p className={payByTextStatus === 'Enrolled' ? classes.enrolled : ''}>
						{payByTextStatus}
					</p>
                </div>
				<span className={classes.mobileBadge}><Badge hasMargin={false} content={payByTextStatus} variant={getBadgeVariant(payByTextStatus)} /></span>
                <div className={classes.chevron}>
                    <ChevronLarge fill={variables.icNeutral80} />
                </div>
            </a>
        </div>
    );
};

export default EnrollStatus;
