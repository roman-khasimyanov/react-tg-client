import React, { ReactElement } from 'react';
import { SelectValue } from 'antd/lib/tree-select';
import { SelectProps } from 'antd/lib/select';
import { Select } from 'antd';
import { phoneCodes } from './constants';
import { PhoneCodesKeys } from './types';

type SelectCountryCodeProps<VT extends SelectValue = SelectValue> = SelectProps<VT> & {
  displayCountryName?: boolean;
  displayPhoneCode?: boolean;
};

const SelectCountryCode = (
  props: SelectCountryCodeProps<keyof typeof phoneCodes>,
): ReactElement => {
  const {
    displayCountryName = true,
    displayPhoneCode = true,
  } = props;

  const getOptionName = (
    codeKey: PhoneCodesKeys,
  ): string => `
  ${displayCountryName ? phoneCodes[codeKey].name : ''}
  ${displayPhoneCode ? ` ${phoneCodes[codeKey].code}` : ''}
  `;

  return (
    <Select
      {...props}
      filterOption={(input, option) => {
        if (option) {
          return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return false;
      }}
    >
      {
        Object.keys(phoneCodes).map(
          (codeKey) => (
            <Select.Option
              value={codeKey}
              key={codeKey}
            >
              {getOptionName(codeKey as PhoneCodesKeys)}
            </Select.Option>
          ),
        )
      }
    </Select>
  );
};

export default SelectCountryCode;
