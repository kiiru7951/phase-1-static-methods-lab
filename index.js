class Formatter {
  static capitalize(str) {
    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    // Remove all non-alphanumeric characters except for dashes, single quotes, and spaces
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    // Define the list of words to exclude from capitalization
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    // Split the string into an array of words
    const words = str.split(' ');

    // Capitalize the first word and titleize the rest, excluding specified words
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word.toLowerCase())) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    // Join the titleized words back into a string
    return titleizedWords.join(' ');
  }
}
