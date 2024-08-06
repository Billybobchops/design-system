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

type EnrollmentType = 'AutoPay' | 'Paperless' | 'Pay By Text';

const getEnrollmentIcon = (status: EnrollmentStatus) => {
    if (status === 'Not Enrolled') {
        return <NotEnrolled fill={variables.themeA4} />;
    }
    if (status === 'Partially Enrolled') {
        return <PartiallyEnrolled fill={variables.themeA4} />;
    }
    if (status === 'Enrolled') {
        return <Enrolled fill={variables.utilityGreen70} />;
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

interface EnrollmentGridRowProps {
    serviceType: EnrollmentType;
    link: string;
    status: EnrollmentStatus;
}

const EnrollmentGridRow: React.FC<EnrollmentGridRowProps> = ({
    serviceType,
    link,
    status,
}) => {
    return (
        <a href={link} className={classes.gridRow}>
            <div className={classes.gridItems}>
                <div className={classes.gridItem1}>
                    {serviceType === 'AutoPay' && (<AutoPay fill={variables.themeA4} />)}
                    {serviceType === 'Paperless' && (<Paperless fill={variables.themeA4} />)}
                    {serviceType === 'Pay By Text' && (<PayByText fill={variables.themeA4} />)}
                    <p className={classes.serviceTitle}>{serviceType}</p>
                </div>
                <div className={classes.gridItem2}>
                    {getEnrollmentIcon(status)}
                    <p className={status === 'Enrolled' ? classes.enrolled : ''}>{status}</p>
                </div>
                <span className={classes.mobileBadge}>
                    <Badge content={status} hasMargin={false} variant={getBadgeVariant(status)} />
                </span>
            </div>
            <div className={classes.chevron}>
                <ChevronLarge fill={variables.utilityNeutral80} />
            </div>
        </a>
    );
};

interface EnrollStatusProps {
    autoPayStatus: EnrollmentStatus;
    paperlessStatus: EnrollmentStatus;
    payByTextStatus: EnrollmentStatus;
    autoPayLink: string;
    paperlessLink: string;
    payByTextLink: string;
}

type Service = {
    link: string;
    serviceType: EnrollmentType;
    status: EnrollmentStatus;
};

type ServicesArr = Service[];

const EnrollStatus: React.FC<EnrollStatusProps> = ({
    autoPayStatus,
    paperlessStatus,
    payByTextStatus,
    autoPayLink,
    paperlessLink,
    payByTextLink,
}) => {
    const services: ServicesArr = [
        { serviceType: 'AutoPay', link: autoPayLink, status: autoPayStatus },
        { serviceType: 'Paperless', link: paperlessLink, status: paperlessStatus },
        { serviceType: 'Pay By Text', link: payByTextLink, status: payByTextStatus },
    ];

    return (
        <div className={classes.grid}>
            {services.map((service) => {
                return (
                    <EnrollmentGridRow
                        key={service.serviceType}
                        serviceType={service.serviceType}
                        link={service.link}
                        status={service.status}
                    />
                );
            })}
        </div>
    );
};

export default EnrollStatus;
