const basicTemplate = (component, cssClass) => {
  return `
    <div class="storybook__basic-template ${cssClass}">
      ${component}
    </div>
  `
}

export default basicTemplate
