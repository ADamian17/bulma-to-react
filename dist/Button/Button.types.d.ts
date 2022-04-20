export declare type ButtonVariant = 'is-white' | 'is-light' | 'is-dark' | 'is-black' | 'is-text' | 'is-ghost' | 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
export declare type ButtonSize = 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
export declare type ButtonProps = {
    className?: string;
    isDisabled?: boolean;
    isInverted?: boolean;
    isLight?: boolean;
    isLoading?: boolean;
    isOutlined?: boolean;
    isResponsive?: boolean;
    isRounded?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    [key: string]: any;
};
