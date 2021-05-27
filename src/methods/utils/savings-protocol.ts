const storageName = '__protocol-conf__';

export function setSavingsProtocol(SelectedProtocol: any){

    localStorage.setItem(storageName, SelectedProtocol);
}

export function getcurrentSavingsProtocol(){

    let current = localStorage.getItem(storageName);
    if (current === null) {
        return '';
    } else {
        return current;
    }
}