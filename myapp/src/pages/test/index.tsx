import { render as renderAmis } from 'amis';
import schema from './schema';
const TestPage: React.FC<null> = () => {
  return renderAmis(
    schema,
    {},
    {
      fetcher: ({
        url, // 接口地址
        method, // 请求方法 get、post、put、delete
        data, // 请求数据
        responseType,
        config, // 其他配置
        headers, // 请求头
      }: any) => {
        console.log(url, method, data, responseType, config, headers, '123');
        return fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify(data),
        }).then((res) => res.json());
      },
      isCancel: () => false,
      theme: 'antd',
    },
  );
};

export default TestPage;
