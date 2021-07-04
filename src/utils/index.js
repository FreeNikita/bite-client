import { nanoid } from 'nanoid';

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const getFileType = (file) => file.name.split('.').pop();

export const generateFileName = (type) => `${nanoid()}.${type}`;
