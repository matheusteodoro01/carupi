
import request from 'supertest'

import app from '../src/app'




test('Cadastrar Carro', async ()=>{
    
   const response = await request(app)
    .post('/car')
    .send({
        marca: "Chevrolet",
        modelo: "Corsa Maxx",
        versao: "1.0 Completo",
        ano: "2003",
        quilometragem: "200.000",
        tipoCambio: "Manual",
        precoVenda: "15.500"
    })

    expect(response.status).toBe(200)
})


test('Listar Carros', async ()=>{
    
    const response = await request(app)
     .get('/cars')
    
 
     expect(response.status).toBe(200)
 })

test('Editar Carro', async ()=>{
    
    const response = await request(app)
     .post('/car')
     .send({
         marca: "Chevrolet",
         modelo: "Corsa Maxx",
         versao: "1.0 Completo",
         ano: "2003",
         quilometragem: "200.000",
         tipoCambio: "Manual",
         precoVenda: "15.500"
     })
 
    await request(app)
     .put(`/car/${response.body.id}`)
     .send({
        marca: "Chevrolet",
        modelo: "Corsa Maxx",
        versao: "1.0 Completo",
        ano: "2003",
        quilometragem: "1000",
        tipoCambio: "Manual",
        precoVenda: "13500"
    })
   
 
     expect(response.status).toBe(200)
 })



test('Apagar Carro', async ()=>{

    const response = await request(app)
    .post('/car')
    .send({
        marca: "Chevrolet",
        modelo: "Captiva",
        versao: "1.0 Completo",
        ano: "2003",
        quilometragem: "200.000",
        tipoCambio: "Manual",
        precoVenda: "15.500"
    })

     await request(app)
     .delete(`/car/${response.body.id}`)
   
 
     expect(response.status).toBe(200)
 })