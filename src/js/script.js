import axios from 'axios'

export default function status() {
    axios.get('http://localhost:3000/ecommerce-api/v1/compra-pagueme/13558571/status')
    .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
}