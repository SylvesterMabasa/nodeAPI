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
			name : 'Park 50',
			location : 'location 50',
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
			res.should.be.json;
			res.body.should.be.a('array');
			done();
		});
	})
});


describe('/GET/:id parks', ()=>{
	it('It should GET a park given the id', (done) =>{
		
		const newPark = new Park(park);
			newPark.save((err, park) =>{
			chai.request(server)
			.get('/parks/'+park.id)
			.end((err, res)=>{
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('_id');
				res.body.should.have.property('name');
				res.body.should.have.property('location');
				res.body.should.have.property('entryfee');
				res.body.should.have.property('services');
				res.body._id.should.equal(park.id);
				done();
			});
		});
	});
});




describe('/POST parks', () => {
	it('It should POST a park', (done) =>{
		

		chai.request(server)
		.post('/parks')
		.send(park)
		.end((err, res) =>{
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.a('object');

			res.body.should.have.property('_id');
			res.body.should.have.property('name');
			res.body.name.should.be.a('string');
			res.body.should.have.property('location');
			res.body.location.should.be.a('string');
			res.body.should.have.property('entryfee');
			res.body.entryfee.should.be.a('number');
			res.body.should.have.property('services');
			res.body.services.should.be.a('array');

			done();
		});
	});
});

describe('/PUT/:id parks', () =>{

	it('It should update a park', (done) =>{

		const newPark = new Park(park);
			newPark.save((err, park) =>{

			chai.request(server)
			.put('/parks/'+park.id)
			.send({ name : 'new name'})
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('name');
				res.body.name.should.equal('new name');
				done();

			});
		
		});
	});
});

describe('/DELETE/:id parks', () =>{
	it('It should DELETE a park', (done)=>{

		const newPark = new Park(park);
			newPark.save((err, park) =>{

			chai.request(server)
			.delete('/parks/'+park.id)
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('message').eql('Park successfully deleted');
							done();

			});
		
		});
	});
} );




});


