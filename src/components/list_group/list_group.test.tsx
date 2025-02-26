import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';

import { EuiListGroup, GUTTER_SIZES } from './list_group';
import { EuiListGroupItemProps } from './list_group_item';

const someListItems: EuiListGroupItemProps[] = [
  {
    label: 'Label with iconType',
    iconType: 'stop',
  },
  {
    label: 'Custom extra action',
    extraAction: {
      iconType: 'bell',
      alwaysShow: true,
    },
  },
  {
    label: 'Button with onClick',
    onClick: e => {
      console.log('Visualize clicked', e);
    },
  },
  {
    label: 'Link with href',
    href: '#',
  },
];

describe('EuiListGroup', () => {
  test('is rendered', () => {
    const component = render(<EuiListGroup {...requiredProps} />);

    expect(component).toMatchSnapshot();
  });

  test('is rendered with listItems', () => {
    const component = render(<EuiListGroup listItems={someListItems} />);

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    test('bordered is rendered', () => {
      const component = render(<EuiListGroup bordered />);

      expect(component).toMatchSnapshot();
    });

    test('flush is rendered', () => {
      const component = render(<EuiListGroup flush />);

      expect(component).toMatchSnapshot();
    });

    test('showToolTips is rendered', () => {
      const component = render(<EuiListGroup showToolTips />);

      expect(component).toMatchSnapshot();
    });

    test('wrapText is rendered', () => {
      const component = render(<EuiListGroup wrapText />);

      expect(component).toMatchSnapshot();
    });

    describe('gutter size', () => {
      GUTTER_SIZES.forEach(gutter => {
        test(`${gutter} is rendered`, () => {
          const component = render(<EuiListGroup gutterSize={gutter} />);

          expect(component).toMatchSnapshot();
        });
      });
    });

    describe('maxWidth', () => {
      test('as true is rendered', () => {
        const component = render(<EuiListGroup maxWidth={true} />);

        expect(component).toMatchSnapshot();
      });

      test('as a number is rendered', () => {
        const component = render(<EuiListGroup maxWidth={300} />);

        expect(component).toMatchSnapshot();
      });

      test('as a string is rendered', () => {
        const component = render(<EuiListGroup maxWidth="20em" />);

        expect(component).toMatchSnapshot();
      });
    });
  });
});
