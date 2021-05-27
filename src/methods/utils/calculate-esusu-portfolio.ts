// calculate esusu portfolio

import { fromBigNumber } from './bignumber-converter';

export default function (esusuContributions: Array<any>) {
    if (Array.isArray(esusuContributions)) {
        let portfolio = 0;

        /* eslint-disable */
        esusuContributions.map((cycle) => {
            // console.log('ROI => ', cycle.ROIBalance, '. Capital => ', cycle.Capital, '. Withdrawable => ', cycle.Withdrawable)

            const hasNotWithdrawnROI = Number(cycle.ROIBalance) === 0;
            const hasNotWidthrawnCapital = Number(cycle.Capital) === 0;

            const lockedAmountBeforeStart =
                Number(cycle.Withdrawable) === 0
                    ? Number(fromBigNumber(cycle.DepositAmount))
                    : Number(fromBigNumber(cycle.Withdrawable));

            if (hasNotWithdrawnROI) {
                portfolio += Number(lockedAmountBeforeStart);
            } else if (hasNotWidthrawnCapital && !hasNotWithdrawnROI) {
                portfolio += Number(fromBigNumber(cycle.DepositAmount));
            }
        });
        /* eslint-enable */
        return portfolio;
    }
}
