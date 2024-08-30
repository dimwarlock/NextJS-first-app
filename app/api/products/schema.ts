import {z} from 'zod';

const schema = z.object ({
    nombre: z.string().min(3),
    precio: z.number().min(1).max(1000)
})

export default schema;