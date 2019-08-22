# Form

Form consiste en `input`, `radio`, `select`, `checkbox`, etcétera. Con el formulario, usted puede recopilar, verificar y enviar datos.

##  Form básico

Incluye todo tipo de entradas, tales como `input`, `select`, `radio` y `checkbox`.

 En cada componente `form`, necesita un campo `form-item` para que sea el contenedor del item.

Para cumplir con los estádares de accessibilidad AAA es necesario especificar la propiedad `prop`con valor único

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) reglamenta que cuando solo hay un campo de entrada de texto de una sola línea en un formulario, el agente usuario debe aceptar <b>Enter</b> en ese campo como una solicitud para enviar el formulario. Para prevenir este comportamiento, puede agregar `@submit.native.prevent` on `<ods-form>`.

```html
<ods-form class="ticket-form" label-position="top" :model="ticketForm" :rules="ticketRules" ref="ticketForm">
  <div class="default-form">
      <div style="width:600px">
        <ods-row :gutter="32">
          <ods-col :span="8">
            <ods-form-item label="Nombre" prop="name">
              <ods-input v-model="ticketForm.name" auto-complete="name"></ods-input>
            </ods-form-item>
          </ods-col>
          <ods-col :span="8">
            <ods-form-item label="Id" prop="id">
              <ods-input v-model="ticketForm.id" auto-complete="id" disabled></ods-input>
            </ods-form-item>
          </ods-col>
          <ods-col :span="8">
            <ods-form-item label="Estado" prop="state">
              <ods-select v-model="ticketForm.state" auto-complete="state" placeholder="Seleccione un estado">
                <ods-option key="1" label="COMPLETED" value="COMPLETED"></ods-option>
                <ods-option key="2" label="DONE" value="DONE"></ods-option>
                <ods-option key="3" label="PENDING" value="PENDING"></ods-option>
                <ods-option key="4" label="STOPPED" value="STOPPED"></ods-option>
              </ods-select>
            </ods-form-item>
          </ods-col>
        </ods-row>

        <ods-row :gutter="32">
          <ods-col :span="16">
            <ods-form-item label="Descripción" prop="desc">
              <ods-input v-model="ticketForm.desc" auto-complete="description" type="textarea"></ods-input>
            </ods-form-item>
          </ods-col>
        </ods-row>

        <ods-row :gutter="32">
          <ods-col :span="8">
            <ods-form-item label="Email emisor" prop="email">
              <ods-input v-model="ticketForm.email" type="email" auto-complete="email"></ods-input>
            </ods-form-item>
          </ods-col>
          <ods-col :span="8">
            <ods-form-item label="Vía de respuesta" prop="response">
              <ods-input v-model="ticketForm.response" auto-complete="response"></ods-input>
            </ods-form-item>
          </ods-col>
          <ods-col :span="8">
            <ods-form-item label="Coordenadas">
              <ods-row :gutter="8">
                <ods-col :span="12">
                  <ods-form-item prop="latitud">
                    <ods-input v-model="ticketForm.latitude" placeholder="latitud" auto-complete="lat"></ods-input>
                  </ods-form-item>
                </ods-col>
                <ods-col :span="12">
                  <ods-form-item prop="longitud">
                    <ods-input v-model="ticketForm.longitude" placeholder="longitud" auto-complete="long"></ods-input>
                  </ods-form-item>
                </ods-col>
              </ods-row>
            </ods-form-item>
          </ods-col>
        </ods-row>
      </div>
  </div>
  <ods-row class="buttons-row" type="flex">
    <ods-button v-if="create" type="text" @click="goBack">Cancelar</ods-button>
    <ods-button v-if="!create" type="text" @click="goBack">Volver</ods-button>
    <ods-button type="primary" @click="submitForm('ticketForm')">Guardar incidencia</ods-button>
  </ods-row>
</ods-form>
<script>
{
  data() {
    return {
      create: true,
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
  methods: {
    goBack() {
      // my custom method
    }
  }
}
</script>
```

## Formulario inline

Cuando el espacio vertical es limitado y la forma es relativamente simple, puede ponerlo en una única línea.

Establezca el atributo `inline` como `true` y el formulario sera inline.

```html
<ods-form :inline="true" :model="formInline" class="demo-form-inline">
  <ods-form-item label="Approved by">
    <ods-input v-model="formInline.user" placeholder="Approved by"></ods-input>
  </ods-form-item>
  <ods-form-item label="Activity zone">
    <ods-select v-model="formInline.region" placeholder="Activity zone">
      <ods-option label="Zone one" value="shanghai"></ods-option>
      <ods-option label="Zone two" value="beijing"></ods-option>
    </ods-select>
  </ods-form-item>
  <ods-form-item>
    <ods-button type="primary" @click="onSubmit" size="medium">Send</ods-button>
  </ods-form-item>
</ods-form>
<script>
{
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
```

## Reglas personalizadas de validación

Este ejemplo muestra cómo personalizar sus propias reglas de validación para finalizar una verificación de contraseña de dos pasos.

 Aquí utilizamos el `status-icon` para reflejar el resultado de la validación como un icono.

```html
<ods-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
  <ods-form-item label="Password" prop="pass">
    <ods-input type="password" v-model="ruleForm2.pass" auto-complete="off"></ods-input>
  </ods-form-item>
  <ods-form-item label="Confirm" prop="checkPass">
    <ods-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></ods-input>
  </ods-form-item>
  <ods-form-item label="Age" prop="age">
    <ods-input v-model.number="ruleForm2.age"></ods-input>
  </ods-form-item>
  <ods-form-item>
    <ods-button type="primary" @click="submitForm('ruleForm2')">Submit</ods-button>
    <ods-button @click="resetForm('ruleForm2')">Reset</ods-button>
  </ods-form-item>
</ods-form>
<script>
{
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
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
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    } ,
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
```

