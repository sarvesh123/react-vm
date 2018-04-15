import { firebaseAuth } from './firebase';

export const createUser = (email, password) => firebaseAuth.createUserWithEmailAndPassword(email, password);