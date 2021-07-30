import axios from 'axios';


export function statusPagueme() {
    axios.get('http://localhost:3000/ecommerce-api/v1/compra-pagueme/13558571/status')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
}
export function statusCielo() {
    axios.get('http://localhost:3000/ecommerce-api/v1/compra-cielo/84b25e87-bb57-42c0-9bd0-632b38abcca5/status')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
}
export function buyCielo() {
    axios.post('http://localhost:3000/ecommerce-api/v1/compra-cielo',cieloData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
}
export function buyPagueme() {
    axios.post('http://localhost:3000/ecommerce-api/v1/compra-pagueme',paguemeData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
}

const cieloData = {
    
    "MerchantOrderId": "2014111703",
        "Customer": {
        "Name": "Comprador crédito simples"
    },
    "Payment": {
        "Type": "CreditCard",
            "Amount": 15700,
                "Installments": 1,
                    "SoftDescriptor": "123456789ABCD",
                        "CreditCard": {
            "CardNumber": "1234123412341231",
                "Holder": "Teste Holder",
                    "ExpirationDate": "12/2030",
                        "SecurityCode": "123",
                            "Brand": "Visa",
                                "CardOnFile": {
                "Usage": "Used",
                    "Reason": "Unscheduled"
            }
        },
        "IsCryptoCurrencyNegotiation": true
    }
}

const paguemeData = {
    
    "api_key": "ak_test_ZO3JQJmqwe07uDB0favmlh3mYMSnI6",
        "amount": 21000,
            "card_number": "4111111111111111",
                "card_cvv": "123",
                    "card_expiration_date": "0922",
                        "card_holder_name": "Morpheus Fishburne",
                            "customer": {
        "external_id": "#3311",
            "name": "Morpheus Fishburne",
                "type": "individual",
                    "country": "br",
                        "email": "mopheus@nabucodonozor.com",
                            "documents": [
                                {
                                    "type": "cpf",
                                    "number": "83369458063"
                                }
                            ],
                                "phone_numbers": ["+5511999998888", "+5511888889999"],
                                    "birthday": "1965-01-01"
    },
    "billing": {
        "name": "Trinity Moss",
            "address": {
            "country": "br",
                "state": "sp",
                    "city": "Cotia",
                        "neighborhood": "Rio Cotia",
                            "street": "Rua Matrix",
                                "street_number": "9999",
                                    "zipcode": "06714360"
        }
    },
    "shipping": {
        "name": "Neo Reeves",
            "fee": 1000,
                "delivery_date": "2000-12-21",
                    "expedited": true,
                        "address": {
            "country": "br",
                "state": "sp",
                    "city": "Cotia",
                        "neighborhood": "Rio Cotia",
                            "street": "Rua Matrix",
                                "street_number": "9999",
                                    "zipcode": "06714360"
        }
    },
    "items": [
        {
            "id": "r123",
            "title": "Red pill",
            "unit_price": 10000,
            "quantity": 1,
            "tangible": true
        },
        {
            "id": "b123",
            "title": "Blue pill",
            "unit_price": 10000,
            "quantity": 1,
            "tangible": true
        }
    ],
        "capture": false
}
