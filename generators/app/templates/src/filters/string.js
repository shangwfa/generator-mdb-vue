/**
 * 功能:'abc' => 'Abc'
 */
export function capitalize(value, options) {
  options = options || {};
  var onlyFirstLetter =
    options.onlyFirstLetter != null ? options.onlyFirstLetter : false;
  if (!value && value !== 0) return "";
  if (onlyFirstLetter === true) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    value = value
      .toString()
      .toLowerCase()
      .split(" ");
    return value
      .map(function(item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      })
      .join(" ");
  }
}
/**
 * 功能:'AbC' => 'abc'
 */
export function lowercase(value) {
  return value || value === 0 ? value.toString().toLowerCase() : "";
}
/**
 * 功能：'abc' => 'ABC'
 */
export function uppercase(value) {
  return value || value === 0 ? value.toString().toUpperCase() : "";
}
/**
 * 功能：'' => {placeholder} 'foo' => 'foo'
 */
export function placeholder(input, property) {
  return input === undefined || input === "" || input === null
    ? property
    : input;
}
/**
 * 功能：'lorem ipsum dolor' => 'lorem ipsum dol...'
 */
export function truncate(value, length) {
  length = length || 15;
  if (!value || typeof value !== "string") return "";
  if (value.length <= length) return value;
  return value.substring(0, length) + "...";
}
