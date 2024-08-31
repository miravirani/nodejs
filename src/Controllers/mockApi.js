import express from 'express';
import axios from 'axios';

const mockApi = async (req, res) => {
    try {

        const { data } = await axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user")

        res.status(203).send({
            status: 203,
            data: data
        })

    } catch (error) {

        console.error("Error fetching data:", error)
        res.status(500).send("Internal Server Error")
    }
};

export default mockApi;

// const protocol = process.env.PROTOCOL
// const domain = process.env.DOMAIN
// const tld = process.env.TLD 
// const mockport = process.env.MOCK_PORT
// const name = process.env.MOCK_NAME
// axios.get(`${protocol}://${domain}.${tld}/${mockport}/${name}`)