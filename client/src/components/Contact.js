import React, { useState } from 'react'
import { Typography } from 'antd';
import { Form, Input, Button ,message} from 'antd';
import { Row, Col } from 'antd';
import api from '../api'
const { Title } = Typography;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 18,
    },
};
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
function Contact({vaisble,setVisible}) {
    const [validateStatus, setvalidateStatus] = useState({ phone: "" })
    const [value, setValue] = useState()
    const [form] = Form.useForm();
    const onPhoneChange = (values) => {
        //console.log(values);
        setValue(values)
        setvalidateStatus({ ...validatePhone(values) });
    };
    const onFinish = (values) => {
             console.log(value);
            handleIncludeContact(values.contact)
    };
    const handleIncludeContact = async (payload) => {
        console.log(payload);
        await api.insertContact(payload).then(res => {
            info()
        })
        onReset()
    }
    const info = () => {
        message.info('Contact inserted successfully');
      };
    const onReset = () => {
        form.resetFields();
        setVisible(false)
      };
    function validatePhone(number) {
        var regx = /^0\d{9}$/
        console.log(regx.test(number));
        console.log(number);
        if (regx.test(number)) {
            return {
                status: 'success',
                errorMsg: null,
            };
        }else if(number == ''){
            return {
                status: 'error',
                errorMsg: 'Phone is required!',
            };
        }
        return {
            status: 'error',
            errorMsg: 'Phone is not a valid number!',
        };
    }

    return (
        <div>
            <Title style={{ fontWeight: 700 }}>CONTACT US</Title>
            <Row justify="center">
                <Col span={24} >
                    <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} requiredMark={false} validateMessages={validateMessages}>
                        <Form.Item
                            name={['contact', 'fullname']}
                            label="Full Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Full Name" bordered={false}/>
                        </Form.Item>
                        <Form.Item
                            name={['contact', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input placeholder="Email" bordered={false}/>
                        </Form.Item>
                        <Form.Item
                            name={['contact', 'phone']}
                            label="Phone"
                            validateStatus={validateStatus.status}
                            help={validateStatus.errorMsg }
                            rules={[
                                {
                            
                                    required: true,
                                },
                            ]}
                        >
                            <Input 
                                placeholder="Phone"
                                bordered={false}
                                type="tel"
                                maxLength={10}
                                value={value}
                                onChange={e => onPhoneChange(e.target.value)}
                            />
                            
                        </Form.Item>
                        <Form.Item name={['contact', 'message']} label="Message"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea placeholder="Message" bordered={false} rows={4} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
                            <Button  htmlType="submit" size='large' shape="round" style={{backgroundColor:"black",color:'white',fontWeight:700}} type="text">
                                Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default Contact
