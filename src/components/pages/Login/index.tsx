import * as React from 'react';
import {
  Input, Card, Form, Button, Select, Row, Col,
} from 'antd';
import { useForm } from 'antd/lib/form/util';
import FormItem from 'antd/lib/form/FormItem';
import MainLayout from '../../layout/MainLayout';
import { ReactComponent as Logo } from './Telegram_logo.svg';
import './index.less';
import SelectCountryCode from './SelectCountryCode';
import { SIGN_IN_TEXT } from './constants';

const Login = (): React.ReactElement => {
  const [form] = useForm();
  return (
    <MainLayout sidebarCollapsed>
      <div className="login-page">
        <Logo width="100px" className="login-page-logo" />
        <Card title="Sign in">
          <p>
            {SIGN_IN_TEXT}
          </p>
          <Form form={form} layout="vertical">
            <FormItem label="Country">
              <SelectCountryCode showSearch />
            </FormItem>
            <FormItem label="Phone">
              <Input.Group>
                <Row gutter={0}>
                  <Col span={6}>
                    <SelectCountryCode displayCountryName={false} />
                  </Col>
                  <Col span={18}>
                    <Input />
                  </Col>
                </Row>
              </Input.Group>
            </FormItem>
            <Button>Login</Button>
          </Form>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Login;
