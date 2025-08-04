import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { Server } from 'http';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 400 when pair is empty', () => {
    return request(app.getHttpServer() as unknown as Server)
      .post('/search')
      .send({
        pair: '',
        corpus: ['cantar', 'canto'],
      })
      .expect(400)
      .expect((res) => {
        expect(res.body).toEqual({
          error: 'Bad Request',
          message: expect.arrayContaining([
            'El par de caracteres no puede estar vacío',
            'El par de caracteres debe tener al menos 1 caracter',
          ]),
          statusCode: 400,
        });
      });
  });

  it('should return 400 when corpus is empty', () => {
    return request(app.getHttpServer() as unknown as Server)
      .post('/search')
      .send({
        pair: 'ca',
        corpus: [],
      })
      .expect(400)
      .expect((res) => {
        expect(res.body).toEqual({
          error: 'Bad Request',
          message: expect.arrayContaining([
            'El corpus debe contener al menos un elemento',
          ]),
          statusCode: 400,
        });
      });
  });

  it('should return count when request is valid', () => {
    return request(app.getHttpServer() as unknown as Server)
      .post('/search')
      .send({
        pair: 'ca',
        corpus: ['cantar', 'canto'],
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({
          pair: 'ca',
          count: 2,
        });
      });
  });
});
