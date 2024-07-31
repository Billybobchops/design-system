interface SymbolProps {
    fill: string;
}

export const AutoPay: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
			aria-hidden='true'
			height='18'
			viewBox='0 0 19 18'
			fill='none'
			width='19'
            xmlns='http://www.w3.org/2000/svg'
		>
            <g clip-path='url(#clip0_6399_4416)'>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.79467 3.85032C8.29308 3.85085 6.83208 4.28663 5.63051 5.0924C4.42895 5.89818 3.55149 7.03057 3.12957 8.31998C2.70764 9.60941 2.76396 10.9864 3.29009 12.2448C3.81622 13.5031 4.78383 14.5751 6.04801 15.3002C7.31219 16.0252 8.80487 16.3642 10.3025 16.2666C11.8001 16.1689 13.2221 15.6397 14.3553 14.7583C15.4886 13.8768 16.2722 12.6906 16.5888 11.3773C16.9054 10.064 16.738 8.69424 16.1115 7.47321C16.0433 7.32476 16.0419 7.15847 16.1077 7.00914C16.1734 6.85979 16.3011 6.73899 16.4642 6.67201C16.6271 6.60503 16.8129 6.59705 16.9823 6.64976C17.1517 6.70246 17.2918 6.81176 17.3732 6.95478C18.125 8.42008 18.3258 10.0639 17.9458 11.6399C17.5658 13.2159 16.6252 14.6394 15.2652 15.697C13.9051 16.7546 12.1986 17.3896 10.4014 17.5066C8.60418 17.6237 6.81294 17.2166 5.296 16.3463C3.77906 15.4761 2.61807 14.1896 1.98694 12.6794C1.35582 11.1692 1.28853 9.51666 1.79515 7.96942C2.30177 6.42216 3.35503 5.0634 4.79717 4.09669C6.23931 3.12997 7.99269 2.60733 9.79467 2.60706V3.85032Z'
                    fill={fill}
                    stroke={fill}
                    stroke-width='0.5'
                />
                <path
                    d='M12.8442 3.58182L10.8535 5.06563V2.09802L12.8442 3.58182Z'
                    fill={fill}
                    stroke={fill}
                    stroke-width='2'
                />
            </g>
            <defs>
                <clipPath id='clip0_6399_4416'>
                    <rect
                        width='18'
                        height='18'
                        fill='white'
                        transform='translate(0.400024)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Paperless: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
			fill='none'
            height='18'
            viewBox='0 0 19 18'
            width='19'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M4.87377 5.18194C12.9264 6.97141 14.8053 12.4919 16.6664 17.1177L14.9753 17.7083L14.1253 15.6504C13.6958 15.8025 13.2485 15.9188 12.9264 15.9188C3.0843 15.9188 0.400085 0.708252 0.400085 0.708252C1.29482 2.49773 7.55798 2.72141 12.0316 3.61615C16.5053 4.51088 18.2948 8.31352 18.2948 10.103C18.2948 11.8925 16.729 13.4583 16.729 13.4583C13.8211 5.18194 4.87377 5.18194 4.87377 5.18194Z'
                fill={fill}
            />
        </svg>
    );
};

export const PayByText: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
			fill='none'
            height='19'
            viewBox='0 0 12 19'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <g clip-path='url(#clip0_6399_4442)'>
                <path
                    d='M9.81677 0.666504H3.1501C2.0001 0.666504 1.06677 1.59984 1.06677 2.74984V16.9165C1.06677 18.0665 2.0001 18.9998 3.1501 18.9998H9.81677C10.9667 18.9998 11.9001 18.0665 11.9001 16.9165V2.74984C11.9001 1.59984 10.9667 0.666504 9.81677 0.666504ZM6.48343 18.1665C5.79177 18.1665 5.23343 17.6082 5.23343 16.9165C5.23343 16.2248 5.79177 15.6665 6.48343 15.6665C7.1751 15.6665 7.73344 16.2248 7.73344 16.9165C7.73344 17.6082 7.1751 18.1665 6.48343 18.1665ZM10.2334 14.8332H2.73343V3.1665H10.2334V14.8332Z'
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id='clip0_6399_4442'>
                    <rect
                        width='11'
                        height='19'
                        fill='white'
                        transform='translate(0.900024)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Enrolled: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
			aria-hidden='true'
            fill='none'
            height='17'
            viewBox='0 0 17 17'
            width='17'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M8.40002 0.5C3.98402 0.5 0.400024 4.084 0.400024 8.5C0.400024 12.916 3.98402 16.5 8.40002 16.5C12.816 16.5 16.4 12.916 16.4 8.5C16.4 4.084 12.816 0.5 8.40002 0.5ZM6.23202 11.932L3.36002 9.06C3.04802 8.748 3.04802 8.244 3.36002 7.932C3.67202 7.62 4.17602 7.62 4.48802 7.932L6.80002 10.236L12.304 4.732C12.616 4.42 13.12 4.42 13.432 4.732C13.744 5.044 13.744 5.548 13.432 5.86L7.36002 11.932C7.05602 12.244 6.54402 12.244 6.23202 11.932Z'
                fill={fill}
            />
        </svg>
    );
};

