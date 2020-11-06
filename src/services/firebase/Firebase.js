import firestore from '@react-native-firebase/firestore';

export const notesCollection = firestore().collection('notes');

export const saveNote = (data) => {
  let payload = {
    title: null,
    content: null,
    date: null,
    time: null,
    color: null,
    createdAt: new Date(),
  };
  payload = {
    ...payload,
    ...data,
  };
  notesCollection.doc().set(payload);
};

export const retrieveNote = async () => {
  const doc = await (await notesCollection.orderBy('date', 'desc').get()).docs;
  // if (!doc.exists) {
  //   console.log('No such document!');
  //   return []
  // } else {
  //   console.log('Document data:', doc.data());
  // }
  const result = doc
    .map((e) => e.data())
    .map((row) => ({
      ...row,
      date: (row.date && row.date.toDate()) || new Date(),
      time: (row.time && row.time.toDate()) || new Date(),
      createdAt: (row.createdAt && row.createdAt.toDate()) || new Date(),
    }));

  return result;
};
