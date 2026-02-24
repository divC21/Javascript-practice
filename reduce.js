Array.prototype.myReduce = function (callback, initialValue) {
    if ((!initialValue && !this.length) || typeof callback !== 'function')
        throw new TypeError('Invalid Input');

    let index = 0;
    let acc = initialValue;

    if (!initialValue) {
        index = 1
        acc = this[0]
    }
    let that = this;
    for (let i = index; i < that.length; i++) {
        if (this[i])
            acc = callback(acc, that[i])
    }
    return acc
}

