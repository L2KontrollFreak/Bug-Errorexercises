class MultipyUnitFail extends Error {}

function primitiveMutiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultipyUnitFail("Bump");
    }
}
    function multiplyTrue(a, b) {
        for (; ;) {
            try {
                return trueMultiply(a, b);
            } catch (e) {
                if (!(e instanceof MultipyUnitFail))
                    throw e;
            }
        }
    }

console.log(multiplyTrue(7,7));