const cooperativeGroupIdentity = '0909';
/**
 * Mark or Identify a group as cooperative
 */
function cooperatviGroupMarker(groupName: string) {
    return groupName + cooperativeGroupIdentity;
}

function cooperativeGroupsFilter(list: Array<any>) {
    const cooperativeGrp: Array<any> = [];

    list.map((group: any) => {
        const groupName: string = group.name || group[1];

        const groupIdentifier = groupName.slice(groupName.length - 4); // get the last 4 characters

        if (groupIdentifier === cooperativeGroupIdentity) {
            group = {
                ...group,
                name: groupName.slice(0, -4),
                1: groupName.slice(0, -4),
                symbol: group.symbol || group[2],
                id: group.id || group[0],
                creatorAddress: group.creatorAddress || group[3]
            };
            cooperativeGrp.push(group);
        }

        return 0;
    });

    return cooperativeGrp;
}

export { cooperatviGroupMarker, cooperativeGroupsFilter };
