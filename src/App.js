import React from 'react';
import './App.css';
// import Form from 'react-jsonschema-form';
// import CSSTransitionGroup from 'react-addons-css-transition-group';
// import { Motion, spring } from 'react-motion';
// import PropTypes from 'prop-types';
// import radium from 'radium';
// import { StyleRoot } from 'radium';
// import cssModules from 'react-css-modules';
// import styles from './App.css';
// import styled from 'styled-components';
// import Perf from 'react-addons-perf';
// Doesn't work in react 16

/* class TestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: 'Varun', lastName: 'Nair' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange({ target }) {
        this.setState({ [target.name]: target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.firstName} ${this.state.lastName}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        );
    }
} */

/* const schema = {
    type: 'object',
    properties: {
        firstName: { type: 'string', default: 'Varun' },
        lastName: { type: 'string', default: 'Nair' },
    },
};
JSONSchemaForm with stateless function
const JSONSchemaForm = () => <Form schema={schema} />;
JSONSchemaForm with component
class JSONSchemaForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit({ formData }) {
        console.log(formData);
    }
    render() {
        return <Form schema={schema} onSubmit={this.handleSubmit} />;
    }
 }*/

/* class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(event) {
        switch (event.type) {
            case 'click':
                console.log('clicked');
                break;
            case 'dblclick':
                console.log('double clicked');
                break;
            default:
                console.log('unhandled', event.type);
        }
    }
    render() {
        return (
            <button onClick={this.handleEvent} onDoubleClick={this.handleEvent}>
                Click me!
            </button>
        );
    }
} */

/* // Using refs, not advised!
class Focus extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.element.focus();
    }
    render() {
        return (
            <form>
                <input type='text' ref={element => (this.element = element)} />
                <button type='button' onClick={this.handleClick}>
                    Focus
                </button>
            </form>
        );
    }
} */

/* // refs can also use component function, still not advised
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    reset() {
        this.setState({
            value: '',
        });
    }
    handleChange({ target }) {
        this.setState({
            value: target.value,
        });
    }
    render() {
        return (
            <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}
class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.element.reset();
    }
    render() {
        return (
            <form>
                <Input ref={element => (this.element = element)} />
                <button onClick={this.handleClick}>Reset</button>
            </form>
        );
    }
} */

/* // Using react-addons-css-transition-group, throws error, doesn't work
const Transition = () => (
    <CSSTransitionGroup
        transitionName='fade'
        transitionAppear
        transitionAppearTimeout={500}
    >
        <h1>Hello React</h1>
    </CSSTransitionGroup>
); */

/* // Using react-motion
const Transition = () => (
    <Motion defaultStyle={{ opacity: 0.01 }} style={{ opacity: spring(1) }}>
        {interpolatingStyle => <h1 style={interpolatingStyle}>Hello React</h1>}
    </Motion>
); */

/* // Using Svg
const Circle = ({ x, y, radius, fill }) => (
    <svg>
        <circle cx={x} cy={y} r={radius} fill={fill} />
    </svg>
);
Circle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number,
    fill: PropTypes.string,
};
Circle.defaultProps = {
    fill: 'cornflowerblue',
};
const RedCircle = ({ x, y, radius }) => (
    <Circle x={x} y={y} radius={radius} fill='coral' />
);
RedCircle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number,
}; */

/* // Using inline css
const style = {
    color: 'palevioletred',
    backgroundColor: 'papayawhip',
};
const Button = () => <button style={style}>Click me!</button>;

class FontSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 16,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target }) {
        this.setState({
            value: Number(target.value),
        });
    }
    render() {
        return (
            <input
                type='number'
                value={this.state.value}
                onChange={this.handleChange}
                style={{ fontSize: this.state.value }}
            />
        );
    }
} */

