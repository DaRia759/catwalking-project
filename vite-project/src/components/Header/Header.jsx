import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { AboutUs, Animals, FAQ, HomePage } from './pages';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'About Us',
    key: 'information',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Animals',
    key: 'SubMenu',
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
    key: 'donation',
    icon: <AppstoreOutlined />,
    },
  {
    label: 'Contact Us',
    key: 'contact',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        FAQ
      </a>
    ),
    key: 'alipay',
  },
];
const Navigation = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;