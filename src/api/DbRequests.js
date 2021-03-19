import { db_auth, db_store } from "./Db";

const requestResult = (hasError, dataReceived) => {
  const status = { error: hasError, data: dataReceived };
  return status;
};

export const getChargers = async () => {
  try {
    console.log("request to chargers");
    const collection = [];
    const result = await db_store.collection("veho").get();
    result.docs.map((doc) => {
      collection.push(doc.data());
    });

    return requestResult(false, collection);
  } catch (error) {
    return requestResult(true, "error getting data");
  }
};

export const getVehicles = async () => {
  try {
    const user = await db_store
      .collection("users")
      .doc(db_auth.currentUser.uid)
      .get();
    const company = await user.data().company;
    const vehicles = [];

    const vehicle = await db_store
      .collection("vehicle")
      .where("company", "==", company)
      .get();
    await vehicle.forEach((doc) => {
      const data = doc.data();
      vehicles.push(data);
    });

    return requestResult(false, vehicles);
  } catch (error) {
    console.log("error while getting vehicles", error.message);
    return requestResult(true, error.message);
  }
};

export const getUser = async () => {
  try {
    const user = await db_store
      .collection("users")
      .doc(db_auth.currentUser.uid)
      .get();

    return requestResult(false, user.data());
  } catch (error) {
    console.log("error while getting vehicles", error.message);
    return requestResult(true, error.message);
  }
};

export const getQueues = async () => {
  try {
    const userId = db_auth.currentUser.uid;
    const user = await db_store.collection("users").doc(userId).get();
    const company = user.data().company;
    const queueList = await db_store.collection("queue").doc(company).get();
    const queue = await queueList.data().queue;

    return requestResult(false, queue);
  } catch (error) {
    console.log("error while getting vehicles", error.message);
    return requestResult(true, error.message);
  }
};

export const getUsers = async () => {
  try {
    const collection = [];
    const result = await db_store.collection("users").get();
    result.docs.map((doc) => {
      collection.push(doc.data());
    });

    return requestResult(false, collection);
  } catch (error) {
    return requestResult(true, "error getting data");
  }
};
