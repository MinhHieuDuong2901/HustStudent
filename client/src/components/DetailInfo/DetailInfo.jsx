import { React, useState } from 'react';
import { Image, Button, Modal, Checkbox, Form, Input, Tabs } from 'antd';
import './DetailInfo.scss';
import { EyeInvisibleOutlined } from '@ant-design/icons';

const DetailInfo = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container'>
      <div className='img-container'>
        <Image
          width='100%'
          src={data.avatarUrl}
          fallback='data:image/png;base64,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'
        />
      </div>
      <div className='info-container'>
        <div className='container_title'>
          <h1>thông tin cá nhân</h1>
          <div className='line'></div>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Họ và tên:</p>
          <p className='info-content'>{data.fullName}</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Mã số sinh viên:</p>
          <p className='info-content'>{data.studentId}</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Ngày sinh:</p>
          <p className='info-content'>
            {data.birthdate
              ? new Date(data.birthdate).toLocaleDateString('vi-VN')
              : 'Chưa cập nhật'}
          </p>
        </div>

        <div className='info-container_content'>
          <p className='info-title'>Lớp:</p>
          <p className='info-content'>
            {data.className ? data.className : 'Chưa cập nhật'}
          </p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Email:</p>
          {data.email || data.personalEmail ? (
            <div className='email'>
              <a href={'mailto' + data.email} className='info-content'>
                {data.email}
              </a>
              <a href={'mailto' + data.personalEmail} className='info-content'>
                {data.personalEmail}
              </a>
            </div>
          ) : (
            <p className='info-content'>Chưa cập nhật</p>
          )}
          <div className='email'>
            <a href={'mailto' + data.email} className='info-content'>
              {data.email}
            </a>
            <a href={'mailto' + data.personalEmail} className='info-content'>
              {data.personalEmail}
            </a>
          </div>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Link CV:</p>
          {data.cvUrl ? (
            <a
              href={data.cvUrl}
              className='info-content'
              target='_blank'
              rel='noopener noreferrer'>
              Link CV
            </a>
          ) : (
            <p className='info-content'>Chưa cập nhật</p>
          )}
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Link Facebook:</p>
          {data.profileUrl ? (
            <a
              href={data.profileUrl}
              className='info-content'
              target='_blank'
              rel='noopener noreferrer'>
              Link Facebook
            </a>
          ) : (
            <p className='info-content'>Chưa cập nhật</p>
          )}
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Số điện thoại:</p>
          <p className='info-content'>
            {data.phoneNumber ? data.phoneNumber : 'Chưa cập nhật'}
          </p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Địa chỉ:</p>
          <p className='info-content'>
            {data.homeCommune && data.homeDistrict && data.homeProvince
              ? data.homeCommune +
                ', ' +
                data.homeDistrict +
                ', ' +
                data.homeProvince
              : data.contactInfo
              ? data.contactInfo
              : 'Chưa cập nhật'}
          </p>
        </div>
        <Button icon={<EyeInvisibleOutlined />} onClick={showModal}>
          Unhide
        </Button>
        <Modal
          title='Đăng nhập'
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Form
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <Form.Item
              label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}>
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='remember'
              valuePropName='checked'
              wrapperCol={{
                offset: 8,
                span: 16,
              }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className='timetable-container'>
        <div className='container_title'>
          <h1>thời khoá biểu</h1>
          <div className='line'></div>
        </div>
        <div className='timetable-container_content'>
          <Tabs
            defaultActiveKey='1'
            items={new Array(7).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `${id === '1' ? 'Chủ nhật' : 'Thứ ' + id}`,
                key: id,
                children: (
                  <div className='class-item'>
                    <div className='class-time'>
                      <span>7:30</span>
                      <div className='v-line'></div>
                      <span>9:30</span>
                    </div>
                    <div className='class-info'>
                      <p className='class-name'>
                        123456 - Công nghệ phần mềm - IT1234
                      </p>
                      <span>Tuần học: 3-10,12-15,18-21</span>
                    </div>
                    <div className='class-room'>
                      <span>D8-103</span>
                    </div>
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
