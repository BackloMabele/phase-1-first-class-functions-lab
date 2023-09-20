const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  const fareDoubler = function(fare) {
      return fare * 2;
  };
  const fareTripler = function(fares) {
    return fares * 3;
};
function selectDifferentDrivers(drivers, numberOfDrivers) {
    if (numberOfDrivers === returnLastTwoDrivers) {
        return drivers.slice(-2)
    }
    else if (numberOfDrivers === returnFirstTwoDrivers) {
        return drivers.slice(0,2)
    }
    else {
        return "sorry"
    }
}
