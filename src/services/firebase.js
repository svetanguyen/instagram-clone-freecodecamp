import { firebase } from '../lib/firebase';

export default async function doesUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', userName)
    .get();
  console.log(result);
  return result.docs.length > 0;
}
