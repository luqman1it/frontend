import axios from "axios";

export const deleteData = async (projectId) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/deleteprojects/${projectId}`);
        console.log('Delete request sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending delete request:', error);
        throw error;
    }
};