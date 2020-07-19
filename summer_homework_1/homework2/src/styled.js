let uuid = 0

const styleElement = document.createElement('style')
document.head.appendChild(styleElement)

export const styled = (styles) => {
  uuid += 1

  styleElement.textContent += `
    .styled-${uuid} {
      ${Object.entries(styles).reduce((styles, [key, value]) => styles += `${key}: ${value};`, '')}
    }
  `

  return `styled-${uuid}`
}
