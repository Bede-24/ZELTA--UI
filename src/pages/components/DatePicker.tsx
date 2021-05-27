import React, { useEffect, useState } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';

type Props = {
    value?: Date;
    onChange: (e: string) => void;
    required?: boolean;
    minDate?: Date;
    label?: string;
};

function DatePicker(props: Props) {
    const [date, setDate] = useState(new Date());
    const { required, minDate, label } = props;

    useEffect(() => {
        if (props.value) {
            setDate(props.value);
        }
        // eslint-disable-next-line
  }, [props.value])

    return (
        <div className="input-style">
            <div className="label">{label ? label : 'Start Date'}</div>
            <Datepicker
                selected={date}
                dateFormat="d MMM, yyyy"
                onChange={(date) => {
                    const timestamp = date?.valueOf();
                    if (timestamp) {
                        setDate(moment(timestamp).toDate());
                        props.onChange(moment(timestamp).format('YYYY-MM-DD'));
                    }
                }}
                required={required}
                minDate={minDate}
            />
        </div>
    );
}

export default DatePicker;
