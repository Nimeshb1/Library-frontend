import axios from "axios";
import { useId } from "react";

import { Next } from "react-bootstrap/esm/PageItem";

const baseApiUrl = "http://localhost:8000/av1/users";
const BookcomUrl = "http://localhost:8000/av1/books";
const transcomUrl = "http://localhost:8000/av1/transaction";

//
const getUserFromSessionStorage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return user?._id;
  }
  return;
};

export const regrestration = async (userdata) => {
  try {
    const { data } = await axios.post(baseApiUrl, userdata);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// logiuser

export const loginUser = async (userdata) => {
  try {
    const { data } = await axios.post(baseApiUrl + "/login", userdata);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      starus: "error",
      message: error.message,
    };
  }
};

// adding books

export const addBooks = async (userdata) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.post(BookcomUrl, userdata, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// dispaly all books
export const fatchAllData = async () => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.get(BookcomUrl, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    const message = error.message;

    console.log(error.message);
  }
};

// borrows books
export const borrowsBooks = async (ids) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "Please Lonin",
      };
    }

    const { data } = await axios.post(
      BookcomUrl + "/borrow",
      { ids },
      { headers: { Authorization: userId } }
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// borrow books by user
export const borrowBooksByUserId = async (userId) => {
  try {
    const userId = getUserFromSessionStorage();
    if (!userId) {
      return {
        status: "error",
        message: "please login ",
      };
    }
    const data = await axios.get(BookcomUrl + "/borrowBooks", {
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
// delete books
export const deleteBooks = async (ids) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login ",
      };
    }

    const { data } = await axios.delete(BookcomUrl, {
      data: { ids },
      heades: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// return books
export const retunBooks = async (ids) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login ",
      };
    }

    const { data } = await axios.patch(
      BookcomUrl,
      { ids },

      {
        headers: {
          Authorization: userId,
        },
      }
    );
    console.log(ids);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// get all transaction

export const getAlltransaction = async () => {
  try {
    const userId = await getUserFromSessionStorage();
    if (!userId) {
      return {
        status: "error",
        message: "please login ",
      };
    }

    const { data } = await axios.get(transcomUrl, {
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
