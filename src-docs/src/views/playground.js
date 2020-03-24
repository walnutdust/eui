import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LiveProvider, LivePreview, LiveContext } from 'react-live';

import {
  EuiCodeEditor,
  EuiSpacer,
  EuiCallOut,
  EuiCodeBlock,
} from '../../../src/components/';

import 'brace/theme/tomorrow';
import 'brace/mode/jsx';
import 'brace/snippets/jsx';

export default class Playground extends Component {
  state = {
    value: this.props.value,
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const {
      mode,
      theme,
      width,
      height,
      fontSize,
      autoComplete,
      scope,
    } = this.props;

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
                description = '',
                propType = '',
                defaultValue = '',
              } = item;
              item.docHTML = [
                `<b>${caption}</b><hr>`,
                `${description}`,
                `${propType ? `<b>Type</b>: ${propType}` : ''}`,
                `${defaultValue ? `<b>Default</b>: ${defaultValue}` : ''}`,
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
        <LiveProvider code={this.state.value} scope={scope}>
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

Playground.propTypes = {
  value: PropTypes.string,
  mode: PropTypes.string,
  theme: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  autoComplete: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  scope: PropTypes.object,
};

Playground.defaultProps = {
  value: `
`,
  mode: 'jsx',
  theme: 'tomorrow',
  width: '100%',
  height: '200px',
  fontSize: '18px',
  autoComplete: [],
  scope: {},
};
