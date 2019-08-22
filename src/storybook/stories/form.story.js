import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import formMd from '../md/form.md'
import { action } from '@storybook/addon-actions'
const stories = storiesOf('ODS/Form', module)

const templateDefault = `
<storybook-template>
  <ods-form
  class="ticket-form"
  :model="ticketForm"
  :rules="ticketRules"
  label-position="top"
  ref="ticketForm">
    <ods-form-item
      label="Nombre"
      prop="name">
      <ods-input
        size="hecto"
        v-model="ticketForm.name"
        auto-complete="name" />
    </ods-form-item>
    <ods-form-item
      label="Id"
      prop="id">
      <ods-input
        size="hecto"
        v-model="ticketForm.id"
        auto-complete="id"
        disabled />
    </ods-form-item>
    <ods-form-item
      label="Estado"
      prop="state">
      <ods-select
        size="hecto"
        v-model="ticketForm.state"
        auto-complete="state"
        placeholder="Seleccione un estado">
        <ods-option
          key="1"
          label="COMPLETED"
          value="COMPLETED" />
        <ods-option
          key="2"
          label="DONE"
          value="DONE" />
        <ods-option
          key="3"
          label="PENDING"
          value="PENDING" />
        <ods-option
          key="4"
          label="STOPPED"
          value="STOPPED" />
      </ods-select>
    </ods-form-item>
    <ods-form-item
      label="Descripción"
      prop="desc">
      <ods-input
        size="hecto"
        v-model="ticketForm.desc"
        auto-complete="description"
        type="textarea" />
    </ods-form-item>
    <ods-form-item
      label="Email emisor"
      prop="email">
      <ods-input
        size="hecto"
        v-model="ticketForm.email"
        type="email"
        auto-complete="email" />
    </ods-form-item>
    <ods-form-item
      label="Vía de respuesta"
      prop="response">
      <ods-input
        size="hecto"
        v-model="ticketForm.response"
        auto-complete="response" />
    </ods-form-item>
    <ods-form-item
      label="Coordenadas">
      <ods-form-item
        prop="latitud">
        <ods-input
          size="hecto"
          v-model="ticketForm.latitude"
          placeholder="latitud"
          auto-complete="lat" />
      </ods-form-item>
      <ods-form-item
        prop="longitud">
        <ods-input
          size="hecto"
          v-model="ticketForm.longitude"
          placeholder="longitud"
          auto-complete="long" />
      </ods-form-item>
    </ods-form-item>
    <ods-button
      type="primary"
      @click="submitForm('ticketForm')">Guardar incidencia</ods-button>
  </ods-form>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        ticketForm: {
          name: '',
          id: '',
          state: '',
          desc: '',
          email: '',
          response: '',
          latitude: '',
          longitude: ''
        },
        ticketRules: {
          name: [
            { required: true, message: 'Por favor, introduzca un nombre', trigger: 'blur' }
          ],
          state: [
            { required: true, message: 'Por favor, elija un estado', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Por favor, introduzca un email', trigger: 'blur' }
          ]
        }
      }
    },
    props: {},
    methods: {
      submitForm: action('submitted')
    }
  }),
  {
    notes: {
      markdown: formMd
    }
  }
)
