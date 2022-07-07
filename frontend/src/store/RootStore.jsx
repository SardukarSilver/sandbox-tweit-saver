/* eslint-disable no-console */
import { makeObservable, observable, action } from "mobx";
import axios from "axios";

export default class RootStore {
  constructor() {
    makeObservable(this, {
      results: observable,
      saved: observable,
      isFirstRender: observable,
      getSearchResults: action,
      addItemToSaved: action,
      clearStore: action,
      storeInLs: action,
      getSavedFromLs: action,
    });
  }

  results = [];

  saved = [];

  isFirstRender = true;

  getSearchResults = (searchInput) => {
    axios
      .get("/api/search", {
        params: {
          q: searchInput,
        },
      })
      .then(({ data }) => (this.results = data.statuses))
      .catch((err) => console.log(err));
  };

  addItemToSaved = (id) => {
    const selectedItem = this.results.filter((item) => item.id === id);
    this.saved.push(selectedItem[0]);
    this.results = this.results.filter((item) => item.id !== id);

    if (this.saved.length > 0) {
      this.storeInLs();
    }
  };

  storeInLs = () => {
    const data = JSON.stringify(this.saved);
    localStorage.setItem("TSS", data);
    console.log(localStorage);
  };

  getSavedFromLs = () => {
    if (localStorage.getItem('TSS') !== null) {
      this.saved = JSON.parse(localStorage.getItem("TSS"));
    }
    this.isFirstRender = false;
  };

  clearStore = () => {
    this.saved = [];
    localStorage.removeItem("TSS");
  };
}
