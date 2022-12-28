import { React, useState } from 'react';
import { Image, Button, Modal, Checkbox, Form, Input, Tabs } from 'antd';
import './DetailInfo.scss';
import { EyeInvisibleOutlined } from '@ant-design/icons';

const DetailInfo = () => {
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
          src='https://storage.googleapis.com/hust-edu.appspot.com/avatar/4872968412856320'
        />
      </div>
      <div className='info-container'>
        <div className='container_title'>
          <h1>thông tin cá nhân</h1>
          <div className='line'></div>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Họ và tên:</p>
          <p className='info-content'>Nguyễn Văn A</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Ngày sinh:</p>
          <p className='info-content'>15-01-2004</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Mã số sinh viên:</p>
          <p className='info-content'>20176584</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Lớp:</p>
          <p className='info-content'>Việt Nhật 03-K63</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Email:</p>
          <div className='email'>
            <p className='info-content'>abcsđsfdsfdd@sis.hust.edu.vn</p>
            <p className='info-content'>abcd@gmail.com</p>
          </div>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Số điện thoại:</p>
          <p className='info-content'>0123456789</p>
        </div>
        <div className='info-container_content'>
          <p className='info-title'>Địa chỉ:</p>
          <p className='info-content'>
            Phường Đông Triều, Thị xã Đông Triều, Tỉnh Quảng Ninh
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
