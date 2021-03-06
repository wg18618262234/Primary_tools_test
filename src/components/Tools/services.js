import axios from 'axios'
const path = 'http://primary-tools-admin.gh.test'
// const path = 'http://0.0.0.0:3001'


export async function getTools() {
    try {
        const response = await axios.get(`${path}/primary/get_tools`);
        return response
    } catch (error) {
        console.error(error);
    }
}
export async function insertTools(data) {
    try {
        const response = await axios.post(`${path}/primary/insert_tools`, data);
        return response
    } catch (error) {
        console.error(error);
    }
}
export async function deleteTools(data) {
    try {
        const response = await axios.post(`${path}/primary/delete_tools`, data);
        return response
    } catch (error) {
        console.error(error);
    }
}
export async function updateTools(data) {
    try {
        const response = await axios.post(`${path}/primary/update_tools`, data);
        return response
    } catch (error) {
        console.error(error);
    }
}