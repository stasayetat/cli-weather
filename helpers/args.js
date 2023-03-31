function getArgs(inputArgs) {
    let res = {};
    let rest = inputArgs.slice(2);
    rest.forEach((el, index, arr) => {
        if(el.startsWith('-')) {
            if (index === arr.length-1) {
                res[el.substring(1)] = true;
            } else if(!arr[index + 1].startsWith('-')) {
                res[el.substring(1)] = arr[index + 1];
            } else {
                res[el.substring(1)] = true;
            }
        }
    });
    return res;
}

export {
    getArgs
}