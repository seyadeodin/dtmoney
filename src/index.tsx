import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 6000,
          createdAt: new Date('2021-04-31 00:00:00')
        },
        {
          id: 2,
          title: 'Aluguel Estúdio',
          type: 'withdraw',
          category: 'Gastos',
          amount: 3500,
          createdAt: new Date('2021-04-21 00:00:00')
        },
        {
          id: 3,
          title: 'Freelance de arte',
          type: 'deposit',
          category: 'Arte',
          amount: 2000,
          createdAt: new Date('2021-03-31 00:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');  
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);