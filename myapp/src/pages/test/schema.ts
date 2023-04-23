export default {
  type: 'page',
  title: 'Hello world',
  body: [
    {
      type: 'crud',
      syncLocation: false,
      api: {
        method: 'get',
        url: 'http://sdk-admin.gemgala-ad.net/test-api/offer/getOfferList',
      },
      columns: [
        {
          name: 'id',
          label: 'ID',
          type: 'text',
          id: 'u:dd407ac15e5b',
        },
        {
          name: 'name',
          label: '名称',
          type: 'text',
          id: 'u:1f54d1b4124c',
        },
        {
          type: 'operation',
          label: '操作',
          buttons: [],
          id: 'u:9ad933b9576f',
        },
      ],
      bulkActions: [],
      itemActions: [],
      features: ['filter'],
      filterColumnCount: 3,
      id: 'u:7ca57666c23d',
      perPageAvailable: [10],
      messages: {},
      filter: null,
      initFetch: true,
    },
  ],
  id: 'u:32c88db47fb5',
  asideResizor: false,
  style: {
    boxShadow: ' 0px 0px 0px 0px transparent',
  },
  pullRefresh: {
    disabled: true,
  },
};
