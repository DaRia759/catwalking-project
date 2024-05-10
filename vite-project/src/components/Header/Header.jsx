import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { AboutUs, Animals, FAQ, HomePage } from './pages';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    label: 'Home',
    key: '/',
    icon: <MailOutlined />,
  },
  {
    label: 'About Us',
    key: '/about',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Animals',
    key: '/animals',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'CATegories',
        children: [
          {
            label: 'Senior Cats',
            key: 'setting:1',
            },
          {
            label: '+1 year old cats',
            key: 'setting:2',
          },
          {
            label: 'Kittens',
            key: 'setting:3',
          },
        ],
      },
      {
        type: 'group',
        label: 'DOGegories',
        children: [
          {
            label: 'Senior Dogs',
            key: 'setting:4',
            },
          {
            label: '+1 year old dogs',
            key: 'setting:5',
          },
          {
            label: 'Puppies',
            key: 'setting:6',
          },
        ],
      },
    ],
    },
  {
    label: 'Donate',
    key: '/donation',
    icon: <AppstoreOutlined />,
    },
  {
    label: 'Contact Us',
    key: '/contacts',
    icon: <AppstoreOutlined />,
  },
];
const Navigation = () => {
    const [current, setCurrent] = useState(window.location.pathname);
    const navigate = useNavigate();
    const onClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  };
  return <Menu className='header' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;