const BASE_URL = 'cms-api-test-proud-jaguar-cf.mybluemix.net'
//const BASE_URL = 'http://localhost:3002'

export const getCompanies = async () => {
    const response = await fetch(`${BASE_URL}/companies`)
    const json = await response.json()
    return json
}

export const getCompaniesById = async (id) => {
    const response = await fetch(`${BASE_URL}/companies/${id}`)
    const json = await response.json()
    return json
}

export const addCompany = async (companyData) => {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(companyData)
    }
    const newCompany = await fetch(`${BASE_URL}/companies/addCompany`, config)
    const response = await newCompany.json()
    return response
  }