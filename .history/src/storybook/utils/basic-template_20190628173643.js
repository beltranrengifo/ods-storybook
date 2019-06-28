const basicTemplate = (component, cssClass) => {
  console.log(cssClass)
  return `
    <div class="storybook__basic-template ${cssClass}">
      ${component}
    </div>
  `
}

export default basicTemplate
