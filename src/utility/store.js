import { isEmptyOrNull } from "./helper";

class LocalStore {
  store = undefined;

  initStore = () => {
    if (isEmptyOrNull(window)) {
      return null;
    }
    this.store = window.localStorage;
  };

  getStore = () => {
    return this.store;
  };

  getAllReadBooks = () => {
    if (!isEmptyOrNull(this.store)) {
      const readBooks = JSON.parse(this.store.getItem("reads"));
      if (!isEmptyOrNull(readBooks)) {
        return readBooks;
      }
    }

    return null;
  };

  getAllWishlistBooks = () => {
    if (!isEmptyOrNull(this.store)) {
      const wishlist = JSON.parse(this.store.getItem("wishlist"));
      if (!isEmptyOrNull(wishlist)) {
        return wishlist;
      }
    }

    return null;
  };

  addBookToWishlist = (book) => {
    if (!isEmptyOrNull(book)) {
      const wishlist = JSON.parse(this.store.getItem("wishlist"));
      if (!isEmptyOrNull(wishlist)) {
        wishlist.push(book);
        this.store.setItem("wishlist", JSON.stringify(wishlist));
      } else {
        this.store.setItem("wishlist", JSON.stringify([book]));
      }
    }
  };

  addBookToRead = (book) => {
    if (!isEmptyOrNull(book)) {
      const reads = JSON.parse(this.store.getItem("reads"));
      if (!isEmptyOrNull(reads)) {
        reads.push(book);
        this.store.setItem("reads", JSON.stringify(reads));
      } else {
        this.store.setItem("reads", JSON.stringify([book]));
      }
    }
  };

  isBookWishlisted = (book) => {
    if (!isEmptyOrNull(book)) {
      const wishlist = JSON.parse(this.store.getItem("wishlist"));
      if (!isEmptyOrNull(wishlist)) {
        const wishlistBook = wishlist.find((item) => book.id === item.id);

        if (!isEmptyOrNull(wishlistBook)) {
          return true;
        }
      }
    }
    return false;
  };

  isBookReaded = (book) => {
    if (!isEmptyOrNull(book)) {
      const reads = JSON.parse(this.store.getItem("reads"));
      if (!isEmptyOrNull(reads)) {
        const readBook = reads.find((item) => book.id === item.id);

        if (!isEmptyOrNull(readBook)) {
          return true;
        }
      }
    }
    return false;
  };
}

export const localStore = new LocalStore();

localStore.initStore();
