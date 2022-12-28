import './App.css';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { AutoComplete, Input } from 'antd';
import NoData from './components/NoData/NoData';
import DetailInfo from './components/DetailInfo/DetailInfo';
import { convertVietnamese, searchStudent } from './services/index';

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${convertVietnamese(query)}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <span>
              Found {convertVietnamese(query)} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${convertVietnamese(
                  query
                )}`}
                target='_blank'
                rel='noopener noreferrer'>
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

function App() {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
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
            onSearch={handleSearch}>
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
