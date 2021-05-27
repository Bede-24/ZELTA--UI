import React from 'react';
import empty from '../../images/empty-animated.svg';

type Props = {
    message?: string;
};

function EmptyList(props: Props) {
    return (
        <div>
            <div className="flex justify-center mt2">
                <img src={empty} width={200} alt="empty list" style={{ opacity: '0.3' }} />
            </div>
            <div className="text-center" style={{ color: 'var(--fontAltColor)', fontSize: 16 }}>
                {props.message}
            </div>
        </div>
    );
}

export default EmptyList;
