import React, { useEffect } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { useDispatch, useSelector } from 'react-redux';

import { employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { getAllEmployees } from '../Redux/Slicies/EmployeeSlice.js';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const dispatch = useDispatch();
  const editing = { allowDeleting: true, allowEditing: true };
  const getData = async () => {
    await dispatch(getAllEmployees());
  };
  const ifilter = { params: { showSpinButton: false } };

const  employeesData  = useSelector(({employee})=> employee.employees)
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData.result}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} filter= {ifilter}/>)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
