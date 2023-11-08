import { Component } from 'react';
import {
  ButtonSerch,
  FormSerch,
  HeaderSerch,
  InputSerch,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  onChangeInput = evt => {
    this.setState({
      name: evt.target.value.trim().toLowerCase(),
    });
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <HeaderSerch>
        <FormSerch onSubmit={this.submitForm}>
          <ButtonSerch type="submit">
            <span>
              <BsSearch />
            </span>
          </ButtonSerch>

          <InputSerch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
            name="name"
            value={this.state.name}
          />
        </FormSerch>
      </HeaderSerch>
    );
  }
}
