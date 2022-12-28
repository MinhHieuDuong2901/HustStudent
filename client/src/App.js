import './App.css';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { AutoComplete, Input } from 'antd';
import NoData from './components/NoData/NoData';
import DetailInfo from './components/DetailInfo/DetailInfo';
import { convertVietnamese, searchStudent } from './services/index';

const searchResult = (array) =>{
  return Array.isArray(array) && array.map((item, idx) => {
      return {
        value: `${item.fullName} ${idx}`,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <div>
              {item.fullName}
            </div>
          </div>
        ),
      };
    })

}
;

function App() {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  const onChange = async (data: string) => {
    data && searchStudent(convertVietnamese(data)).then(deto=>{
      if(deto.data.status && deto.data.data){
        const result = searchResult(deto.data.data);
        setOptions(result)
      }
      else {
        setOptions([]);
      }
    })
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
            onChange={onChange}
            >
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
          <DetailInfo />
        </Col>
      </Row>
    </div>
  );
}

export default App;
