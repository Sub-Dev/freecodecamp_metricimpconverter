class ConvertHandler {
  getNum(input) {
    let result = input.match(/^[\d\.\/]+/);
    if (!result) return 1;

    let num = result[0];
    if (num.includes('/')) {
      let parts = num.split('/');
      if (parts.length !== 2 || parts[0] === '' || parts[1] === '' || parts[1] === '0') {
        return 'invalid number';
      }
      // Check each part for valid number format
      const numRegex = /^(\d+\.?\d*|\.\d+)$/;
      if (!numRegex.test(parts[0]) || !numRegex.test(parts[1])) {
        return 'invalid number';
      }
      return parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      // Check for valid number format (no multiple decimals)
      const numRegex = /^(\d+\.\d+|\d+|\.\d+)$/;
      if (!numRegex.test(num)) {
        return 'invalid number';
      }
      return parseFloat(num);
    }
  }

  getUnit(input) {
    let result = input.match(/[a-zA-Z]+$/);
    if (!result) return 'invalid unit';

    let unit = result[0].toLowerCase();
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];

    return validUnits.includes(unit) ? (unit === 'l' ? 'L' : unit) : 'invalid unit';
  }

  getReturnUnit(initUnit) {
    const unitMap = {
      gal: 'L', L: 'gal', mi: 'km', km: 'mi', lbs: 'kg', kg: 'lbs'
    };
    return unitMap[initUnit] || 'invalid unit';
  }

  convert(initNum, initUnit) {
    const conversionRates = {
      gal: 3.78541, L: 1 / 3.78541,
      mi: 1.60934, km: 1 / 1.60934,
      lbs: 0.453592, kg: 1 / 0.453592
    };
    return parseFloat((initNum * conversionRates[initUnit]).toFixed(5));
  }

  getString(initNum, initUnit, returnNum, returnUnit) {
    const unitNames = {
      gal: 'gallons', L: 'liters',
      mi: 'miles', km: 'kilometers',
      lbs: 'pounds', kg: 'kilograms'
    };
    return `${initNum} ${unitNames[initUnit]} converts to ${returnNum} ${unitNames[returnUnit]}`;
  }
}

module.exports = ConvertHandler;
