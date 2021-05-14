import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import logo from '../../images/Xendfinance-Logo.svg';

type Props = {
    children: ReactNode;
};

function Activity(props: Props) {
    const queue = useSelector((store: any) => store.activity.queue);

    return (
        <React.Fragment>
            {loading(queue) && (
                <div className="load-wrapper">
                    <div>
                        <div className="mb2">
                            <img src={logo} alt="xend finance logo" width={36} />
                        </div>
                        <LoadingOutlined size={100} />
                        {/* <div className="mt2">Loading...</div> */}
                    </div>
                </div>
            )}
            {props.children}
        </React.Fragment>
    );
}

export default Activity;

function loading(queue: Array<string>) {
    if (queue.length === 0) {
        return false;
    } else {
        return true;
    }
}
