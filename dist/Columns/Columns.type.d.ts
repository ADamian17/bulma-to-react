export declare type ColumnsResponsiveType = 'is-mobile' | 'is-desktop' | 'is-three-quarters-mobile' | 'is-two-thirds-tablet' | 'is-half-desktop' | 'is-one-third-widescreen' | 'is-one-quarter-fullhd';
export declare type ColumnsGapType = 'is-gapless' | 'is-variable' | 'is-0' | 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6' | 'is-7' | 'is-8';
export declare type ColumnOptionsType = 'is-vcentered' | 'is-multiline' | 'is-centered' | '';
export declare type ColumnsType = {
    responsive?: ColumnsResponsiveType;
    gag?: ColumnsGapType;
    options?: ColumnOptionsType;
};
