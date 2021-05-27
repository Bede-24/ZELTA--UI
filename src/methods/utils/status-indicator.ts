
export function esusucycleStatusIndicator(showJoinButton : boolean, CycleState : number,  Capital : number) {
    if (showJoinButton || Number(CycleState) === 0) {
        return 'pending';
    }
    if (Number(CycleState) === 3 || Number(Capital) > 0) {
        return 'ended';
    }
    if (Number(CycleState) === 1 || Number(CycleState) === 2) {
        return 'active';
    }
}


export function cooporativeStatusIndicator(showJoinButton : boolean, CycleStatus : number, stakesClaimed : number){
    if (showJoinButton || Number(CycleStatus) === 0) {
        return 'pending';
    }
    if (Number(CycleStatus) === 2 || Number(stakesClaimed) > 0) {
        return 'ended';
    }
    if (Number(CycleStatus) === 1 ) {
        return 'active';
    }
}