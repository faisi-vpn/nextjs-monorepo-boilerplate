import React from 'react';
import { Text } from '../Typography/Typography';

import './LabelStatus.scss';

type LabelStatusProps = {
    text: string;
    type: 'active' | 'inactive' | 'draft' | 'warning' | 'orange';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular';
    className?: string;
    icon?: React.ReactElement;
} & React.ComponentPropsWithoutRef<'div'>;

const LabelStatus = ({
    text,
    type,
    size = 'sm',
    fontWeight = 'semibold',
    className,
    icon,
    ...props
}: LabelStatusProps) => {
    return (
        <div
            className={`label-status label-status-${type} ${className}`}
            {...props}
        >
            {icon!! && icon}
            <Text
                size={size}
                fontWeight={fontWeight}
                className={`label-status__text label-status__text-${type}`}
            >
                {text}
            </Text>
        </div>
    );
};

export default LabelStatus;
