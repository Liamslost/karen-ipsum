import { MongoClient } from 'mongodb';
import { settings } from '../../config';

export function getDatabase() {
    return MongoClient.connect(settings.db)
};