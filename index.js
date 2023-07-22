const returnFirstTwoDrivers = function (array) {
    const newArray = [...array.slice(0, 2)];
    return newArray;
}
const returnLastTwoDrivers = function (array) {
    const newArray = [...array.slice(-2)];
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(arrayOfDrivers, thing) {
    if (thing === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (thing === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}
