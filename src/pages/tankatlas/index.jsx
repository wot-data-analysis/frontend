import { Alert, Button, Space, Divider, Row, Col, Typography, Image } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './index.less';

const { Title, Text } = Typography;

const ATLAS_DL = '//home.src.moe:8000/download/Athena%E5%9B%BE%E6%A0%87%E9%87%8D%E5%88%B6%E7%89%88/athena.icon.remake.big.1.16.1.0.wotmod'
const ATLAS_MIRROR_DL = '//home.src.moe:8000/download/Athena%E5%9B%BE%E6%A0%87%E9%87%8D%E5%88%B6%E7%89%88/AntiMirror_battle.1.16.1.0.wotmod'
const ATLAS_WITH_BOX_CE_DL = '//home.src.moe:8000/download/Athena%E5%9B%BE%E6%A0%87%E9%87%8D%E5%88%B6%E7%89%88/athena.icon.with.box-ce.wotmod'

function Atlas() {
  return (
    <>
      <Row justify="center" style={{ margin: '40px 0' }}>
        <Title level={1}>ð Athenaå¾æ éå¶ç</Title>
      </Row>
      <Row justify="center">
        <Title level={4}>å½åçæ¬ï¼<Text code>1.16.1.0</Text></Title>
      </Row>
      <Row justify="center" style={{ marginBottom: '14px' }}>
        <Alert
          type="warning"
          showIcon
          message="xvmç¨æ·ä¸éè¦ä¸è½½ååæä»¶"
        />
      </Row>
      <Row justify="center">
        <Space size={20}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={() => window.open(ATLAS_DL)}
          >
            ä¸è½½å¾æ 
          </Button>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={() => window.open(ATLAS_MIRROR_DL)}
          >
            ä¸è½½å¾æ ååæä»¶
          </Button>
          <Button
            // type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={() => window.open(ATLAS_WITH_BOX_CE_DL)}
          >
            ä¸è½½å¾æ ï¼ééæ¬ç«çå­ææåçº¯åçï¼
          </Button>
        </Space>
      </Row>
      <Divider />
      <Row
        justify="center"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        align="middle"
      >
        <Col>
          <Image
            width={260}
            src="/atlas.png"
          />
        </Col>
      </Row>
    </>
  )
}

export default Atlas;