export const NotEnrolled: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
			aria-hidden='true'
            fill='none'
            height='16'
            viewBox='0 0 17 16'
            width='17'
            xmlns='http://www.w3.org/2000/svg'
		>
            <g clip-path='url(#clip0_6873_22)'>
                <path
                    d='M8.40002 16C12.8183 16 16.4 12.4183 16.4 8C16.4 3.58172 12.8183 0 8.40002 0C3.98175 0 0.400024 3.58172 0.400024 8C0.400024 12.4183 3.98175 16 8.40002 16Z'
                    fill={fill}
                />
                <path
                    d='M12.2225 4.18354C11.9859 3.94691 11.6036 3.94691 11.367 4.18354L8.40003 7.14448L5.43302 4.17747C5.19639 3.94084 4.81414 3.94084 4.5775 4.17747C4.34087 4.41411 4.34087 4.79636 4.5775 5.03299L7.54451 8L4.5775 10.967C4.34087 11.2036 4.34087 11.5859 4.5775 11.8225C4.81414 12.0592 5.19639 12.0592 5.43302 11.8225L8.40003 8.85552L11.367 11.8225C11.6036 12.0592 11.9859 12.0592 12.2225 11.8225C12.4592 11.5859 12.4592 11.2036 12.2225 10.967L9.25555 8L12.2225 5.03299C12.4531 4.80243 12.4531 4.41411 12.2225 4.18354Z'
                    fill='white'
                />
            </g>
            <defs>
                <clipPath id='clip0_6873_22'>
                    <rect
                        width='16'
                        height='16'
                        fill='white'
                        transform='translate(0.400024)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const PartiallyEnrolled: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
			aria-hidden='true'
            fill='none'
            height='16'
            viewBox='0 0 17 16'
            width='17'
            xmlns='http://www.w3.org/2000/svg'
		>
            <g clip-path='url(#clip0_6873_34)'>
                <path
                    d='M8.40002 0C3.98402 0 0.400024 3.584 0.400024 8C0.400024 12.416 3.98402 16 8.40002 16C12.816 16 16.4 12.416 16.4 8C16.4 3.584 12.816 0 8.40002 0ZM11.6 8.8H5.20002C4.76002 8.8 4.40002 8.44 4.40002 8C4.40002 7.56 4.76002 7.2 5.20002 7.2H11.6C12.04 7.2 12.4 7.56 12.4 8C12.4 8.44 12.04 8.8 11.6 8.8Z'
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id='clip0_6873_34'>
                    <rect
                        width='16'
                        height='16'
                        fill='white'
                        transform='translate(0.400024)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const ChevronLarge: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'
		>
            <g clip-path='url(#clip0_6399_4425)'>
                <path
                    d='M3.31621 2.38834L7.92787 7L3.31621 11.6117C3.2062 11.7217 3.15119 11.8519 3.15119 12.0025C3.15119 12.153 3.2062 12.2833 3.31621 12.3933L4.75789 13.835C4.8679 13.945 4.99817 14 5.14871 14C5.29925 14 5.42952 13.945 5.53953 13.835L11.9837 7.39082C12.0937 7.28081 12.1487 7.15054 12.1487 7C12.1487 6.84946 12.0937 6.71919 11.9837 6.60918L5.53953 0.165012C5.42952 0.0550041 5.29925 0 5.14871 0C4.99817 0 4.8679 0.0550041 4.75789 0.165012L3.31621 1.6067C3.2062 1.71671 3.15119 1.84698 3.15119 1.99752C3.15119 2.14806 3.2062 2.27833 3.31621 2.38834Z'
                    fill='#383838'
                />
            </g>
            <defs>
                <clipPath id='clip0_6399_4425'>
                    <rect
                        width='14'
                        height='14'
                        fill='white'
                        transform='matrix(-1 0 0 1 14.65 0)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Minus: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 4'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M12 0.799951V3.19995C12 3.55995 11.76 3.79995 11.4 3.79995H0.6C0.24 3.79995 0 3.55995 0 3.19995V0.799951C0 0.439951 0.24 0.199951 0.6 0.199951H11.4C11.76 0.199951 12 0.439951 12 0.799951Z'
                fill={fill}
            />
        </svg>
    );
};

