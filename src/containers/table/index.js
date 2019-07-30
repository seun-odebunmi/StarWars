import React, { useState } from 'react';

import Table from '../../components/table';
import Filter from '../../components/filter';
import { calcSum, sortData, getGenders, filterData } from '../../helpers';
import './table.scss';

const TableContainer = ({ data }) => {
  const initChars = {
    initData: data,
    rows: data,
    total: { chars: data.length, height: calcSum(data) },
    columns: ['name', 'gender', 'height']
  };
  const initConfig = {
    sortBy: 'name',
    ascOrder: true,
    genders: getGenders(data)
  };

  const [chars, setChars] = useState(initChars);
  const [config, setConfig] = useState(initConfig);

  const sortHeader = sortBy => {
    const ascOrder = config.sortBy === sortBy ? !config.ascOrder : true;
    const sortedData = sortData(chars.rows, ascOrder, sortBy);
    setConfig({ ...config, sortBy, ascOrder });
    setChars({ ...chars, rows: sortedData });
  };

  const onGenderChange = val => {
    const { rows, total } = filterData(val, chars.initData);
    setChars({ ...chars, rows, total });
  };

  return (
    <div className="container">
      <Filter
        label={'Gender'}
        options={config.genders}
        onChange={onGenderChange}
      />
      <Table {...chars} sortHeader={sortHeader} />
    </div>
  );
};

export default TableContainer;
