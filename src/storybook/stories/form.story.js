import { storiesOf } from '@storybook/vue'
import { boolean, optionsKnob, text } from '@storybook/addon-knobs'
import formMd from '../md/form.md'
const stories = storiesOf('ODS/Form', module)

const labelPositions = {
  Top: 'top',
  Left: 'left',
  Right: 'right'
}

const formSizes = {
  Default: '',
  Medium: 'medium',
  Small: 'small',
  Mini: 'mini'
}

const propsStr = `:label-position="labelPosition"
    :label-width="labelWidth"
    :label-suffix="labelSuffix"
    :show-message="showMessage"
    :inline="inline"
    :inline-message="inlineMessage"
    :hide-required-asterisk="hideRequiredAsterisk"
    :validate-on-rule-change="validateOnRuleChange"
    :size="size"
    :disabled="disabled"
`

/* ========================
=  Default form
=========================== */

const templateDefault = `
<storybook-template>
  <ods-form
    class="form--story"
    ref="form"
    :model="form"
    :rules="validationRules"
    ${propsStr}>
  <ods-form-item
    label="Activity name"
    prop="name">
    <ods-col :span="6">
      <ods-input
        v-model="form.name" />
    </ods-col>
  </ods-form-item>
  <ods-form-item
    label="Activity zone"
    prop="region">
    <ods-col :span="6">
      <ods-select
        v-model="form.region"
        placeholder="please select your zone">
        <ods-option
          label="Europe"
          value="europe" />
        <ods-option
          label="USA"
          value="usa" />
      </ods-select>
    </ods-col>
  </ods-form-item>
  <ods-form-item
    label="Activity time"
    required>
    <ods-col
      :span="3">
      <ods-form-item
        prop="date1">
        <ods-date-picker
          type="date"
          placeholder="Pick a date"
          v-model="form.date1"
          style="width: 100%" />
      </ods-form-item>
    </ods-col>
    <ods-col
    <span class="separator" />
    <ods-col :span="3">
      <ods-form-item
        prop="date2">
        <ods-time-picker
          placeholder="Pick a time"
          v-model="form.date2"
          style="width: 100%" />
      </ods-form-item>
    </ods-col>
  </ods-form-item>
  <ods-form-item
    label="Instant delivery"
    prop="delivery">
    <ods-switch
      v-model="form.delivery" />
  </ods-form-item>
  <ods-form-item
    label="Activity type"
    prop="type">
    <ods-col :span="6">
      <ods-checkbox-group
        v-model="form.type">
        <ods-checkbox label="Online activities" name="type" />
        <ods-checkbox label="Promotion activities" name="type" />
        <ods-checkbox label="Offline activities" name="type" />
        <ods-checkbox label="Simple brand exposure" name="type" />
      </ods-checkbox-group>
    </ods-col>
  </ods-form-item>
  <ods-form-item
    label="Resources"
    prop="resource">
    <ods-radio-group
      v-model="form.resource">
      <ods-radio label="Sponsor" />
      <ods-radio label="Venue" />
    </ods-radio-group>
  </ods-form-item>
  <ods-form-item
    label="Activity form"
    prop="desc">
    <ods-col :span="6">
      <ods-input
        type="textarea"
        v-model="form.desc" />
    </ods-col>
  </ods-form-item>
  <ods-form-item>
  <ods-button
  type="text"
  @click="clearForm('form')">Cancel</ods-button>
  <ods-button
  type="primary"
  @click="submitForm('form')">Create</ods-button>
  <ods-button
    type="secondary"
    v-if="errors"
    @click="clearMessages('form')">Clear messages</ods-button>
  </ods-form-item>
  </ods-form>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        errors: false,
        validationRules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      }
    },
    props: {
      inline: {
        default: boolean('Inline form', false)
      },
      showMessage: {
        default: boolean('Show error messages', true)
      },
      inlineMessage: {
        default: boolean('Inline messages', false)
      },
      hideRequiredAsterisk: {
        default: boolean('Hide required asterisk', false)
      },
      validateOnRuleChange: {
        default: boolean('Validate on rule prop change', true)
      },
      labelPosition: {
        default: optionsKnob('Label position', labelPositions, 'left', { display: 'select' })
      },
      size: {
        default: optionsKnob('Size', formSizes, '', { display: 'select' })
      },
      disabled: {
        default: boolean('Disable form', false)
      },
      labelWidth: {
        default: text('Label width', '140px')
      },
      labelSuffix: {
        default: text('Label suffix', '')
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Form sent!',
              message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt.',
              type: 'success'
            })
            this.$refs[formName].resetFields()
          } else {
            this.errors = true
            console.log('error submit!!')
            return false
          }
        })
      },
      clearForm (formName) {
        this.$refs[formName].resetFields()
      },
      clearMessages (formName) {
        this.$refs[formName].clearValidate()
        this.errors = false
      }
    }
  }),
  {
    notes: {
      markdown: formMd
    }
  }
)

/* ========================
=  Custom validation
=========================== */

const customValidationTemplate = `
<storybook-template>
  <ods-form
    class="form--story"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    ${propsStr}>
    <ods-form-item
      label="Password"
      prop="pass"
      required>
      <ods-input
        size="hecto"
        type="password"
        v-model="ruleForm.pass"
        auto-complete="off" />
    </ods-form-item>
    <ods-form-item
      label="Confirm"
      prop="checkPass"
      required>
      <ods-input
        size="hecto"
        type="password"
        v-model="ruleForm.checkPass"
        auto-complete="off" />
    </ods-form-item>
    <ods-form-item
      label="Age"
      prop="age"
      required>
      <ods-input
        size="hecto"
        v-model.number="ruleForm.age" />
    </ods-form-item>
    <ods-form-item>
      <ods-button
        size="small"
        type="primary"
        @click="submitForm('ruleForm')">Submit</ods-button>
      <ods-button
        size="small"
        type="text"
        @click="resetForm('ruleForm')">Reset</ods-button>
    </ods-form-item>
  </ods-form>
