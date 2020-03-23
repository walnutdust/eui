import React from 'react';

import Playground from '../playground';

const sampleCode = `<EuiButton
iconSide="left"
color="primary"
size="m"
fill={false}
type="button">
Button Text
</EuiButton>
`;

const autoComplete = [
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'iconSide',

    // Actual value that gets filled up when user selects the option.
    value: 'iconSide="left"',

    // Information in tooltip.
    propDescription: 'Side that icon will appear.',
    propType: '"left" | "right"',
    default: 'left',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'color',

    // Actual value that gets filled up when user selects the option.
    value: 'color="primary"',

    // Information in tooltip.
    propDescription: 'text color is set for deprecation.',
    propType: '"primary", "secondary", "warning", "danger", "ghost", "text"',
    default: 'primary',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'size',

    // Actual value that gets filled up when user selects the option.
    value: 'size="m"',

    // Information in tooltip.
    propType: '"s" | "m"',
    default: 'm',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'fill',

    // Actual value that gets filled up when user selects the option.
    value: 'fill={false}',

    // Information in tooltip.
    propType: 'bool',
    default: 'false',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'type',

    // Actual value that gets filled up when user selects the option.
    value: 'type="button"',

    // Information in tooltip.
    default: 'button',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'href',

    // Actual value that gets filled up when user selects the option.
    value: 'href={href}',

    // Information in tooltip.
    propType: 'string',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'onClick',

    // Actual value that gets filled up when user selects the option.
    value: 'onClick={onClick}',

    // Information in tooltip.
    propType: 'func',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'iconType',

    // Actual value that gets filled up when user selects the option.
    value: 'iconType={iconType}',

    // Information in tooltip.
    propType: 'enum, string, or element',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'isLoading',

    // Actual value that gets filled up when user selects the option.
    value: 'isLoading={isLoading}',

    // Information in tooltip.
    propType: 'bool',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'isDisabled',

    // Actual value that gets filled up when user selects the option.
    value: 'isDisabled={isDisabled}',

    // Information in tooltip.
    propType: 'bool',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'fullWidth',

    // Actual value that gets filled up when user selects the option.
    value: 'fullWidth={fullWidth}',

    // Information in tooltip.
    propType: 'bool',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'contentProps',

    // Actual value that gets filled up when user selects the option.
    value: 'contentProps={contentProps}',

    // Information in tooltip.
    propType: 'any',
    propDescription:
      "Object of props passed to the <span /> wrapping the button's content",
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'textProps',

    // Actual value that gets filled up when user selects the option.
    value: 'textProps={textProps}',

    // Information in tooltip.
    propType: 'any',
    propDescription:
      "Object of props passed to the <span /> wrapping the component's {children}",
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'className',

    // Actual value that gets filled up when user selects the option.
    value: 'className={className}',

    // Information in tooltip.
    propType: 'string',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'aria-label',

    // Actual value that gets filled up when user selects the option.
    value: 'ariaLabel={ariaLabel}',

    // Information in tooltip.
    propType: 'string',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'dataTestSubj',

    // Actual value that gets filled up when user selects the option.
    value: 'dataTestSubj={dataTestSubj}',

    // Information in tooltip.
    propType: 'string',
  },
  {
    // Prop descriptions should all have this.
    type: 'props',
    meta: 'props',

    // Autocomplete title
    caption: 'buttonRef',

    // Actual value that gets filled up when user selects the option.
    value: 'buttonRef={buttonRef}',

    // Information in tooltip.
    propType: 'any',
  },
];

export default () => (
  <Playground value={sampleCode} autoComplete={autoComplete} />
);
