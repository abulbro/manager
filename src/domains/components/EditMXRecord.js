import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ModalFormGroup, Input } from 'linode-components/forms';
import { onChange } from 'linode-components/forms/utilities';
import { FormModalBody } from 'linode-components/modals';

import api from '~/api';
import { dispatchOrStoreErrors } from '~/api/util';


export default class EditMXRecord extends Component {
  constructor(props) {
    super();

    const { id, zone: { domain: zone } } = props;
    const {
      target: mailserver,
      name: subdomain,
      priority: preference,
    } = props.zone._records.records[id] || {};

    this.state = {
      errors: {},
      zone,
      mailserver,
      subdomain,
      preference,
    };

    this.onChange = onChange.bind(this);
  }

  onSubmit = () => {
    const { dispatch, id, close } = this.props;
    const { mailserver, subdomain, preference } = this.state;
    const ids = [this.props.zone.id, id].filter(Boolean);
    const data = {
      target: mailserver,
      // '' is the default and will track the zone
      name: subdomain === this.props.zone.domain ? '' : subdomain,
      priority: +preference,
      type: 'MX',
    };

    return dispatch(dispatchOrStoreErrors.call(this, [
      () => api.domains.records[id ? 'put' : 'post'](data, ...ids),
      close,
    ]));
  }

  render() {
    const { close, title, id } = this.props;
    const { errors, zone, subdomain, preference, mailserver } = this.state;

    const analytics = { title, action: id ? 'edit' : 'add' };

    return (
      <FormModalBody
        onSubmit={this.onSubmit}
        onCancel={close}
        buttonText={id ? undefined : 'Add MX Record'}
        buttonDisabledText={id ? undefined : 'Adding MX Record'}
        analytics={analytics}
        errors={errors}
      >
        <div>
          <ModalFormGroup id="mailserver" label="Mail Server" apiKey="target" errors={errors}>
            <Input
              id="mailserver"
              name="mailserver"
              value={mailserver}
              placeholder="mx.domain.com"
              onChange={this.onChange}
            />
          </ModalFormGroup>
          <ModalFormGroup label="Preference" id="preference" apiKey="priority" errors={errors}>
            <Input
              id="preference"
              name="preference"
              value={preference}
              placeholder="10"
              type="number"
              onChange={this.onChange}
            />
          </ModalFormGroup>
          <ModalFormGroup label="Subdomain" id="subdomain" apiKey="name" errors={errors}>
            <Input
              id="subdomain"
              name="subdomain"
              value={subdomain || zone}
              placeholder="domain.com"
              onChange={this.onChange}
            />
          </ModalFormGroup>
        </div>
      </FormModalBody>
    );
  }
}

EditMXRecord.propTypes = {
  dispatch: PropTypes.func.isRequired,
  zone: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  id: PropTypes.number,
};
