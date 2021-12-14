function receivesAFunction(x) {
    x();
}

function returnsANamedFunction() {
    const namedFunction = () => 1 + 1;
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return (() => 1 + 1);
}
