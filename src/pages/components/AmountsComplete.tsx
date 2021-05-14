import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    completeAmount: any;
};

function AmountsComplete(props: Props) {
    return (
        <abbr title={props.completeAmount || 'Amount'} style={{ cursor: 'help' }}>
            {props.children}
        </abbr>
    );
}

export default AmountsComplete;
