// 专门针对amis的请求处理
export function amisRequest(url: string, data: any, method: string, options: any) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

// 针对umi的请求处理
export function umiRequest(url: string, options: any) {}
