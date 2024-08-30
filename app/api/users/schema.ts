import {z} from 'zod';

const schema = z.object({
    nombre: z.string().min(3),
})

export default schema;