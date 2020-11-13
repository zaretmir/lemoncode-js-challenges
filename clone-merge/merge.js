function merge(primarySource, secondarySource) {
    return {...primarySource, ...secondarySource};
}

module.exports = merge;