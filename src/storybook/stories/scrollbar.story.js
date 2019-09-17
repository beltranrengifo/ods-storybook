import { storiesOf } from '@storybook/vue'
import { boolean, object, text } from '@storybook/addon-knobs'
import scrollbarMd from '../md/scrollbar.md'
const stories = storiesOf('ODS/Scrollbar', module)

// Falta actualizar el valor de la propiedad viewClass al hacer click en el checkbox de forceHorizontal y que cambie la clase

const templateDefault = `
<storybook-template>
  <ods-row :gutter="20">
    <ods-col :span="12">
      <ods-scrollbar
        wrapClass="wrap-styles"
        :tag="tag"
        :native="native"
        :wrapStyle="wrapStyle"
        :wrapClass="wrapClass"
        :viewStyle="viewStyle"
        :viewClass="!forceHorizontal ? viewClass :  'ods-scrollbar__view--custom ods-scrollbar__view--force-horizontal'"
        :key="componentKey">
        <p>
          <strong> - ODS Scrollbar</strong>
          <small>
          XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
          </small>
        </p>
      </ods-scrollbar>
    </ods-col>
  </ods-row>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        reRenderWatchers: ['native']
      }
    },
    props: {
      tag: {
        default: text('tag', 'div')
      },
      native: {
        default: boolean('native', false)
      },
      forceHorizontal: {
        default: boolean('forceHorizontal', false)
      },
      wrapStyle: {
        default: object('Wrap styles', { height: '195px', background: '#e4ecf2', 'border-radius': '8px', padding: '10px' })
      },
      wrapClass: {
        default: text('Wrap class', 'ods-scrollbar__wrap--custom')
      },
      viewStyle: {
        default: object('View styles', { border: '1px solid grey', 'border-radius': '8px', padding: '12px' })
      },
      viewClass: {
        default: text('View class', 'ods-scrollbar__view--custom')
      }
    }
  }),
  {
    notes: {
      markdown: scrollbarMd
    }
  }
)
