import React from 'react';
export declare const CardWrapper: React.FC<{
    className?: string;
}>;
export declare const CardHeader: React.FC<{
    className?: string;
}>;
declare type CardImageType = {
    className?: string;
    imageSrc: string;
    imageAlt: string;
    size?: 'is-4by3';
    [key: string]: any;
};
export declare const CardImage: React.FC<CardImageType>;
export declare const CardContent: React.FC<{
    className?: string;
    [key: string]: any;
}>;
export declare const CardFooter: React.FC<{
    className?: string;
    [key: string]: any;
}>;
export {};
