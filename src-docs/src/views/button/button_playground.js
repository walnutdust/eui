import React, { Component } from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';

import {
  EuiButton,
  EuiCodeEditor,
  EuiSpacer,
} from '../../../../src/components/';

import 'brace/theme/tomorrow';
import 'brace/mode/jsx';
import 'brace/snippets/jsx';

export default class ButtonPlayground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: `<EuiButton
    iconSide="left"
    color="primary"
    size="m"
    fill={false}
    type="button">
    Button Text
</EuiButton>
    `,
    };
  }
  static defaultProps = {
    mode: 'jsx',
    theme: 'tomorrow',
    width: '100%',
    height: '200px',
    setOptions: {
      fontSize: '18px',
      enableBasicAutocompletion: [
        {
          getCompletions: function(editor, session, pos, prefix, callback) {
            callback(null, [
              {
                value: 'iconSide="left"',
                caption: 'iconSide',
                type: 'props',
                meta: 'props',
                propDescription: 'Side that icon will appear.',
                propType: '"left" | "right"',
                default: 'left',
              },
            ]);
          },
          getDocTooltip: function(item) {
            if (item.type === 'props' && !item.docHTML) {
              item.docHTML = `<b>${item.caption}</b><hr></hr>${
                item.propDescription
              }<br />Type: ${item.propType}<br />Default: ${item.default}`;
            }
          },
        },
      ],
      enableLiveAutocompletion: true,
    },
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <LiveProvider code={this.state.value} scope={{ EuiButton }}>
          <LivePreview />
          <EuiSpacer size="s" />
          <LiveError />
          <EuiSpacer size="s" />
          <EuiCodeEditor
            value={this.state.value}
            onChange={this.onChange}
            {...ButtonPlayground.defaultProps}
          />
        </LiveProvider>
      </div>
    );
  }
}
