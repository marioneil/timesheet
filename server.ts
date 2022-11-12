import jsonServer from 'json-server';

const data =  [
    {
      id: "1",
      statusCode: "mock",
      lastModifiedAt: new Date("2-Mar-2020"),
      customer: {},
      mobilePhone: null,
      accessories: [],
    },
  ];

const server = jsonServer.create();
const router = jsonServer.router(data);

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});