export const Plus: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 12'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='m12 4.90909v2.18182c0 .32727-.2182.54545-.5455.54545h-3.81814v3.81814c0 .3273-.21818.5455-.54545.5455h-2.18182c-.32727 0-.54545-.2182-.54545-.5455v-3.81814h-3.818185c-.327273 0-.545455-.21818-.545455-.54545v-2.18182c0-.32727.218182-.54545.545455-.54545h3.818185v-3.818185c0-.327273.21818-.545455.54545-.545455h2.18182c.32727 0 .54545.218182.54545.545455v3.818185h3.81814c.3273 0 .5455.21818.5455.54545z'
                fill={fill}
            />
        </svg>
    );
};

export const Info: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 12'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M6 0C2.68652 0 0 2.68749 0 6C0 9.31444 2.68652 12 6 12C9.31348 12 12 9.31444 12 6C12 2.68749 9.31348 0 6 0ZM6.49194 2.66129C6.64782 2.66129 6.77419 2.78766 6.77419 2.94355V4.16935C6.77419 4.32524 6.64782 4.45161 6.49194 4.45161H5.3871C5.23121 4.45161 5.10484 4.32524 5.10484 4.16935V2.94355C5.10484 2.78766 5.23121 2.66129 5.3871 2.66129H6.49194ZM7.47581 8.80645C7.47581 8.96678 7.34581 9.09677 7.18548 9.09677H4.81452C4.65419 9.09677 4.52419 8.96678 4.52419 8.80645V8.22581C4.52419 8.06548 4.65419 7.93548 4.81452 7.93548H5.22581V6.3871H4.80645C4.65056 6.3871 4.52419 6.26073 4.52419 6.10484V6.09677V5.51613C4.52419 5.51342 4.52419 5.51073 4.52419 5.50804C4.52419 5.35215 4.65056 5.22581 4.80645 5.22581H6.48387H6.49194C6.64782 5.22581 6.77419 5.35218 6.77419 5.50806V7.93548H7.18548C7.34581 7.93548 7.47581 8.06548 7.47581 8.22581V8.80645Z'
                fill={fill}
            />
        </svg>
    );
};

export const MenuClose: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 12'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M11.9095 10.2211C12.0302 10.3418 12.0302 10.5226 11.9095 10.6432L10.6432 11.9096C10.5226 12.0302 10.3417 12.0302 10.2211 11.9096L6 7.6885L1.77889 11.9096C1.65829 12.0302 1.47737 12.0302 1.35677 11.9096L0.0904524 10.6432C-0.0301508 10.5226 -0.0301508 10.3418 0.0904524 10.2211L4.31156 6.00001L0.0904524 1.77888C-0.0301508 1.65827 -0.0301508 1.4774 0.0904524 1.35679L1.35677 0.0903919C1.47737 -0.030212 1.65829 -0.030212 1.77889 0.0903919L6 4.31153L10.2211 0.0903919C10.3417 -0.030212 10.5226 -0.030212 10.6432 0.0903919L11.9095 1.35679C12.0302 1.4774 12.0302 1.65827 11.9095 1.77888L7.68844 6.00001L11.9095 10.2211Z'
                fill={fill}
            />
        </svg>
    );
};

export const MenuCloseLarge: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='16'
            viewBox='0 0 16 16'
            width='16'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M15.6451 0.367084C15.1718 -0.106181 14.4073 -0.106181 13.934 0.367084L8 6.28897L2.06598 0.354949C1.59272 -0.118316 0.828214 -0.118316 0.354949 0.354949C-0.118316 0.828214 -0.118316 1.59272 0.354949 2.06598L6.28897 8L0.354949 13.934C-0.118316 14.4073 -0.118316 15.1718 0.354949 15.6451C0.828214 16.1183 1.59272 16.1183 2.06598 15.6451L8 9.71103L13.934 15.6451C14.4073 16.1183 15.1718 16.1183 15.6451 15.6451C16.1183 15.1718 16.1183 14.4073 15.6451 13.934L9.71103 8L15.6451 2.06598C16.1062 1.60485 16.1062 0.828214 15.6451 0.367084Z'
                fill={fill}
            />
        </svg>
    );
};

export const Error: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 12'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM8.65 7.25C8.75 7.35 8.75 7.49998 8.65 7.59998L7.6 8.65002C7.5 8.75002 7.35 8.75002 7.25 8.65002L6 7.40002L4.75 8.65002C4.65 8.75002 4.5 8.75002 4.4 8.65002L3.35 7.59998C3.25 7.49998 3.25 7.35 3.35 7.25L4.6 6L3.35 4.75C3.25 4.65 3.25 4.50002 3.35 4.40002L4.4 3.34998C4.5 3.24998 4.65 3.24998 4.75 3.34998L6 4.59998L7.25 3.34998C7.35 3.24998 7.5 3.24998 7.6 3.34998L8.65 4.40002C8.75 4.50002 8.75 4.65 8.65 4.75L7.4 6L8.65 7.25Z'
                fill={fill}
            />
        </svg>
    );
};

