import { faker } from '@faker-js/faker';
import pkg from 'express';
const { Express } = pkg;
const app = pkg();
const port = 8000;

app.use( pkg.json() );
app.use( pkg.urlencoded({ extended: true }) );

const createCompany = () => {
    const newAddress = {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: newAddress
    };
    return newCompany;
}

const createUser = () => {

    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.random.alphaNumeric(12),
        phoneNumber: faker.phone.number()
    }
    newUser.email = faker.internet.email(newUser.firstName, newUser.lastName);
    return newUser;
    
}

const fakeUser = createUser();
const fakeCompany = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json( fakeUser );
});

app.get("/api/company/new", (req, res) => {
    res.json( fakeCompany );
});

app.get("/api/user/company", (req, res) => {
    res.json( { user: fakeUser, company: fakeCompany } );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );