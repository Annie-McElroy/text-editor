import { text } from 'express';
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

  const textEditorDb = await openDB('textEditor', 1);

  const tx = textEditorDb.transaction('textEditor', 'readwrite');

  const store = tx.objectStore('textEditor');

  const request = store.add({ id: 1, value: content })

  const result = await request;

  console.log('Data saved', result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
