import { http, rest } from 'msw';

export const handlers = [
  http.get('http://localhost:8080/api/properties', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: '1', title: 'Maison', pictures: ['url1.jpg'] },
        { id: '2', title: 'Appartement', pictures: ['url2.jpg'] },
      ])
    );
  }),
];