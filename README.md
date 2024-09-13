
# Waiter App

O Waiter App é uma solução completa para a gestão de pedidos em restaurantes. A aplicação integra um software de pedidos via app mobile com o acompanhamento em tempo real através de web sockets na interface web. As requisições são processadas por um backend robusto, utilizando MongoDB e Docker para armazenamento e gerenciamento de dados.

Funcionalidades:

- Cardápio Interativo: Clientes podem visualizar o cardápio digitalmente, explorar os produtos e fazer pedidos diretamente pelo aplicativo móvel.

- Pedidos em Tempo Real: Utilizando web sockets, a cozinha recebe os pedidos em tempo real, permitindo uma resposta rápida e eficiente.

- Backend Eficiente: O backend, desenvolvido com MongoDB e Docker, garante uma infraestrutura escalável e segura para o gerenciamento de dados.


## Rodando localmente

Clone o projeto

É importante rodar o mongo na porta 27017

```bash
  git clone https://github.com/alihpss/waiterapp.git
```

- Entre nos diretório do projeto, app e fe e troque o ip da constante baseUrl para seu ip local

Entre nos diretório do projeto, app, api e fe e siga os passos de instalação abaixo

```bash
  cd api 
  yarn

  cd ..

  cd app
  yarn

  cd ..

  cd fe
  yarn
```



Inicie o servidor, a página web e o app

```bash
  cd api 
  yarn dev

  cd ..

  cd app
  yarn start

  cd ..

  cd fe
  yarn dev
```


## Screenshots

App

![App Screenshot](https://private-user-images.githubusercontent.com/95890117/355587210-2c5c4c56-fc07-4ea7-a183-5214995ba598.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI5NzUwMTQsIm5iZiI6MTcyMjk3NDcxNCwicGF0aCI6Ii85NTg5MDExNy8zNTU1ODcyMTAtMmM1YzRjNTYtZmMwNy00ZWE3LWExODMtNTIxNDk5NWJhNTk4LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwNlQyMDA1MTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZTkyZDE1ZDI5ZWY5ODZlZjM1NmI3MzM5OTYxNmQ1MThmMGE4OTYzZTc0ODcxOWU2NWJjYmI0NzFhYTlhNThlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cc9b3Je5F7EVTtMS6O4Pa8K_bX0e6OqRwnMfy4sfkGg)

Web

![App Screenshot](https://private-user-images.githubusercontent.com/95890117/355586466-2189a625-2a9f-4a2c-a0f5-5ab5fffb99d2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI5NzUwMTQsIm5iZiI6MTcyMjk3NDcxNCwicGF0aCI6Ii85NTg5MDExNy8zNTU1ODY0NjYtMjE4OWE2MjUtMmE5Zi00YTJjLWEwZjUtNWFiNWZmZmI5OWQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA2VDIwMDUxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2ZDYxYjc4YThhNjdmZjE3ZDhlZGYxMjUzOGQ4ZDdkYzhjZjQ0MDg1MzNmYmJhMjI3NWMzNWMxZWQ2OWQ3NTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.u4DGOzTTlR347Tp9SFQAgBRxm_2-67NzOwWG6Dstr1M)

App

![App Screenshot](https://private-user-images.githubusercontent.com/95890117/355587172-f6225f3f-3679-4977-b710-133f03c9def5.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI5NzUwMTQsIm5iZiI6MTcyMjk3NDcxNCwicGF0aCI6Ii85NTg5MDExNy8zNTU1ODcxNzItZjYyMjVmM2YtMzY3OS00OTc3LWI3MTAtMTMzZjAzYzlkZWY1LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwNlQyMDA1MTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YmM2ZjEwN2ZkZjRjOGZmMmU1NjJmMzE2OWRjOTNkZjI0ZmU1ODI4ZmQ5MGQ5ZTMxYWE4N2MwNjhhNGUwYzlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sRXt9kZ3RAdw50fxdXiI9nxF3KGaPiB7lKKInjNmbHw)

App

![App Screenshot](https://private-user-images.githubusercontent.com/95890117/355587194-b34db5ee-a02d-4490-b5ec-e6d875936285.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI5NzUwMTQsIm5iZiI6MTcyMjk3NDcxNCwicGF0aCI6Ii85NTg5MDExNy8zNTU1ODcxOTQtYjM0ZGI1ZWUtYTAyZC00NDkwLWI1ZWMtZTZkODc1OTM2Mjg1LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwNlQyMDA1MTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZmU0Y2IxNmIyOWQyZjZhMGNlNDY0NTBmOTY1M2I0OGI4MWU0N2IyMjU4MGZkNDQwYjFkYTUwNjY4ZTQzZGYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cSMSGpWI9kZjucge96hj4mcOu1TG5b46OFyGdUWnFGA)



