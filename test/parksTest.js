process.env.NODE_ENV= 'test';

const mongoose = require('mongoose');
const Park = require('../api/models/parksModels');
const chai = require('chai');
const chaiHttp =require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Parks', () => {

	const park = {
			name : "Park 50",
			location : "location 50",
			entryfee: 50,
			services : ["s 50", "s 55"]
		}

	beforeEach((done) => {
		Park.remove({}, (err) => {
			done();
		});
	});

describe('/GET parks', () => {
	it('It should GET all parks', (done) =>{
		chai.request(server)
		.get('/parks')
		.end ((err, res) =>{
			res.should.have.status(200);
			res.body.should.be.a('array');
			done();
		});
	})
});


// describe('/GET/:id parks', ()=>{
// 	it('It should GET a park given the id', (done) =>{
		
// 		const prk = new Park();
// 		prk.save((err, park) =>{
// 			chai.request(server)
// 			.get('/parks/'+park.id)
// 			.send(park)
// 			.end((err, res)=>{
// 				res.should.have.status(200);
// 				res.body.should.be.a('object');
	
// 				done();
// 			});
// 		});
// 	});
// });




describe('/POST parks', () => {
	it('It should POST a park', (done) =>{
		

		chai.request(server)
		.post('/parks')
		.send(park)
		.end((err, res) =>{
			res.should.have.status(200);
			res.body.should.be.a('object');

			park.should.be.a('object');
			park.should.have.property('name');
			park.name.should.be.a('string');
			park.should.have.property('location');
			park.location.should.be.a('string');
			park.should.have.property('entryfee');
			park.entryfee.should.be.a('number');
			park.should.have.property('services');
			park.services.should.be.a('array');
			done();
		});
	});
});







});