/* // Using Radium
// const styles = {
//     backgroundColor: '#ff0000',
//     width: 320,
//     padding: 20,
//     borderRadius: 5,
//     border: 'none',
//     outline: 'none',
// };
const styles = {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    ':hover': {
        color: '#fff',
    },
    ':active': {
        position: 'relative',
        top: 2,
    },
    '@media (max-width: 480px)': {
        width: 160,
    },
};
// const Button = () => <button style={styles}>Click me!</button>;
// const NewButton = radium(Button);
// export default radium(Button);
// you can import main App in StyleRoot if you use this extensively */

// const Button = () => <button styleName='button'>Click me!</button>;
// const EnhancedButton = cssModules(Button, styles);

/* // Using styled-components
// this is a component belive it or not
const Button = styled.button`
    background-color: #ff0000;
    width: 320px;
    padding: 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    &:hover {
        color: #fff;
    }
    &:active {
        position: relative;
        top: 2px;
    }
    @media (max-width: 480px) {
        width: 160px;
    }
`; */

/* // performance related
class Item extends React.PureComponent {
    static whyDidYouRender = true;
    render() {
        return <li>{this.props.item}</li>;
    }
}
class List extends React.Component {
    static whyDidYouRender = true;
    static statuses = ['open', 'close'];
    constructor(props) {
        super(props);
        this.state = {
            items: ['foo', 'bar'],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // componentWillUpdate() {}
    // componentDidUpdate() {}
    // shouldComponentUpdate(nextProps, nextState) {
    //     // if this return false, render method is not called
    //     return this.state.items !== nextState.items;
    // }
    handleClick() {
        this.setState({
            items: this.state.items.concat('baz'),
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <Item
                            key={item}
                            item={item}
                            onClick={console.log}
                            statuses={this.statuses}
                        />
                    ))}
                </ul>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
} */

/* class Form extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target }) {
        this.setState({
            value: target.value,
        });
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={() => this.props.onSubmit(this.state.value)}>
                    +
                </button>
            </div>
        );
    }
}

class List extends React.PureComponent {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }
}

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['foo', 'bar'],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(value) {
        const items = this.state.items.slice();
        items.unshift(value);
        this.setState({
            items,
        });
    }
    render() {
        return (
            <div>
                <List items={this.state.items} />
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
} */

/* // Anti-pattern of duplicate source of truth with unclear names in props and state.
// Anti-pattern of mutating state by mutability doesn't re render component
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1,
        });
        // this.state.count++;
        // doesn't update the state varibale but doesn't call the rendere, because its ubtaded bu mutability
        // but if something else updates the state using setState(), it's reflected again.
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>+</button>
                <button onClick={() => this.setState({ foo: 'bar' })}>
                    Update
                </button>
            </div>
        );
    }
} */

// Anti-pattern of using push to update state as again it updates state with mutability
/* // Using .splice() or concat() is updating with new array/immutability
class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: ['foo', 'bar'],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        /* this.state.items.push('baz');
        this.setState({
            items: this.state.items,
        }); /*
        this.setState({
            items: this.state.items.concat('baz'),
        });
    }
    render() {
        return (
            <div>
                {this.state.items.length}
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
} */

/* // After running copy item names into input and add another item by clicking the add button.
// You'll see the problem with using indexes as keys
class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: ['foo', 'bar'],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const items = this.state.items.slice();
        items.unshift('baz');
        this.setState({
            items,
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>
                            {item}
                            <input type='text' />
                        </li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
} */

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                {/* <TestForm></TestForm> */}
                {/* <JSONSchemaForm></JSONSchemaForm> */}
                {/* <Button></Button> */}
                {/* <Focus></Focus> */}
                {/* <Reset></Reset> */}
                {/* <Transition></Transition> */}
                {/* <RedCircle x={50} y={20} radius={20}></RedCircle>
                <Circle x={50} y={60} radius={20}></Circle> */}
                {/* <FontSize></FontSize> */}
                {/* <StyleRoot>
                    <NewButton />
                </StyleRoot> */}
                {/* <EnhancedButton /> */}
                {/* <List /> */}
                {/* <Todos /> */}
                {/* <Counter initialCount={1} /> */}
            </header>
        </div>
    );
}

export default App;