export const ErrorLarge: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
			aria-hidden='true'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			width='24'
			xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM13 17H11V15H13V17Z'
                fill={fill}
            />
        </svg>
    );
};

export const Success: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 12'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM9.3 4.19995L5.65 8.5C5.45 8.75 5.1 8.75 4.9 8.5L2.95 6.34998C2.85 6.24998 2.85 6.1 2.95 6L3.5 5.40002C3.6 5.30002 3.7 5.29998 3.8 5.34998L5.1 6.19995L8.4 3.34998C8.5 3.24998 8.65 3.24998 8.75 3.34998L9.25 3.84998C9.35 3.94998 9.35 4.09995 9.3 4.19995Z'
                fill={fill}
            />
        </svg>
    );
};

export const Chevron: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 16'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                id='Vector'
                d='M1.04731 2.72953L6.31778 8L1.04731 13.2705C0.921584 13.3962 0.858723 13.5451 0.858723 13.7171C0.858723 13.8892 0.921584 14.038 1.04731 14.1638L2.69495 15.8114C2.82067 15.9371 2.96956 16 3.1416 16C3.31364 16 3.46253 15.9371 3.58825 15.8114L10.953 8.44665C11.0787 8.32093 11.1416 8.17204 11.1416 8C11.1416 7.82796 11.0787 7.67907 10.953 7.55335L3.58825 0.188586C3.46253 0.0628619 3.31364 0 3.1416 0C2.96956 0 2.82067 0.0628619 2.69495 0.188586L1.04731 1.83623C0.921584 1.96195 0.858723 2.11084 0.858723 2.28288C0.858723 2.45492 0.921584 2.6038 1.04731 2.72953Z'
                fill={fill}
            />
        </svg>
    );
};

export const Search: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 16 16'
            width='16'
            xmlns='http://www.w3.org/2000/svg'
		>
            <g id='Icons'>
                <path
                    d='M15.7013 13.8078L12.0421 10.1405C12.6908 9.1295 13.0731 7.93289 13.0731 6.64814C13.0731 6.62677 13.0664 6.6054 13.0664 6.58403C13.0664 6.57335 13.0691 6.56266 13.0691 6.55198C13.0691 2.93277 10.1425 0 6.53389 0C2.92526 0 0 2.93143 0 6.55064C0 10.1699 2.9266 13.1026 6.53522 13.1026C6.54188 13.1026 6.54854 13.1 6.5552 13.1C6.57918 13.1 6.60183 13.1066 6.62714 13.1066C7.90994 13.1066 9.10482 12.7247 10.1119 12.0743L13.7698 15.7416C14.1121 16.0861 14.4452 16.0861 14.9194 15.7416L15.7013 14.9576C16.0676 14.5637 16.1303 14.2512 15.7013 13.8078ZM6.53522 2.24765C8.90501 2.24765 10.8272 4.17345 10.8272 6.55064C10.8272 8.92651 8.90634 10.8536 6.53522 10.8536C4.16411 10.8536 2.24324 8.92651 2.24324 6.55064C2.24324 4.17478 4.16544 2.24765 6.53522 2.24765Z'
                    fill={fill}
                />
            </g>
        </svg>
    );
};

export const Remove: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 16 16'
            width='16'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                id='times'
                d='M11.3939 8L16 12.606L12.606 16L7.99998 11.3939L3.39393 16L0 12.606L4.60605 8L0 3.39399L3.39393 0L7.99998 4.60611L12.606 0L16 3.39399L11.3939 8Z'
                fill={fill}
            />
        </svg>
    );
};

export const NewWindow: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            height='12'
            viewBox='0 0 12 12'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M9.28472 6.95772L10.7507 5.45091V10.1318C10.7507 11.0603 9.96886 11.8421 9.04039 11.8421H1.71034C0.781871 11.8421 0 11.0603 0 10.1318V2.80174C0 1.87327 0.781871 1.0914 1.71034 1.0914H6.8L5.2 2.55741C4.91619 2.55741 3.47187 2.55753 2.46514 2.55762C1.91289 2.55767 1.46601 3.0053 1.46601 3.55755C1.46601 5.46427 1.46601 7.46947 1.46601 9.37619C1.46601 9.92848 1.91372 10.3761 2.46601 10.3761H8.28472C8.83701 10.3761 9.28472 9.92823 9.28472 9.37594C9.28472 8.58181 9.28472 7.95762 9.28472 6.95772ZM8.4 1.75771L4.4 5.75771L6.4 7.75771L10.4 3.75771L12 5.45091V0.157715H6.8L8.4 1.75771Z'
                fill={fill}
            />
        </svg>
    );
};

export const Warning: React.FC<SymbolProps> = ({ fill }) => {
    return (
        <svg
            aria-hidden='true'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
		>
            <path
                d='M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z'
                fill={fill}
            />
        </svg>
    );
};