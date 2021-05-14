import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

function BackgroundTaskIndicator() {
    const queue = useSelector((store: any) => store.activity.backgroundTask);

    return (
        <React.Fragment>
            {loading(queue) && (
                <div className="background-task">
                    <div>
                        <LoadingOutlined size={32} />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default BackgroundTaskIndicator;

function loading(queue: Array<string>) {
    if (queue.length === 0) {
        return false;
    } else {
        return true;
    }
}
