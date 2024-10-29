import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis } from 'recharts';
import { Audio } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))
        // Now do this using Axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1])
                    }
                    // map multiline korle return kore na.
                    return obj;
                })
                setPhones(phonesWithFakeData);
                setLoading(false)
            }
            )

    }, [])

    return (
        <div>
            {
                loading && <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            }

            <h2 className="text-5xl">{phones.length}</h2>
            <BarChart width={900} height={400} data={phones}>

                <Bar dataKey="price" barSize={30} fill="#8884d8"
                />
                <XAxis dataKey='name'></XAxis>
            </BarChart>
        </div>
    );
};

export default Phones;