import iconsArray from '@onesait/onesait-ds/lib/icon.json'

const prefixIcons = prefix => {
  const icons = {}
  icons['No icon'] = ''
  for (let icon in iconsArray) icons[iconsArray[icon]] = `${prefix || ''}${iconsArray[icon]}`
  return icons
}

export default prefixIcons
