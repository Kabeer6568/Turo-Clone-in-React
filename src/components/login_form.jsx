import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Modal, Form, Input, Checkbox, InputNumber, Col, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';






// const layout = {
//     labelCol: {
//       span: 4,
//     },
//     wrapperCol: {
//       span: 20,
//     },
//   };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  

const LoginForm = ({login})=>{
    


    const onFinish = (values) => {
        login(values)
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

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


    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const showModal2 = () => {
        setIsModalOpen2(true);
    };
    const handleOk2 = () => {
        setIsModalOpen2(false);
    };
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };

    
    


    

    const items = [
        {
            key: '1',
            label: (
                <>
                <a type="primary" onClick={showModal2}>
        SignIn
      </a>
      <Modal title="Login Now!" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>





{/* Signup */}


      </Modal>
      </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                <a type="primary" onClick={showModal}>
        SignUp
      </a>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {/* <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="User Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        // wrapperCol={{
        //   ...layout.wrapperCol,
        //   offset: 4,
        // }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form> */}
      </Modal>
      </>
            ),
        }
    
    ];

    return (
        <>
        
        <Dropdown className="main-dropdown"
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <GiHamburgerMenu />
                                    </Space>
                                </a>
                            </Dropdown>

        </>
    )

}


export default LoginForm