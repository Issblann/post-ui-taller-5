/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para obtener comentarios desde una API
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return response.data; // Devuelve los datos de la API
    }
);

// Slice para manejar los comentarios
const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading'; // Cambia el estado a 'loading' mientras espera la respuesta
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Actualiza el estado a 'succeeded' cuando la petición tiene éxito
                state.comments = action.payload; // Guarda los comentarios obtenidos en el estado
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed'; // Si la petición falla, actualiza el estado a 'failed'
                state.error = action.error.message; // Guarda el mensaje de error
            });
    }
});

export default commentsSlice.reducer;
 */
