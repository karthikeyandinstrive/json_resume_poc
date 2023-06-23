import TreeSelect, { FreeSoloNode } from 'mui-tree-select';
import React, { useEffect, useState } from 'react';
import { TextField } from '../index';
let sampleData = [];

class Node {
  constructor(value) {
    this.value = value;
  }
  getParent() {
    const parent = (() => {
      if (this.value && 'L2' in this.value) {
        return null;
      } else if (this.value && 'L3' in this.value) {
        return (
          sampleData.find(({ L2 }) =>
            L2.some(({ id }) => id === this.value.id)
          ) || null
        );
      } else {
        for (const { L2 } of sampleData) {
          const state = L2.find(({ L3 }) =>
            L3.some(({ id }) => id === this.value.id)
          );
          if (state) {
            return state;
          }
        }
        return null;
      }
    })();
    return parent ? new Node(parent) : parent;
  }
  getChildren() {
    if (this.value && 'L2' in this.value) {
      return this.value.L2.map((L3) => new Node(L3));
    } else if (this.value && 'L3' in this.value) {
      return this.value.L3.map((L4) => new Node(L4));
    } else {
      return null;
    }
  }
  isBranch() {
    return 'L2' in this.value || 'L3' in this.value;
  }
  isEqual(to) {
    return to.value.id === this.value.id;
  }
  toString() {
    return this.value.id + ' - ' + this.value.name;
  }
}
const syncOrAsync = function (value, returnAsync) {
  if (returnAsync) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(value), Math.random() * 500)
    );
  }
  return value;
};
const MultiTreeSelect = ({
  label,
  onChangeSelect,
  industryMultiTree,
  defaultIndustries = null,
  error,
  readOnly,
  helperText,
}) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (defaultIndustries !== null) {
      setValue(() => new Node(defaultIndustries));
    } else {
      setValue(() => defaultIndustries);
      new Node(null);
    }
  }, [defaultIndustries]);

  // const [runAsync, setRynAsync] = useState(false);

  sampleData = industryMultiTree;
  return (
    <div>
      <TreeSelect
        getChildren={(node) =>
          syncOrAsync(
            node
              ? node.getChildren()
              : industryMultiTree.map((country) => new Node(country)),
            false
          )
        }
        getOptionDisabled={(option) => {
          var _a;
          return (
            option.isBranch() &&
            !((_a = option.getChildren()) === null || _a === void 0
              ? void 0
              : _a.length)
          );
        }}
        getParent={(node) => syncOrAsync(node.getParent(), false)}
        isBranch={(node) => syncOrAsync(node.isBranch(), false)}
        isOptionEqualToValue={(option, value) => {
          return option instanceof FreeSoloNode ? false : option.isEqual(value);
        }}
        value={value}
        renderInput={(params) =>
          readOnly ? (
            value != null ? (
              <TextField
                {...params}
                multiline
                sx={{ my: 2 }}
                variant={readOnly ? 'outlined' : 'outlined'}
                InputProps={{
                  readOnly: true,
                }}
                value='N/A'
                readOnly
                label={label}
                error={error}
                helperText={helperText}
              />
            ) : (
              <TextField
                multiline
                sx={{ my: 2 }}
                variant={readOnly ? 'outlined' : 'outlined'}
                InputProps={{
                  readOnly: true,
                }}
                value='N/A'
                readOnly
                label={label}
                error={error}
                helperText={helperText}
              />
            )
          ) : (
            <TextField
              {...params}
              sx={{ mt: 2 }}
              multiline
              label={label}
              error={error}
              helperText={helperText}
            />
          )
        }
        onChange={(_, value, reason) => {
          onChangeSelect(value);
        }}
      />
    </div>
  );
};

export default MultiTreeSelect;
