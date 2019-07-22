const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const camelToText = str => str.split(/(?=[A-Z])/).map((e, i) => !i ? capitalize(e) : e.toLowerCase()).join(' ')

export {
  capitalize,
  camelToText
}