</storybook-template>
  `

stories.add(
  'Custom validation rules',
  () => ({
    template: customValidationTemplate,
    data () {
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    props: {
      inline: {
        default: boolean('Inline form', false)
      },
      showMessage: {
        default: boolean('Show error messages', true)
      },
      inlineMessage: {
        default: boolean('Inline messages', false)
      },
      hideRequiredAsterisk: {
        default: boolean('Hide required asterisk', false)
      },
      validateOnRuleChange: {
        default: boolean('Validate on rule prop change', true)
      },
      labelPosition: {
        default: optionsKnob('Label position', labelPositions, 'top', { display: 'select' })
      },
      size: {
        default: optionsKnob('Size', formSizes, '', { display: 'select' })
      },
      disabled: {
        default: boolean('Disable form', false)
      },
      labelWidth: {
        default: text('Label width', '80px')
      },
      labelSuffix: {
        default: text('Label suffix', '')
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Form sent!',
              message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt.',
              type: 'success'
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }),
  {
    notes: {
      markdown: formMd
    }
  }
)

/* ========================
=  Delete or add form items dynamically
=========================== */
const dynamicItemsTemplate = `
<storybook-template>
  <ods-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    ${propsStr}>
    <ods-form-item
      prop="email"
      label="Email"
      :rules="[
        { required: true, message: 'Please input email address', trigger: 'blur' },
        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
      ]">
      <ods-input
        size="hecto"
        v-model="dynamicValidateForm.email" />
    </ods-form-item>
    <ods-form-item
      class="ods-mb-6"
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'Domain ' + index"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true, message: 'domain can not be null', trigger: 'blur'
      }">
      <ods-input
        size="hecto"
        v-model="domain.value" />
      <div>
        <ods-button
          size="small"
          type="text"
          class="ods-p-0"
          @click.prevent="removeDomain(domain)">Delete</ods-button>
      </div>
    </ods-form-item>
    <ods-form-item
      class="ods-mt-8">
      <ods-button
        class="ods-px-0"
        type="text"
        size="small"
        @click="addDomain">New domain</ods-button>
      <ods-button
        class="ods-p-0"
        type="text"
        size="small"
        @click="resetForm('dynamicValidateForm')">Reset</ods-button>
      <ods-button
        size="small"
        type="primary"
        @click="submitForm('dynamicValidateForm')">Submit</ods-button>
    </ods-form-item>
  </ods-form>
</storybook-template>
  `

stories.add(
  'Adding/deleting items',
  () => ({
    template: dynamicItemsTemplate,
    data () {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      }
    },
    props: {
      inline: {
        default: boolean('Inline form', false)
      },
      showMessage: {
        default: boolean('Show error messages', true)
      },
      inlineMessage: {
        default: boolean('Inline messages', false)
      },
      hideRequiredAsterisk: {
        default: boolean('Hide required asterisk', false)
      },
      validateOnRuleChange: {
        default: boolean('Validate on rule prop change', true)
      },
      labelPosition: {
        default: optionsKnob('Label position', labelPositions, 'top', { display: 'select' })
      },
      size: {
        default: optionsKnob('Size', formSizes, '', { display: 'select' })
      },
      disabled: {
        default: boolean('Disable form', false)
      },
      labelWidth: {
        default: text('Label width', '80px')
      },
      labelSuffix: {
        default: text('Label suffix', '')
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Form sent!',
              message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt.',
              type: 'success'
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      removeDomain (item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain () {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        })
      }
    }
  }),
  {
    notes: {
      markdown: formMd
    }
  }
)

/* ========================
=  Number validating
=========================== */

const numberValidateTemplate = `
<storybook-template>
  <ods-form
    :model="numberValidateForm"
    ref="numberValidateForm"
    ${propsStr}>
    <ods-form-item
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required'},
        { type: 'number', message: 'age must be a number'}
      ]">
      <ods-input
        size="hecto"
        type="age"
        v-model.number="numberValidateForm.age"
        autocomplete="off" />
    </ods-form-item>
    <ods-form-item>
      <ods-button
        size="small"
        type="primary"
        @click="submitForm('numberValidateForm')">Submit</ods-button>
      <ods-button
        type="text"
        @click="resetForm('numberValidateForm')">Reset</ods-button>
    </ods-form-item>
  </ods-form>
</storybook-template>
  `

stories.add(
  'Number validating',
  () => ({
    template: numberValidateTemplate,
    data () {
      return {
        numberValidateForm: {
          age: ''
        }
      }
    },
    props: {
      inline: {
        default: boolean('Inline form', false)
      },
      showMessage: {
        default: boolean('Show error messages', true)
      },
      inlineMessage: {
        default: boolean('Inline messages', false)
      },
      hideRequiredAsterisk: {
        default: boolean('Hide required asterisk', false)
      },
      validateOnRuleChange: {
        default: boolean('Validate on rule prop change', true)
      },
      labelPosition: {
        default: optionsKnob('Label position', labelPositions, 'top', { display: 'select' })
      },
      size: {
        default: optionsKnob('Size', formSizes, '', { display: 'select' })
      },
      disabled: {
        default: boolean('Disable form', false)
      },
      labelWidth: {
        default: text('Label width', '80px')
      },
      labelSuffix: {
        default: text('Label suffix', '')
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Form sent!',
              message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt.',
              type: 'success'
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }),
  {
    notes: {
      markdown: formMd
    }
  }
)