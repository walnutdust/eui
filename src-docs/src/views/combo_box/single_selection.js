import React, { Component } from 'react';

import { EuiComboBox } from '../../../../src/components';
import { DisplayToggles } from '../form_controls/display_toggles';

export default class extends Component {
  constructor(props) {
    super(props);

    this.options = [
      {
        label: 'Titan',
        'data-test-subj': 'titanOption',
      },
      {
        label: 'Enceladus',
      },
      {
        label: 'Mimas',
      },
      {
        label: 'Dione',
      },
      {
        label: 'Iapetus',
      },
      {
        label: 'Phoebe',
      },
      {
        label: 'Rhea',
      },
      {
        label:
          "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
      },
      {
        label: 'Tethys',
      },
      {
        label: 'Hyperion',
      },
    ];

    this.state = {
      selectedOptions: [this.options[2]],
    };
  }

  onChange = selectedOptions => {
    // We should only get back either 0 or 1 options.
    this.setState({
      selectedOptions: selectedOptions,
    });
  };

  render() {
    const { selectedOptions } = this.state;
    return (
      <DisplayToggles
        canDisabled={false}
        canReadOnly={false}
        canLoading={false}
        canPrepend
        canAppend>
        <EuiComboBox
          placeholder="Select a single option"
          singleSelection={{ asPlainText: true }}
          options={this.options}
          selectedOptions={selectedOptions}
          onChange={this.onChange}
          isClearable={false}
        />
      </DisplayToggles>
    );
  }
}
