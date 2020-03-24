import React from 'react';
import { formatDate } from '../../../../../src/services/format';
import { createDataStore } from '../data_store';

import {
  EuiBasicTable,
  EuiLink,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiButton,
} from '../../../../../src/components';

import Playground from '../../playground';

import uniqBy from 'lodash/uniqBy';

/*
Example user object:

{
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true
}

Example country object:

{
  code: 'NL',
  name: 'Netherlands',
  flag: '🇳🇱'
}
*/

const store = createDataStore();

// In React components, we cannot have arrow functions
// see: https://github.com/FormidableLabs/react-live/issues/117
// Component classes also need to bind its functions.
const sampleCode = `class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Pagination
      pageIndex: 0,
      pageSize: 5,
      showPerPageOptions: true,

      // Sorting
      sortField: 'firstName',
      sortDirection: 'asc',

      // Selection
      selectedItems: [],
    };

    this.onTableChange = this.onTableChange.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onTableChange({ page = {}, sort = {} }) {
    const { index: pageIndex, size: pageSize } = page;

    const { field: sortField, direction: sortDirection } = sort;

    this.setState({
      pageIndex,
      pageSize,
      sortField,
      sortDirection,
    });   
  };

  onClickDelete() {
    const { selectedItems } = this.state;
    store.deleteUsers(...selectedItems.map(user => user.id));

    this.setState({
      selectedItems: [],
    });
  };

  renderDeleteButton() {
    const { selectedItems } = this.state;

    if (selectedItems.length === 0) {
      return;
    }

    return (
      <EuiButton color="danger" iconType="trash" onClick={this.onClickDelete}>
        Delete {selectedItems.length} Users
      </EuiButton>
    );
  }

  renderStatus(online) {
    const color = online ? 'success' : 'danger';
    const label = online ? 'Online' : 'Offline';
    return <EuiHealth color={color}>{label}</EuiHealth>;
  };

  onSelectionChange(selectedItems) {
    this.setState({ selectedItems });
  };

  render() {
    const { pageIndex, pageSize, showPerPageOptions, sortField, sortDirection } = this.state;

    const { pageOfItems, totalItemCount } = store.findUsers(
      pageIndex,
      pageSize,
      sortField,
      sortDirection
    );

    const deleteButton = this.renderDeleteButton();

    const columns = [
      {
        field: 'firstName',
        name: 'First Name',
        truncateText: true,
        sortable: true,
        footer: <em>Page totals:</em>,
        hideForMobile: true,
        mobileOptions: {
          show: false,
        },
      },
      {
        field: 'lastName',
        name: 'Last Name',
        truncateText: true,
        mobileOptions: {
          show: false,
        },
      },
      {
        field: 'firstName',
        name: 'Full Name',
        mobileOptions: {
          header: false,
          only: true,
          enlarge: true,
          fullWidth: true,
        },
        render: (name, item) => (
          <EuiFlexGroup responsive={false} alignItems="center">
            <EuiFlexItem>
              {item.firstName} {item.lastName}
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              {this.renderStatus(item.online)}
            </EuiFlexItem>
          </EuiFlexGroup>
        ),
      },
      {
        field: 'github',
        name: 'Github',
        footer: ({ items }) => (
            <span>{uniqBy(items, 'github').length} users</span>
          ),
        render: (username) => (
          <EuiLink href={\`https:\\\/\\\/github.com/$\{username\}\`} target="_blank">
            {username}
          </EuiLink>
        ),
      },
      {
        field: 'dateOfBirth',
        name: 'Date of Birth',
        sortable: true,
        dataType: 'date',
        render: (date) => formatDate(date, 'dobLong'),
      },
      {
        field: 'nationality',
        name: 'Nationality',
        footer: ({ items }) => (
            <span>{uniqBy(items, 'nationality').length} countries</span>
          ),
        render: (countryCode) => {
          const country = store.getCountry(countryCode);
          return \`$\{country.flag\} $\{country.name\}\`;
        },
      },
      {
        field: 'online',
        name: 'Online',
        sortable: true,
        dataType: 'boolean',
        footer: ({ items }) => (
            <span>{items.filter(i => !!i.online).length} online</span>
          ),
        render: (online) => this.renderStatus(online),
      },
    ];

    // PAGINATION
     
    const pagination = {
       pageIndex,
       pageSize,
       totalItemCount,
       pageSizeOptions: [3, 5, 8],
       hidePerPageOptions: !showPerPageOptions,
     };

    // SORTING

    const sorting = {
      sort: {
        field: sortField,
        direction: sortDirection,
      },
    };

    // SELECTION

    const selection = {
      selectable: user => user.online,
      selectableMessage: selectable =>
        !selectable ? 'User is currently offline' : undefined,
      onSelectionChange: this.onSelectionChange,
    };

    return (
      <>
        {deleteButton}
        <EuiBasicTable
          items={pageOfItems}
          itemId="id"
          columns={columns}
          pagination={pagination}
          sorting={sorting}
          isSelectable={true}
          selection={selection}
          onChange={this.onTableChange}
          rowHeader="firstName"
        />
      </>
    );
  }
}
`;

export const BasicPlayground = (docInfo = null) => (
  <Playground
    value={sampleCode}
    autoComplete={docInfo}
    height="500px"
    scope={{
      EuiBasicTable,
      formatDate,
      EuiHealth,
      EuiLink,
      store,
      EuiCode,
      EuiFlexGroup,
      EuiFlexItem,
      EuiButton,
      uniqBy,
    }}
  />
);
