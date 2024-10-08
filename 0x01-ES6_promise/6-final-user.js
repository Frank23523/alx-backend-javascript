import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.all(promises.map((p) => p.catch((e) => e)))
    .then((results) => results.map((result) => ({
      status: result instanceof Error ? 'rejected' : 'fulfilled',
      value: result instanceof Error ? result.toString() : result,
    })));
}
