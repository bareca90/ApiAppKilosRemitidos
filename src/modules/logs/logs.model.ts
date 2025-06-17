import mongoose, { Schema } from 'mongoose';
import { ILog } from '../../interfaces/logs.interfaces';


const LogSchema = new Schema<ILog>({
    level: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    meta: { type: Object }
});

// Especificando la colección "logs"
export default mongoose.model<ILog>('Log', LogSchema, 'logsAppKilosRemitidos');
