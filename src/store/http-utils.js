import Vue from "vue";

const getAndAsyncCommit = (store, { url, mutationType }) => {
  return new Promise((resolve, reject) => {
    store.commit(mutationType.PENDING);
    Vue.http
      .get(url)
      // API Success
      .then(response => {
        store.commit(mutationType.SUCCESS, response.data);
        resolve(response.data);
      })
      // An HTTP Error
      .catch(error => {
        store.commit(mutationType.FAILURE);
        reject(error);
      });
  });
};

const getAndCommit = (store, { url, mutationType }) => {
  return new Promise((resolve, reject) => {
    Vue.http
      .get(url)
      // API Success
      .then(response => {
        store.commit(mutationType, response.data);
        resolve(response.data);
      })
      // An HTTP Error
      .catch(error => {
        reject(error);
      });
  });
};

const getAndDispatch = (store, { url, actionType }) => {
  return new Promise((resolve, reject) => {
    Vue.http
      .get(url)
      // API Success
      .then(response => {
        store
          .dispatch(actionType, response.body)
          .then(() => resolve(response.body));
      })
      // An HTTP Error
      .catch(error => {
        reject(error);
      });
  });
};

export { getAndCommit, getAndAsyncCommit, getAndDispatch };
