import React, { Component, PureComponent, createElement } from 'react';

class HeaderTitle extends PureComponent {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

const FinalCounter = ({ counter }) => <h2>counter: {counter}</h2>;

const ButtonCounter = ({ handle, text }) =>
  createElement('button', { onClick: handle }, text);

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      title: 'My Counter',
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    const { counter, title } = this.state;
    return (
      <main>
        <header>
          <HeaderTitle title={title} />
        </header>
        <section>
          <FinalCounter counter={counter} />
          <div>
            <ButtonCounter handle={this.increment} text='Increment!' />
            <ButtonCounter handle={this.decrement} text='Decrement!' />
            <ButtonCounter handle={this.reset} text='Reset!' />
          </div>
        </section>
      </main>
    );
  }
}
