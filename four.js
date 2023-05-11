const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

const BASE_URL = 'https://petstore.swagger.io/v2';

describe('Pet API Tests', function () {
  let newPetId;

  it('should create a new pet', async function () {
    const requestBody = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    };

    const response = await axios.post(`${BASE_URL}/pet`, requestBody);

    expect(response.status).to.equal(200);
    expect(response.data.id).to.not.be.undefined;

    newPetId = response.data.id;
  });

  it('should retrieve the new pet', async function () {
    const response = await axios.get(`${BASE_URL}/pet/${newPetId}`);

    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal('doggie');
  });

  it('should update the new pet', async function () {
    const requestBody = {
      "id": newPetId,
      "category": {
        "id": 1,
        "name": "updated category"
      },
      "name": "updated doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 1,
          "name": "updated tag"
        }
      ],
      "status": "sold"
    };

    const response = await axios.put(`${BASE_URL}/pet`, requestBody);

    expect(response.status).to.equal(200);
  });

  it('should delete the new pet', async function () {
    const response = await axios.delete(`${BASE_URL}/pet/${newPetId}`);

    expect(response.status).to.equal(200);
  });

  it('should fail to retrieve the deleted pet', async function () {
    try {
      await axios.get(`${BASE_URL}/pet/${newPetId}`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});