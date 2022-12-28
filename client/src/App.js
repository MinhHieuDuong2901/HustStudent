import './App.css';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { AutoComplete, Input } from 'antd';
import NoData from './components/NoData/NoData';
import DetailInfo from './components/DetailInfo/DetailInfo';
import { isEmpty } from 'lodash';
import { convertVietnamese, searchStudent } from './services/index';

const searchResult = (array) => {
  return (
    Array.isArray(array) &&
    array.map((item, idx) => {
      return {
        value: `${item.fullName} ${item.studentId}`,
        data: item,
        label: (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-between',
            }}>
            <div
              style={{
                fontWeight: '600',
                fontSize: '1rem',
                color: '#000',
              }}>
              {item.fullName} {item.studentId}
            </div>
            <div>{item.className}</div>
          </div>
        ),
      };
    })
  );
};
function App() {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState({});

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value, data) => {
    return setValue(data);
  };

  const onChange = async (data) => {
    data &&
      searchStudent(convertVietnamese(data)).then((deto) => {
        if (deto.data.status && deto.data.data) {
          const result = searchResult(deto.data.data);
          setOptions(result);
        } else {
          setOptions([]);
        }
      });
  };

  return (
    <div className='App'>
      <Row>
        <Col lg={{ span: 12, offset: 6 }} xs={{ span: 22, offset: 1 }}>
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
              width: '100%',
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            onChange={onChange}>
            <Input.Search
              size='large'
              placeholder='Tên sinh viên hoặc Mã số sinh viên'
              enterButton
            />
          </AutoComplete>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
          {/* {!isEmpty(value) ? (
            value.status == 1 ? (
              <DetailInfo data={value.data} />
            ) : (
              <NoData />
            )
          ) : null} */}
          {!isEmpty(value) ? <DetailInfo data={value.data} /> : null}
        </Col>
      </Row>
    </div>
  );
}

export default App;
