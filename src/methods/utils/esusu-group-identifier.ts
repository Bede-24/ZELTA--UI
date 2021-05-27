const esusuGroupIdentity = '888b';
/**
 * Mark or Identify a group as esusu
 */
function esusuGroupMarker(groupName: string) {
    return groupName + esusuGroupIdentity;
}

function esusuNameFilter(groupName : string){

    const groupIdentifier = groupName.slice(groupName.length - 4); // get the last 4 characters
    if (groupIdentifier === esusuGroupIdentity) {
         groupName =  groupName.slice(0, -4) ;
        return groupName;
    }
    else{ return 0 ;}
}

function esusuGroupsFilter(list: Array<any>) {
    const esusuGrp: Array<any> = [];

    list.map((group: any) => {
        const groupName: string = group.groupName;

        const groupIdentifier = groupName.slice(groupName.length - 4); // get the last 4 characters

        if (groupIdentifier === esusuGroupIdentity) {
            group = { ...group, name: groupName.slice(0, -4) };
            esusuGrp.push(group);
        }

        return 0;
    });

    return esusuGrp;
}

export { esusuGroupMarker, esusuGroupsFilter, esusuNameFilter };
