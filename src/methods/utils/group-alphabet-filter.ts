function groupNameKeyDown(event: any, cooperativeGroupName: string, setCooporativeGroupName: Function) {
    const backSpaceKeyCode = 8;
    const spaceBar = 32;

    const alphabetKeyRange = (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === spaceBar; //this checks if the key is from a-z or a space bar
    const isBackspace = event.keyCode === backSpaceKeyCode; //this checks if the key is back space

    alphabetKeyRange && setCooporativeGroupName(cooperativeGroupName + event.key);
    isBackspace && setCooporativeGroupName(cooperativeGroupName.slice(0, -1));
}

function groupSymbolKeyDown(event: any, cooporativeGroupSymbol: string, setCooporativeGroupSymbol: Function) {
    const backSpaceKeyCode = 8;
    const spaceBar = 32;

    const alphabetKeyRange = (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === spaceBar; //this checks if the key is from a-z or a space bar
    const isBackspace = event.keyCode === backSpaceKeyCode; //this checks if the key is back space

    cooporativeGroupSymbol.length < 3 &&
        alphabetKeyRange &&
        setCooporativeGroupSymbol(cooporativeGroupSymbol + event.key);
    isBackspace && setCooporativeGroupSymbol(cooporativeGroupSymbol.slice(0, -1));
}

export { groupNameKeyDown, groupSymbolKeyDown };
