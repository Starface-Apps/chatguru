/**
 * It returns a random string or number based on the parameters passed
 * @param {RandomDataType} base - The base of the random data, it can be:
 * @param {RandomDataQtd} qtd - How many characters or numbers you want to generate,
 * if you want to generate a number, you can pass the min and max number you want to generate.
 * @returns A random string or number
 * @example randowData("char", { qtd: 10 }) // Ex: "Qwertyuiop"
 * @example randowData("number", {qtd: 1, min: 0, max: 9}) // EX: 7
 * @example randowData("both", {qtd: 10}) // EX: "AIO101NQW1"
 */
export function randowData(base: RandomDataType, qtd: RandomDataQtd) {
  const bases = {
    both: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    char: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
  };
  let randomText = "";
  const quantity = qtd.qtd;
  const min = qtd.min;
  const max = qtd.max;

  if (min || max) bases[base] = bases[base].slice(min, max + 1);

  for (let i = 0; i < quantity; i++) {
    let len = bases[base].length;
    randomText += bases[base].charAt(Math.floor(Math.random() * len));
  }
  return bases[base] !== "number"
    ? qtd?.lowerCase == true
      ? randomText.toLocaleLowerCase()
      : randomText.toUpperCase()
    : parseInt(randomText);
}

/**
 * Generate true or false
 * @returns {boolean} true or false
 */
export function getRandomBoolean() {
  return Math.random() < 0.5;
}

/**
 * Parse a multipart form-data text to a JSON object
 * @param {string} text - The text to be parsed
 * @returns {object} The JSON object with the form data
 */
export function parseMultipartFormData(text) {
  const boundaryMatch = text.match(/--([^\r\n]+)/);
  if (!boundaryMatch) {
    throw new Error("Boundary not found in the input text");
  }
  const boundary = boundaryMatch[1];
  const parts = text.split(`--${boundary}`);
  const jsonData = {};
  parts.forEach((part) => {
    const contentDispositionMatch = part.match(/Content-Disposition: form-data; name="([^"]+)"/);
    if (contentDispositionMatch) {
      const name = contentDispositionMatch[1];
      const valueMatch = part.match(/\r\n\r\n([\s\S]*)/);
      if (valueMatch) {
        const value = valueMatch[1].trim();
        jsonData[name] = value;
      }
    }
  });
  return jsonData;
}