## Eliminar o agregar validaciones dinamicamente

 Además de pasar todas las reglas de validación al mismo tiempo en el componente `form`, también puede pasar las reglas de validación o borrar reglas en un único campo de formulario de forma dinámica.

```html
<ods-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <ods-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
    ]"
  >
    <ods-input v-model="dynamicValidateForm.email"></ods-input>
  </ods-form-item>
  <ods-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Dominio ' + (Number(index)+Number(1))"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }">
    <ods-input size="mega" v-model="domain.value"></ods-input>
    <ods-button type="text" @click.prevent="removeDomain(domain)">Borrar</ods-button>
  </ods-form-item>
  <ods-form-item>
    <ods-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</ods-button>
    <ods-button @click="addDomain">New domain</ods-button>
    <ods-button @click="resetForm('dynamicValidateForm')">Reset</ods-button>
  </ods-form-item>
</ods-form>
<script>
{
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          key: 1,
          value: ''
        }],
        email: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        key: Date.now(),
        value: ''
      });
    }
  }
}
</script>

```

## Validación numerica

La validacion numerica necesita un modificador `.number` añadido en el enlace `v-model` de entrada, sirve para transformar el valor de la cadena al número proporcionado por Vuejs.

Cuando un `ods-form-item` está anidado en otro `ods-form-item`, su ancho de etiqueta será 0. Si es necesario, puede establecer el ancho de etiqueta en ese `ods-form-item`.

```html
<ods-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <ods-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <ods-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></ods-input>
  </ods-form-item>
  <ods-form-item>
    <ods-button type="primary" @click="submitForm('numberValidateForm')">Submit</ods-button>
    <ods-button @click="resetForm('numberValidateForm')">Reset</ods-button>
  </ods-form-item>
</ods-form>

<script>
{
  data() {
    return {
      numberValidateForm: {
        age: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
```

## Form Atributos

| Atributo                | Descripción                              | Tipo    | Valores aceptados     | Por defecto |
| ----------------------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| model                   | Datos del componente                     | object  | —                     | —           |
| rules                   | Reglas de validación                     | object  | —                     | —           |
| inline                  | Si el form es inline                     | boolean | —                     | false       |
| labods-position          | Posicion de la etiqueta                  | string  | left / right / top    | right       |
| labods-width             | ancho de la etiqueta, y todos los form items directos descendientes heredarán este valor | string  | —                     | —           |
| labods-suffix            | sufijo de la etiqueta                    | string  | —                     | —           |
| show-message            | si mostrar o no el mensaje de error      | boolean | —                     | true        |
| inline-message          | si desea visualizar el mensaje de error inline con la posición del form item | boolean | —                     | false       |
| status-icon             | si desea visualizar un icono que indique el resultado de la validación | boolean | —                     | false       |
| validate-on-rule-change | si se dispara la validacion cuando el prop `rules` cambia | boolean | —                     | true        |
| size                    | el tamaño de los componentes en este form | string  | medium / small / mini | —           |
| disabled                | si se desactivan todos los componentes del formulario. Si esta en `true` no puede ser cambiado por el prop `disabled` individual de los componentes. | boolean | —                     | false       |

### Form Metodos

| Metodo        | Descripción                              | Parametros                               |
| ------------- | ---------------------------------------- | ---------------------------------------- |
| validate      | el método para validar todo el formulario. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Devuelve una promesa si se omite el return | Function(callback: Function(boolean, object))    |
| validateField | el método para validar un determinado form item | Function(prop: string, callback: Function(errorMessage: string)) |
| resetFields   | restablece todos los campos y elimina el resultado de validación | —                                        |
| clearValidate | limpia mensaje de validación para todos los campos | -

### Form Events

| Nombre   | Descripción                                          | Parametros                                                   |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| validate | se dispara después de validar un item del formulario | la propiedad (`prop name`) nombre del item del form que se esta validando, si la validacion paso o no. |

### Form-Item Atributos

| Atributo       | Descripción                              | Tipo    | Valores aceptados                   | Por defecto |
| -------------- | ---------------------------------------- | ------- | ----------------------------------- | ----------- |
| prop           | un key de `model`. En el uso del método validate and resetFields, el atributo es obligatorio. | string  | keys of model that passed to `form` |             |
| label          | etiqueta                                 | string  | —                                   | —           |
| labods-width    | ancho de la etiqueta, e.g. '50px'        | string  | —                                   | —           |
| required       | si el campo es obligatorio o no, estará determinado por las reglas de validación si se omite. | boolean  | —                                   | false       |
| rules          | reglas de validacion del form            | object  | —                                   | —           |
| error          | mensaje de error de campo, establezca su valor y el campo validará el error y mostrará este mensaje inmediatamente. | string  | —                                   | —           |
| show-message   | si mostrar o no el mensaje de error      | boolean | —                                   | true        |
| inline-message | mensaje de validación estilo inline      | boolean | —                                   | false       |
| size           | Tamaño de los componentes en este form item | string  | medium / small / mini               | -           |

### Form-Item Slot

| Nombre | Descripción              |
| ------ | ------------------------ |
| —      | contenido del Form Item  |
| label  | contenido de la etiqueta |

### Form-Item Metodo

| Metodo     | Descripción                              | Parametros |
| ---------- | ---------------------------------------- | ---------- |
| resetField | restablecer campo actual y eliminar resultado de validación | —          |
