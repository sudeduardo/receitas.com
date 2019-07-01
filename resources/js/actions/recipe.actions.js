import api from "../services/api"

export const listRecipe = async () => {
    try {
        const {data} = await api.get('/recipe');
        return data;
    }catch (e) {
        alert("Erro:" +e.message);
    }

};

export const getRecipe = async (id) => {
    const {data} = await api.get('/recipe/' + id);
    return data;
};

export const addRecipe = async (dataAdd) => {
    const {data} = await api.post('/recipe', dataAdd);

};

export const deleteRecipe = async (id) => {
    return await api.delete('/recipe/' + id);
};

export const updateRecipe = async (id, dataUpdate) => {
    const {data} = await api.put('/recipe/' + id, dataUpdate);
};

