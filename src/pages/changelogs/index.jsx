import { Typography, Divider } from 'antd';
import './index.less';

const { Title, Paragraph } = Typography;

function Changelogs() {
  return (
    <Typography>
      <Title>ð¥ æ´æ°æ¥å¿ Changelogs</Title>
      <Divider />

      <Title strong level={3}>2022-04-05</Title>
      <Paragraph className='changelog-p'>
        <ul>
          <li>ð å»æç¯æ ä¼¤æ¥è¯¢ä¸çº¿</li>
        </ul>
      </Paragraph>
      <Divider />

      <Title strong level={3}>2022-04-12</Title>
      <Paragraph className='changelog-p'>
        <ul>
          <li>ð æ°å¢æååå¨æåµ</li>
          <li>â è°æ´æ¶å½å¦ååè¡¨</li>
          <li>â è°æ´åé¡µæå¤§è®°å½ä¸º100æ¡</li>
        </ul>
      </Paragraph>
      <Divider />

      <Title strong level={3}>2022-04-15</Title>
      <Paragraph className='changelog-p'>
        <ul>
          <li>ð çå­ææåçº¯åç æä»¶ä¸çº¿</li>
        </ul>
      </Paragraph>
      <Divider />

      <Title strong level={3}>2022-04-18</Title>
      <Paragraph className='changelog-p'>
        <ul>
          <li>ð Athenaå¾æ éå¶ç ä¸çº¿</li>
        </ul>
      </Paragraph>
      <Divider />
    </Typography>
  )
}

export default Changelogs;
