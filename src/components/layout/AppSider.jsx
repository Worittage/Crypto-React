import { Layout, Card, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const siderStyle = {
    padding: '1rem',
  };

  export default function AppSider() {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
          <Card>
          <Statistic 
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          </Card>
      </Layout.Sider>
    )
  }