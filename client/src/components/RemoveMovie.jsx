import React from 'react';

class RemoveMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onRemoveHandle(this.state.value);
    this.state.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Remove Movie'/>
        </label>
        <input type="submit" value="Remove" />
      </form>
    );
  }
}
export default RemoveMovie;
