// import componentsImg from './assets/components.png';
// import jsxImg from './assets/jsx-ui.png';
// import propsImg from './assets/props.png';
// import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block.',
  },

  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return dynamic HTML-like code.',
  },

  {
    image: propsImg,
    title: 'Props',
    description:
      'Pass data between components.',
  },

  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed component data.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are reusable UI building blocks.',
    code: `
function Welcome() {
  return <h1>Hello React!</h1>;
}
    `,
  },

  jsx: {
    title: 'JSX',
    description:
      'JSX allows writing HTML inside JavaScript.',
    code: `
const element = <h1>Hello JSX</h1>;
    `,
  },

  props: {
    title: 'Props',
    description:
      'Props are used to pass data.',
    code: `
function App() {
  return <Welcome name="Stuti" />;
}
    `,
  },

  state: {
    title: 'State',
    description:
      'State allows dynamic UI updates.',
    code: `
const [count, setCount] = useState(0);
    `,
  },
};