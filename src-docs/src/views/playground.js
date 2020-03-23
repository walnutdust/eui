import React, { Component } from 'react';

import { LiveProvider, LivePreview, LiveContext } from 'react-live';

import {
  EuiButton,
  EuiCodeEditor,
  EuiSpacer,
  EuiCallOut,
  EuiCodeBlock,
} from '../../../src/components/';

import 'brace/theme/tomorrow';
import 'brace/mode/jsx';
import 'brace/snippets/jsx';

export default class Playground extends Component {
  static defaultProps = {
    value: `
`,
    mode: 'jsx',
    theme: 'tomorrow',
    width: '100%',
    height: '200px',
    fontSize: '18px',
    autoComplete: [],
  };

  state = {
    value: this.props.value,
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { mode, theme, width, height, fontSize, autoComplete } = this.props;

    const codeEditorOptions = {
      fontSize,
      enableBasicAutocompletion: [
        {
          getCompletions: function(editor, session, pos, prefix, callback) {
            callback(null, autoComplete);
          },
          getDocTooltip: function(item) {
            if (item.type === 'props' && !item.docHTML) {
              const {
                caption,
                propDescription = '',
                propType = '',
                defaultParam = '',
              } = item;
              item.docHTML = [
                `<b>${caption}</b><hr>`,
                `${propDescription}`,
                `${propType ? `Type: ${propType}` : ''}`,
                `${defaultParam ? `Default: ${defaultParam}` : ''}`,
              ]
                .filter(str => str !== '')
                .join('\n');
            }
          },
        },
      ],
      enableSnippets: true,
      enableLiveAutocompletion: true,
    };

    return (
      <div>
        <LiveProvider code={this.state.value} scope={{ EuiButton }}>
          <LivePreview />
          <EuiSpacer size="m" />
          <LiveContext.Consumer>
            {({ error }) => {
              if (!error) return null;

              const splitError = error.split('\n');
              const errorMessage = splitError[0];
              const errorCode = splitError.slice(1).join('\n');

              return (
                <EuiCallOut
                  title={errorMessage}
                  color="danger"
                  iconType="alert">
                  <EuiCodeBlock language="jsx" paddingSize="s" fontSize="m">
                    {errorCode}
                  </EuiCodeBlock>
                </EuiCallOut>
              );
            }}
          </LiveContext.Consumer>
          <EuiSpacer size="m" />
          <EuiCodeEditor
            value={this.state.value}
            onChange={this.onChange}
            mode={mode}
            theme={theme}
            width={width}
            height={height}
            setOptions={codeEditorOptions}
          />
        </LiveProvider>
      </div>
    );
  }
}
