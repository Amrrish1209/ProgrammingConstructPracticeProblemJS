function convertTemperature(temperature, conversionType) {
  let result;

  switch (conversionType) {
    case "C TO F":
      if (temperature >= 0 && temperature <= 100) {
        result = (temperature * 9) / 5 + 32;
        return `${temperature} °C is equal to ${result} °F.`;
      } else {
        return "Temperature should be within the range of 0 °C to 100 °C.";
      }

    case "F TO C":
      if (temperature >= 32 && temperature <= 212) {
        result = ((temperature - 32) * 5) / 9;
        return `${temperature} °F is equal to ${result} °C.`;
      } else {
        return "Temperature should be within the range of 32 °F to 212 °F.";
      }

    default:
      return "Invalid conversion type.";
  }
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.log(
    "Invalid number of arguments. Please provide the temperature value and conversion type (C to F or F to C)."
  );
  process.exit(1);
}

const temperature = parseFloat(args[0]);
const conversionType = args[1].toUpperCase();

const result = convertTemperature(temperature, conversionType);
console.log(result);
