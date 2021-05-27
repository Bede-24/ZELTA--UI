import React, { useState, useEffect } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';

type Props = {
    value?: Date;
    onChange: (e: string) => void;
    required?: boolean;
};

function TimePicker(props: Props) {
    const [start, setStart] = useState(new Date());
    const { required } = props;

    useEffect(() => {
        if (props.value) {
            setStart(props.value);
        }
        // eslint-disable-next-line
  }, [])

    return (
        <div className="input-style">
            <div className="label">Start Time</div>
            <Datepicker
                className="input"
                selected={start}
                onChange={(date) => {
                    const timestamp = date?.valueOf();
                    if (timestamp) {
                        setStart(moment(timestamp).toDate());
                        props.onChange(moment(timestamp).format('YYYY-MM-DD HH:mm:ss'));
                    }
                }}
                dateFormat="h:mm aa"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                required={required}
            />
        </div>
    );
}

export default TimePicker;
