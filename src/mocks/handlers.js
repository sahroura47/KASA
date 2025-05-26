import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:8080/api/properties', () => {
    return  HttpResponse.json([
        { id: '1', title: 'Maison Nantes', pictures: ['image1.jpg'] },
        { id: '2', title: 'Appartement Paris', pictures: ['image2.jpg'] },
      ], {status:200});
    }),

];