import React, { useState, useEffect } from 'react';
import { convertWeeksToSeconds } from '../../methods/utils/converters/weeks-seconds';
import InputNumber from './InputNumber';
import Select from './Select';

type Props = {
    onChange?: (e: string) => void;
};

function TimeIntervalSelector(props: Props) {
    const mins = 1 / 10080;
    const hour = 1 / 168;
    const day = 1 / 7;

    const [dfValue, setDfValue] = useState(1);
    const [intervalUnit, setIntervalUnit] = useState(hour);

    useEffect(() => {
        const secs = Math.trunc(convertWeeksToSeconds(dfValue * intervalUnit));
        props.onChange && props.onChange(String(secs));
        // eslint-disable-next-line
  }, [dfValue, intervalUnit])

    return (
        <div className="time-interval-selector">
            <InputNumber label="Cycle Duration" value={dfValue} required onChange={(e) => setDfValue(Number(e))} />

            <Select
                label="Unit"
                labelInvisible
                defaultValue={intervalUnit}
                onChange={(e) => setIntervalUnit(Number(e))}
            >
                <option value={mins}>Minutes</option>
                <option value={hour}>Hours</option>
                <option value={day}>Days</option>
                <option value={1}>Weeks</option>
            </Select>
        </div>
    );
}

export default TimeIntervalSelector;
